import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './CosmicHeroCanvas.css';

const CosmicHeroCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 450;
    const height = mount.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Responsive camera framing: ensures globe & orbital rings (radius 2.1) are 100% visible with margin
    const updateCameraAndSize = () => {
      if (!mount) return;
      const w = mount.clientWidth || 450;
      const h = mount.clientHeight || 450;
      if (w === 0 || h === 0) return;

      camera.aspect = w / h;
      const targetRadius = 2.65;
      const fovRad = (camera.fov * Math.PI) / 180;
      const minAspect = Math.min(1, w / h);
      camera.position.z = Math.max(6.2, targetRadius / (Math.tan(fovRad / 2) * minAspect));

      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    updateCameraAndSize();

    // Group for all celestial objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Inner Glowing Core Sphere
    const coreGeo = new THREE.IcosahedronGeometry(1.0, 3);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x4c1d95,
      emissive: 0x2e1065,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // 2. Translucent outer shell
    const shellGeo = new THREE.IcosahedronGeometry(1.25, 2);
    const shellMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const shellMesh = new THREE.Mesh(shellGeo, shellMat);
    group.add(shellMesh);

    // 3. Planetary Orbital Ring 1
    const ringGeo1 = new THREE.TorusGeometry(1.8, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.8,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2.5;
    ring1.rotation.y = Math.PI / 6;
    group.add(ring1);

    // 4. Planetary Orbital Ring 2 (Counter-angled)
    const ringGeo2 = new THREE.TorusGeometry(2.1, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.6,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = -Math.PI / 3;
    ring2.rotation.y = -Math.PI / 4;
    group.add(ring2);

    // 5. Orbiting Data Satellite Nodes
    const satelliteGroup = new THREE.Group();
    const satCount = 6;
    const satGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const satMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });

    for (let i = 0; i < satCount; i++) {
      const angle = (i / satCount) * Math.PI * 2;
      const sat = new THREE.Mesh(satGeo, satMat);
      sat.position.set(Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8);
      satelliteGroup.add(sat);
    }
    satelliteGroup.rotation.x = Math.PI / 2.5;
    satelliteGroup.rotation.y = Math.PI / 6;
    group.add(satelliteGroup);

    // 6. Ambient & Point Lights
    const ambientLight = new THREE.AmbientLight(0x7c3aed, 1.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x06b6d4, 3, 10);
    pointLight.position.set(2, 2, 2);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xa855f7, 2.5, 10);
    pointLight2.position.set(-2, -2, -2);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onPointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.5;
      targetY = y * 0.5;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Resize Observer & Handler
    const resizeObserver = new ResizeObserver(() => {
      updateCameraAndSize();
    });
    resizeObserver.observe(mount);
    window.addEventListener('resize', updateCameraAndSize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth mouse follow
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      group.rotation.y = elapsed * 0.3 + mouseX;
      group.rotation.x = Math.sin(elapsed * 0.2) * 0.15 - mouseY;

      coreMesh.rotation.y = -elapsed * 0.2;
      shellMesh.rotation.z = elapsed * 0.15;
      ring1.rotation.z = elapsed * 0.25;
      ring2.rotation.z = -elapsed * 0.2;
      satelliteGroup.rotation.z = elapsed * 0.4;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', updateCameraAndSize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      coreGeo.dispose();
      coreMat.dispose();
      shellGeo.dispose();
      shellMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      satGeo.dispose();
      satMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="cosmic-hero-canvas-wrapper" ref={mountRef}>
      <div className="cosmic-hero-glow-backdrop" />
    </div>
  );
};

export default CosmicHeroCanvas;

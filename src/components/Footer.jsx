import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__main">
                    Designed &amp; built by{' '}
                    <span className="footer__name">Avinash Raju</span> · PHP Developer
                    based in Kochi, India
                </p>
                <p className="footer__sub">Built with React &amp; Vite.</p>
            </div>
        </footer>
    );
}

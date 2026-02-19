<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class PortfolioController extends Controller
{
    public function index(): InertiaResponse
    {
        return Inertia::render('Portfolio');
    }

    public function viewCv(): BinaryFileResponse
    {
        $path = $this->cvPath();

        abort_unless(is_file($path), 404);

        return response()->file($path, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="Avinash_Raju.pdf"',
        ]);
    }

    public function downloadCv(): BinaryFileResponse
    {
        $path = $this->cvPath();

        abort_unless(is_file($path), 404);

        return response()->download($path, 'Avinash_Raju_CV.pdf');
    }

    private function cvPath(): string
    {
        return storage_path('app/public/cv/Avinash_Raju.pdf');
    }
}

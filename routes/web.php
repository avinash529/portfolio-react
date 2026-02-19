<?php

use App\Http\Controllers\PortfolioController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PortfolioController::class, 'index'])->name('portfolio.home');
Route::get('/cv/view', [PortfolioController::class, 'viewCv'])->name('portfolio.cv.view');
Route::get('/cv/download', [PortfolioController::class, 'downloadCv'])->name('portfolio.cv.download');

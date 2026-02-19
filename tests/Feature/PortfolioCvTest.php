<?php

namespace Tests\Feature;

use Tests\TestCase;

class PortfolioCvTest extends TestCase
{
    public function test_cv_can_be_viewed_in_browser(): void
    {
        $response = $this->get(route('portfolio.cv.view'));

        $response->assertOk();
        $response->assertHeader('content-type', 'application/pdf');

        $disposition = (string) $response->headers->get('content-disposition');
        $this->assertStringContainsString('inline', $disposition);
        $this->assertStringContainsString('Avinash_Raju.pdf', $disposition);
    }

    public function test_cv_can_be_downloaded(): void
    {
        $response = $this->get(route('portfolio.cv.download'));

        $response->assertOk();

        $disposition = (string) $response->headers->get('content-disposition');
        $this->assertStringContainsString('attachment', $disposition);
        $this->assertStringContainsString('Avinash_Raju_CV.pdf', $disposition);
    }
}

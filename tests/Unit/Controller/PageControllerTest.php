<?php

declare(strict_types=1);
// SPDX-FileCopyrightText: Karim Vergnes <me@thesola.io>
// SPDX-License-Identifier: AGPL-3.0-or-later

namespace OCA\NextFrame\Tests\Unit\Controller;

use OCP\AppFramework\Http\TemplateResponse;

use PHPUnit\Framework\TestCase;

class PageControllerTest extends TestCase {
	private PageController $controller;

	public function setUp(): void {
		$request = $this->getMockBuilder(\OCP\IRequest::class)->getMock();
		$this->controller = new PageController($request);
	}

	public function testIndex(): void {
		$result = $this->controller->index();

		$this->assertEquals('main', $result->getTemplateName());
		$this->assertTrue($result instanceof TemplateResponse);
	}
}

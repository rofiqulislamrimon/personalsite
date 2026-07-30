<?php
declare( strict_types=1 );

/**
 * Entry point for the contact form.
 *
 * Deploy alongside index.html at the site root (public_html/) on
 * Hostinger. Keep autoload.php and src/ one level up if you prefer a
 * cleaner document root — see README for the recommended layout.
 */

require_once __DIR__ . '/autoload.php';

use Portfolio\ContactController;

( new ContactController() )->handle( $_POST );

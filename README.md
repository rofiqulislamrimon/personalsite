# rofiqul.dev — Personal Portfolio

Next.js (React) frontend + PHP contact-form backend, built for static export
so it runs on plain Hostinger shared hosting (no Node server needed there).

## Structure

```
app/
  layout.js          Root layout: SEO metadata, Google Fonts, theme init, Header/Footer
  page.js            Home — Hero, About, Services, Engine, Projects, Skills, Contact
  not-found.js       Custom 404
  about|projects|skills|contact/page.js   Standalone pages (reuse the same components)
  globals.css        Design tokens (CSS variables), layout, responsive breakpoints
components/          Header, Hero, NodeGraph, About, Services, Engine,
                     Projects, Skills, Contact, Footer, ThemeToggle, socials
public/              icon.svg, robots.txt, sitemap.xml (copied into out/ on build)
php/
  contact.php        Entry point — deployed at the site root, next to index.html
  autoload.php       Maps the Portfolio\* namespace to php/src/*.php (no Composer)
  schema.sql         Run once in phpMyAdmin to create the contact_messages table
  src/
    Config.php            DB credentials + site settings — edit before deploying
    Database.php          Single shared PDO (MySQL) connection
    Validator.php         Input validation rules
    ContactMessage.php    Model — one submission, saves itself to MySQL
    Mailer.php            Sends the notification email
    ContactController.php Orchestrates: validate -> save -> email -> JSON response
```

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Notes:

- The contact form posts to `/contact.php`, which only exists once deployed
  alongside PHP. Locally it shows the network error state — that's expected.
- Fonts (Inter, Space Grotesk, JetBrains Mono) load from Google Fonts at
  runtime, so no font files are fetched during `npm run build`.

## Responsive / theming

- Breakpoints live at the bottom of `app/globals.css`:
  `1024px` (grid reflow), `900px` (single-column hero/contact),
  `860px` (hamburger + dropdown nav), `720px` (compact spacing).
- Dark ("System Green") and light ("Forest") themes are driven by CSS
  variables on `:root` / `[data-theme='light']`, toggled by `ThemeToggle`
  and persisted in `localStorage.theme` (applied before first paint by the
  inline script in `layout.js`).

## Build for deployment

```bash
npm run build
```

Because `next.config.js` sets `output: 'export'`, this produces a fully
static site in `out/` (HTML/CSS/JS only, no Node required to serve it).

> If the build dies with `JavaScript heap out of memory` during
> "Collecting page data", your machine is low on RAM — close apps and retry.

## Deploying to Hostinger

1. Run `npm run build`.
2. Copy **everything inside `out/`** to your `public_html/` folder via
   Hostinger's File Manager or FTP.
3. Copy the contents of `php/` into that same `public_html/` folder, so you
   end up with:
   ```
   public_html/
     index.html          (from out/)
     _next/               (from out/)
     icon.svg, robots.txt, sitemap.xml  (from out/)
     contact.php          (from php/)
     autoload.php         (from php/)
     src/                  (from php/)
   ```
4. In hPanel → **Databases → MySQL Databases**, create a database and user,
   and note the database name, username, password, and host (usually
   `localhost`).
5. Open **phpMyAdmin**, select that database, and run `php/schema.sql`
   (SQL tab → paste → Go) to create the `contact_messages` table.
6. Copy `php/config.local.php.example` to `php/config.local.php` and fill in
   the real `db_name`, `db_user`, and `db_pass` from step 4. This file is
   gitignored, so your real password never ends up in the repo.
7. Visit your domain — submissions now get saved to MySQL **and** emailed
   to you.

The endpoint returns `200` when the message was saved to the database **or**
delivered by mail — losing one of the two never fails the whole request.

If `mail()` doesn't deliver reliably from Hostinger's shared IP, swap
`Mailer::send()` for PHPMailer + your domain's SMTP credentials (Hostinger
gives you an SMTP account under Emails → your address).

## Customizing

- Copy, name, and links: `components/*.js`
- Colors, spacing, fonts: CSS variables at the top of `app/globals.css`
- Integrations list on the Projects card: `integrations` array in
  `components/Projects.js`
- Site URL / social handles: `SITE_URL` in `app/layout.js`,
  `components/socials.js`, `public/sitemap.xml`, `public/robots.txt`

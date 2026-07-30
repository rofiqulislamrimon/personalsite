# rofiqul.dev — Personal Portfolio

Next.js (React) frontend + PHP contact-form backend, built for static export
so it runs on plain Hostinger shared hosting (no Node server needed there).

## Structure

```
app/            Next.js App Router pages + global CSS
components/     Header, Hero, About, Skills, Projects, Contact, Footer, NodeGraph
php/
  contact.php     Entry point — this goes at the site root, next to index.html
  autoload.php    Maps the Portfolio\* namespace to php/src/*.php (no Composer needed)
  schema.sql      Run once in phpMyAdmin to create the contact_messages table
  src/
    Config.php            DB credentials + site settings — edit before deploying
    Database.php          Single shared PDO (MySQL) connection
    Validator.php          Input validation rules
    ContactMessage.php     Model — represents one submission, saves itself to MySQL
    Mailer.php              Sends the notification email
    ContactController.php  Orchestrates: validate -> save -> email -> JSON response
```

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Note: the contact form posts to `/contact.php`, which only exists once
deployed alongside PHP. Locally the form will show the network error state —
that's expected.

## Build for deployment

```bash
npm run build
```

Because `next.config.js` sets `output: 'export'`, this produces a fully
static site in `out/` (HTML/CSS/JS only, no Node required to serve it).

## Deploying to Hostinger

1. Run `npm run build`.
2. Copy **everything inside `out/`** to your `public_html/` folder via
   Hostinger's File Manager or FTP.
3. Copy the whole `php/` folder's contents into that same `public_html/`
   folder, so you end up with:
   ```
   public_html/
     index.html          (from out/)
     _next/               (from out/)
     contact.php          (from php/)
     autoload.php         (from php/)
     src/                  (from php/)
   ```
4. In hPanel → **Databases → MySQL Databases**, create a new database and
   user, and note the database name, username, password, and host
   (usually `localhost`).
5. Open **phpMyAdmin**, select that database, and run `php/schema.sql`
   (SQL tab → paste → Go) to create the `contact_messages` table.
6. Copy `src/../config.local.php.example` (i.e. `php/config.local.php.example`)
   to `php/config.local.php` and fill in the real `db_name`, `db_user`, and
   `db_pass` from step 4. This file is gitignored, so your real password
   never ends up in the GitHub repo.
7. Visit your domain — submissions now get saved to MySQL **and** emailed
   to you.

If `mail()` doesn't deliver reliably from Hostinger's shared IP, swap
`Mailer::send()` for PHPMailer + your domain's SMTP credentials (Hostinger
gives you an SMTP account under Emails → your address). The database save
happens independently of email, so messages are never lost even if mail
delivery fails.

## Customizing

- Copy, name, and links: `components/*.js`
- Colors, spacing, fonts: CSS variables at the top of `app/globals.css`
- Integrations list on the Projects card: `integrations` array in
  `components/Projects.js`

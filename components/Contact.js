'use client';

import { useState } from 'react';
import socials from './socials';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Honeypot filled in → it's a bot. Pretend success, send nothing.
    if (data.get('company')) {
      setStatus('sent');
      form.reset();
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/contact.php', { method: 'POST', body: data });

      if (!res.ok) {
        // The PHP endpoint returns { ok, error } — surface its message.
        let message = 'Something went wrong. Please email directly.';
        try {
          const payload = await res.json();
          if (payload && payload.error) message = payload.error;
        } catch (parseErr) {
          // non-JSON response (e.g. PHP error page) — keep the default copy
        }
        throw new Error(message);
      }

      setStatus('sent');
      form.reset();
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please email directly.');
      setStatus('error');
    }
  }

  return (
    <section id="contact">
      <div className="container contact-inner">
        <div className="section-head" style={{ marginBottom: '40px', maxWidth: '600px' }}>
          <h2>Get In Touch</h2>
          <p>Have a project in mind or want to explore an integration? Let's talk.</p>
          <a href="mailto:mdrofiqulislam01516@gmail.com" className="contact-email">
            mdrofiqulislam01516@gmail.com
          </a>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px', textAlign: 'left' }}>
          <input type="text" name="company" className="hp-field" tabIndex="-1" autoComplete="off" aria-hidden="true" />

          <label>Name<input type="text" name="name" required /></label>
          <label>Email<input type="email" name="email" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>

          <button type="submit" className="btn btn-solid" disabled={status === 'sending'} style={{ width: '100%', marginTop: '16px' }}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'sent' && <p className="form-status form-status-ok" style={{ textAlign: 'center', marginTop: '16px' }}>Sent. I'll get back to you soon.</p>}
          {status === 'error' && <p className="form-status form-status-error" style={{ textAlign: 'center', marginTop: '16px' }}>{errorMsg}</p>}
        </form>

        <div className="contact-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
              {s.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

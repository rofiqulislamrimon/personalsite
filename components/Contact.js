'use client';

import { useState } from 'react';
import socials from './socials';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // Honeypot — if a bot fills this hidden field, silently pretend success.
    if (data.get('company')) {
      setStatus('sent');
      form.reset();
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact">
      <div className="container contact-grid">
        <div className="section-head">
          <p className="eyebrow">Contact</p>
          <h2>Have an integration to build?</h2>
          <p>
            Tell me what you&apos;re trying to connect. I&apos;ll reply from
            my own inbox, no forwarding through a third party.
          </p>
          <a href="mailto:mdrofiqulislam01516@gmail.com" className="contact-email">
            mdrofiqulislam01516@gmail.com
          </a>

          <div className="social-list">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit}>
          <input
            type="text"
            name="company"
            className="hp-field"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>

          <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="form-status form-status-ok" role="status">
              Sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status form-status-error" role="alert">
              Something went wrong — email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

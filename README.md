# Nova Verse Academy Website

Static multi-page marketing website built with HTML, CSS and Vanilla JavaScript.

## Structure
- `index.html` — homepage
- `about.html` — about page
- `become-instructor.html` — instructor application UI
- `contact.html` — contact page
- `css/styles.css` — complete design system + responsive styles
- `js/main.js` — theme toggle, mobile menu, reveal animations, stars, WhatsApp placeholders

## Before launch
1. Replace the placeholder WhatsApp number `201000000000` in `js/main.js`.
2. Replace `hello@novaverse.example` with the real email.
3. Connect the instructor form to a backend or form service.
4. Add verified parent testimonials only when available.
5. Optionally self-host Cairo font for stronger privacy/performance control.

## Theme switching
The default theme uses `:root`. The alternative uses `[data-theme="premium"]`.
The JavaScript changes only the `data-theme` attribute on `<html>` and persists the choice in localStorage.

# Change: Contact Info & Social Media

Use this doc to update your location, social media links, or the contact section heading.

---

## Step 1 — Fill In Your Contact Details

```
--- CONTACT SECTION (the form area) ---

Section label:
  [Get Started]

Main heading — plain part:
  [Your Space is Ready]

Main heading — italic part:
  [for a Reset]

Subheading:
  [Your space should support you — not stress you. Let's build something that actually works for your life.]

Form submit button text:
  [Send My Request]

Success message (shown after form is submitted):
  [Thank you — we'll be in touch within 24 hours.]


--- FOOTER ---

Tagline:
  [Transforming spaces. Elevating lives.]

Location text:
  [Atlanta, GA · Available by appointment]

Instagram URL:
  [Paste your full Instagram profile link here, e.g. https://www.instagram.com/yourhandle]

Pinterest URL:
  [Paste your full Pinterest profile link here, e.g. https://www.pinterest.com/yourhandle]

Copyright year and name:
  [© 2025 Respace. All rights reserved.]
```

---

## Step 2 — Copy This Prompt and Paste Into Claude Code

Replace everything in brackets with your content, then paste into Claude Code.

---

### To update the contact section heading / subheading:

```
Update the contact section text in /Users/studio/Projects/respace-site/src/components/Contact.jsx

Make only these text changes — do not alter any styling, form logic, or code:

Section label:     "[label]"
Heading plain:     "[plain heading]"
Heading italic:    "[italic heading]"
Subheading:        "[subheading]"
Submit button:     "[button text]"
Success message:   "[success message]"
```

---

### To update the footer (location, social links, tagline):

```
Update the footer in /Users/studio/Projects/respace-site/src/components/Footer.jsx

Make only these changes — do not alter any styling or code:

Tagline:        "[tagline]"
Location:       "[location text]"
Instagram URL:  "[full Instagram URL]"
Pinterest URL:  "[full Pinterest URL]"
Copyright:      "[copyright text]"
```

---

## Example — Adding Social Media Links

```
Update the footer in /Users/studio/Projects/respace-site/src/components/Footer.jsx

Make only these changes — do not alter any styling or code:

Instagram URL: "https://www.instagram.com/respaceatl"
Pinterest URL: "https://www.pinterest.com/respaceatl"
```

---

## Example — Updating Location

```
Update the footer in /Users/studio/Projects/respace-site/src/components/Footer.jsx

Make only these changes — do not alter any styling or code:

Location: "Atlanta, GA & surrounding areas · Available by appointment"
```

---

## Example — Updating the Contact Section Heading

```
Update the contact section text in /Users/studio/Projects/respace-site/src/components/Contact.jsx

Make only these text changes — do not alter any styling, form logic, or code:

Heading plain:   "Ready to Transform"
Heading italic:  "Your Space?"
Subheading:      "Let's talk about what's possible. Fill out the form below and we'll be in touch within one business day."
```

# Change: About / Your Story

Use this doc to update the "Our Story" section, your founder bio, or your core values.

---

## Step 1 — Fill In Your About Content

Only fill in the sections you want to change. Leave any you want to keep the same.

```
--- SECTION HEADING ---

Section label (small text above heading):
  [Our Story]

Main heading — plain part:
  [More Than Organization —]

Main heading — italic part:
  [It's a Reset]


--- STORY PARAGRAPHS ---

Paragraph 1:
  [Respace was created from a deep understanding that our environments directly impact how we feel, think, and show up in life.]

Paragraph 2:
  [What started as a passion for creating order and beauty evolved into a mission: to help people reconnect with their space as a source of peace, clarity, and power.]


--- FOUNDER BIO ---

Bio opener (first line, displayed prominently):
  [I'm the founder of Respace, a luxury organizing experience rooted in transformation, intention, and flow.]

Bio body (main paragraph):
  [I believe your space should feel like a sanctuary — not a source of stress. My approach blends functionality with elevated design to create environments that truly support your lifestyle. Every project is personal. Every transformation is intentional.]

CTA button text:
  [Begin Your Respace Journey]


--- CORE VALUES ---
(These appear as small tags/labels on the page)

Value 1: [Intentional Living]
Value 2: [Function Meets Beauty]
Value 3: [Judgment-Free Transformation]
Value 4: [Sustainable Systems]
Value 5: [Elevated Simplicity]


--- ACCENT BLOCK ---
(Small decorative quote in the corner)

Plain text: [Your space,]
Italic text: [elevated.]
```

---

## Step 2 — Copy This Prompt and Paste Into Claude Code

Replace everything in brackets with your content from Step 1, then paste into Claude Code.

```
Update the about section in /Users/studio/Projects/respace-site/src/components/About.jsx

Make only these text changes — do not alter any styling, layout, or code:

Section label:       "[label]"
Heading plain:       "[plain heading]"
Heading italic:      "[italic heading]"
Paragraph 1:         "[paragraph 1]"
Paragraph 2:         "[paragraph 2]"
Bio opener:          "[bio opener]"
Bio body:            "[bio body]"
CTA button:          "[button text]"
Core values:         ["[value 1]", "[value 2]", "[value 3]", "[value 4]", "[value 5]"]
Accent plain text:   "[plain accent text]"
Accent italic text:  "[italic accent text]"
```

---

## Example — Updating the Bio Only

```
Update the about section in /Users/studio/Projects/respace-site/src/components/About.jsx

Make only these text changes — do not alter any styling, layout, or code:

Bio opener: "I'm Janelle, the founder of Respace — a luxury organizing experience built on transformation, intention, and flow."
Bio body: "I started Respace because I know firsthand how a cluttered space can weigh on your mind and your life. My approach brings together clean systems, elevated design, and real empathy to create spaces that work for the way you actually live. Every client, every room, every transformation is personal to me."
```

---

## Example — Updating Core Values

```
Update the about section in /Users/studio/Projects/respace-site/src/components/About.jsx

Make only these text changes — do not alter any styling, layout, or code:

Core values: ["Intentional Living", "Elevated Design", "Client-First Always", "Lasting Systems", "Beauty in Function"]
```

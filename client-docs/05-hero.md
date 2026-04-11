# Change: Hero Section (Top of Page)

Use this doc to update the main headline, subheading, or stats shown at the very top of your site.

---

## Step 1 — Fill In Your Hero Content

Only fill in the fields you want to change. Leave the rest exactly as shown.

```
Label (small text above headline):
  [Luxury Home Organization]

Main headline — Line 1 (plain):
  [Reclaim Your Space.]

Main headline — Line 2 (italic, decorative):
  [Realign Your Life.]

Subheading (sentence below headline):
  [Luxury home and lifestyle organization designed to bring clarity, calm, and elevated flow into your everyday living.]

Support text (smaller paragraph):
  [At Respace, we don't just organize—we transform environments into intentional, functional sanctuaries.]

Primary button text:
  [Book Your Transformation]

Secondary button text:
  [Explore Services]

Stat 1:
  Number: [200+]
  Label:  [Spaces Transformed]

Stat 2:
  Number: [5★]
  Label:  [Client Experience]

Stat 3:
  Number: [3hr]
  Label:  [Minimum Session]
```

---

## Step 2 — Copy This Prompt and Paste Into Claude Code

Replace everything in brackets with your content from Step 1, then paste into Claude Code.

```
Update the hero section text in /Users/studio/Projects/respace-site/src/components/Hero.jsx

Make only these text changes — do not alter any styling, layout, or code:

Label:              "[label text]"
Headline line 1:    "[plain headline]"
Headline line 2:    "[italic headline]"
Subheading:         "[subheading text]"
Support text:       "[support paragraph]"
Primary button:     "[primary button text]"
Secondary button:   "[secondary button text]"
Stat 1 number:      "[number]"
Stat 1 label:       "[label]"
Stat 2 number:      "[number]"
Stat 2 label:       "[label]"
Stat 3 number:      "[number]"
Stat 3 label:       "[label]"
```

---

## Example — Updating Stats Only

```
Update the hero section text in /Users/studio/Projects/respace-site/src/components/Hero.jsx

Make only these text changes — do not alter any styling, layout, or code:

Stat 1 number:  "300+"
Stat 1 label:   "Spaces Transformed"
Stat 2 number:  "5★"
Stat 2 label:   "Client Experience"
Stat 3 number:  "3hr"
Stat 3 label:   "Minimum Session"
```

---

## Example — Updating the Full Hero

```
Update the hero section text in /Users/studio/Projects/respace-site/src/components/Hero.jsx

Make only these text changes — do not alter any styling, layout, or code:

Label:              "Luxury Home Organization"
Headline line 1:    "Elevate Your Space."
Headline line 2:    "Elevate Your Life."
Subheading:         "Premium home organization crafted around your lifestyle — bringing calm, beauty, and intentional flow to every room."
Support text:       "We don't just tidy up. We create environments that make you feel exactly how you want to feel the moment you walk in."
Primary button:     "Book Your Session"
Secondary button:   "View Services"
Stat 1 number:      "300+"
Stat 1 label:       "Spaces Transformed"
Stat 2 number:      "5★"
Stat 2 label:       "Client Satisfaction"
Stat 3 number:      "4hr"
Stat 3 label:       "Minimum Session"
```

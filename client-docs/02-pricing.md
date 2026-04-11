# Change: Pricing Packages

Use this doc to update your service package names, price ranges, descriptions, or features.

---

## Step 1 — Fill In Your Package Details

Copy the block below and fill in every bracket. Leave anything you don't want to change exactly as it appears in the current site.

**Current prices for reference:**
- Essential Re-Space: $255 – $500
- Signature Re-Space: $510 – $1,000
- Full Re-Space Transformation: $1,200 – $4,000+
- The Re-Space Experience: Starting at $3,000+

```
Package 1 — Essential Re-Space
  Package name:   [Essential Re-Space]
  Tagline:        [A foundational reset for intentional, functional living]
  Duration:       [3–5 hour engagement]
  Ideal for:      [Closets, pantries, desks, and small spaces]
  Feature 1:      [Light edit and decluttering of items]
  Feature 2:      [Foundational system creation]
  Feature 3:      [Functional flow enhancement]
  Price range:    [$255 – $500]

Package 2 — Signature Re-Space  (marked "Most Popular")
  Package name:   [Signature Re-Space]
  Tagline:        [A curated transformation designed to restore flow and clarity]
  Duration:       [6–10 hour engagement]
  Ideal for:      [Kitchens, bedrooms, offices, retail zones]
  Feature 1:      [Guided edit and refinement of belongings]
  Feature 2:      [Customized organization systems]
  Feature 3:      [Spatial flow optimization]
  Feature 4:      [Tailored product recommendations]
  Price range:    [$510 – $1,000]

Package 3 — Full Re-Space Transformation
  Package name:   [Full Re-Space Transformation]
  Tagline:        [A comprehensive reset designed to elevate your entire environment]
  Duration:       [12+ hour engagement — multi-day]
  Ideal for:      [Full homes, corporate offices, retail stores, restaurants]
  Feature 1:      [Complete space transformation]
  Feature 2:      [System design and layout refinement]
  Feature 3:      [Functionality and aesthetic alignment]
  Feature 4:      [Hands-on or fully managed experience]
  Price range:    [$1,200 – $4,000+]

Package 4 — The Re-Space Experience  (Luxury Tier)
  Package name:   [The Re-Space Experience]
  Tagline:        [A high-touch, done-for-you transformation experience]
  Duration:       [Fully managed engagement]
  Ideal for:      [Clients seeking a fully elevated, hands-off service]
  Feature 1:      [Full-service transformation]
  Feature 2:      [Curated product sourcing and purchasing]
  Feature 3:      [Visual styling — containers, labeling, finishing touches]
  Feature 4:      [Priority scheduling]
  Feature 5:      [Ongoing maintenance planning]
  Price range:    [Starting at $3,000+]
```

---

## Step 2 — Fill In Your Add-Ons (Optional)

Only fill this in if you want to change the add-on prices or names.

```
Add-On 1:
  Name:  [Product sourcing and procurement]
  Price: [$100 – $250 or % of total spend]

Add-On 2:
  Name:  [Elevated styling and labeling]
  Price: [$100 – $300]

Add-On 3:
  Name:  [Ongoing maintenance visits]
  Price: [$200 – $500 / month]

Add-On 4:
  Name:  [Expedited scheduling]
  Price: [+25% of investment]
```

---

## Step 3 — Copy This Prompt and Paste Into Claude Code

Replace everything in brackets with your content from Steps 1–2, then paste into Claude Code.

```
Update the pricing packages in /Users/studio/Projects/respace-site/src/components/Pricing.jsx

Replace the pricing data with the following. Keep the exact same code structure — only update the text values inside the array.

Package 1 (Essential Re-Space):
  name: "[package name]"
  tagline: "[tagline]"
  duration: "[duration]"
  idealFor: "[ideal for]"
  features: ["[feature 1]", "[feature 2]", "[feature 3]"]
  investment: "[price range]"

Package 2 (Signature Re-Space — Most Popular):
  name: "[package name]"
  tagline: "[tagline]"
  duration: "[duration]"
  idealFor: "[ideal for]"
  features: ["[feature 1]", "[feature 2]", "[feature 3]", "[feature 4]"]
  investment: "[price range]"

Package 3 (Full Re-Space Transformation):
  name: "[package name]"
  tagline: "[tagline]"
  duration: "[duration]"
  idealFor: "[ideal for]"
  features: ["[feature 1]", "[feature 2]", "[feature 3]", "[feature 4]"]
  investment: "[price range]"
  note: "Custom proposal provided"

Package 4 (The Re-Space Experience — Luxury Tier):
  name: "[package name]"
  tagline: "[tagline]"
  duration: "[duration]"
  idealFor: "[ideal for]"
  features: ["[feature 1]", "[feature 2]", "[feature 3]", "[feature 4]", "[feature 5]"]
  investment: "[price range]"

Add-ons:
  1. "[add-on name]" — [price]
  2. "[add-on name]" — [price]
  3. "[add-on name]" — [price]
  4. "[add-on name]" — [price]

Do not change any styling, layout, or code. Only update the text values.
```

---

## Example — Changing Just the Prices

```
Update the pricing packages in /Users/studio/Projects/respace-site/src/components/Pricing.jsx

Replace the pricing data with the following. Keep the exact same code structure — only update the text values inside the array.

Package 1 (Essential Re-Space):
  investment: "$300 – $600"

Package 2 (Signature Re-Space — Most Popular):
  investment: "$600 – $1,200"

Package 3 (Full Re-Space Transformation):
  investment: "$1,500 – $5,000+"

Package 4 (The Re-Space Experience — Luxury Tier):
  investment: "Starting at $4,000+"

Do not change any styling, layout, or code. Only update the text values.
```

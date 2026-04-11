# Change: Client Testimonials

Use this doc to add, remove, or update the client quotes shown on your website.

---

## Step 1 — Fill In Your Testimonials

You can have **up to 5 testimonials**. Fill in as many as you want. Leave any extras blank.

```
Testimonial 1:
  Quote:    [Write the client's exact quote here]
  Location: [City, State]

Testimonial 2:
  Quote:    [Write the client's exact quote here]
  Location: [City, State]

Testimonial 3:
  Quote:    [Write the client's exact quote here]
  Location: [City, State]

Testimonial 4 (optional):
  Quote:    [Write the client's exact quote here]
  Location: [City, State]

Testimonial 5 (optional):
  Quote:    [Write the client's exact quote here]
  Location: [City, State]
```

---

## Step 2 — Copy This Prompt and Paste Into Claude Code

Replace everything in brackets with your filled-in content from Step 1, then paste the whole thing into Claude Code.

```
Update the testimonials in /Users/studio/Projects/respace-site/src/components/Testimonials.jsx

Replace the entire testimonials array with the following entries. Keep the exact same code structure — only change the quote text and location values.

New testimonials:
1. Quote: "[Testimonial 1 quote]" | Location: "[City, State]"
2. Quote: "[Testimonial 2 quote]" | Location: "[City, State]"
3. Quote: "[Testimonial 3 quote]" | Location: "[City, State]"

(If you have a 4th: 4. Quote: "[Testimonial 4 quote]" | Location: "[City, State]")
(If you have a 5th: 5. Quote: "[Testimonial 5 quote]" | Location: "[City, State]")

Do not change any other text, styling, or code in the file.
```

---

## Example — Filled In Correctly

```
Update the testimonials in /Users/studio/Projects/respace-site/src/components/Testimonials.jsx

Replace the entire testimonials array with the following entries. Keep the exact same code structure — only change the quote text and location values.

New testimonials:
1. Quote: "I didn't think organizing could change my life, but walking into my home now brings me so much peace." | Location: "Buckhead, GA"
2. Quote: "She turned my disaster of a closet into something out of a magazine. Absolutely worth every penny." | Location: "Alpharetta, GA"
3. Quote: "From overwhelmed to obsessed with my space. I recommend Respace to everyone." | Location: "Decatur, GA"

Do not change any other text, styling, or code in the file.
```

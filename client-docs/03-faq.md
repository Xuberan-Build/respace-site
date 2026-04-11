# Change: FAQ — Frequently Asked Questions

Use this doc to add new questions, update existing answers, or remove questions from the FAQ section.

---

## Option A — Add a New Question

### Step 1 — Fill In Your New Question

```
New question to add:
  Question: [Write your question here]
  Answer:   [Write the full answer here]
```

### Step 2 — Copy This Prompt and Paste Into Claude Code

```
Add a new FAQ entry to /Users/studio/Projects/respace-site/src/components/FAQ.jsx

Append the following item to the end of the faqs array, keeping the same object format as the existing entries:

Question: "[your question]"
Answer: "[your answer]"

Do not change any other entries, styling, or code.
```

---

## Option B — Update an Existing Answer

### Step 1 — Identify Which Question to Change

Current FAQ questions on the site:
1. What are your rates?
2. Is there a minimum booking time?
3. Is a consultation required?
4. What happens during a consultation?
5. Is there a minimum number of spaces required?
6. Should I be present during the organizing process?
7. Do you provide organizing products?
8. Do you charge for consultations?
9. How do I book?

### Step 2 — Fill In the Update

```
Question to update: [Write the exact question as shown in the list above]
New answer:         [Write the complete new answer here]
```

### Step 3 — Copy This Prompt and Paste Into Claude Code

```
Update an existing FAQ entry in /Users/studio/Projects/respace-site/src/components/FAQ.jsx

Find the FAQ entry with this exact question:
"[exact question text]"

Replace its answer with:
"[your new answer]"

Do not change the question text, any other entries, styling, or code.
```

---

## Option C — Replace All FAQs at Once

Use this if you want to completely redo the FAQ section with a fresh set of questions and answers.

### Step 1 — List All Your New FAQs (up to 12)

```
FAQ 1:
  Question: [Question text]
  Answer:   [Answer text]

FAQ 2:
  Question: [Question text]
  Answer:   [Answer text]

FAQ 3:
  Question: [Question text]
  Answer:   [Answer text]

FAQ 4:
  Question: [Question text]
  Answer:   [Answer text]

FAQ 5:
  Question: [Question text]
  Answer:   [Answer text]

(Add more if needed, up to FAQ 12)
```

### Step 2 — Copy This Prompt and Paste Into Claude Code

```
Replace the entire faqs array in /Users/studio/Projects/respace-site/src/components/FAQ.jsx with the following new entries. Keep the exact same code structure — only replace the content inside the array.

FAQ items:
1. Q: "[question 1]" | A: "[answer 1]"
2. Q: "[question 2]" | A: "[answer 2]"
3. Q: "[question 3]" | A: "[answer 3]"
4. Q: "[question 4]" | A: "[answer 4]"
5. Q: "[question 5]" | A: "[answer 5]"

Do not change any styling, layout, or code.
```

---

## Example — Adding One New Question

```
Add a new FAQ entry to /Users/studio/Projects/respace-site/src/components/FAQ.jsx

Append the following item to the end of the faqs array, keeping the same object format as the existing entries:

Question: "Do you work with clients outside of Atlanta?"
Answer: "Yes! We are available for travel-based projects. Travel fees may apply depending on location. Reach out for a custom quote."

Do not change any other entries, styling, or code.
```

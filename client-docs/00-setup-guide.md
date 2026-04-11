# Respace Site — Setup Guide

Follow these steps **one time** to get everything installed. After that, making changes takes about 2 minutes.

---

## What You'll Need

- A computer (Mac or Windows)
- A GitHub account (free)
- Access to the Respace GitHub repository (your developer will send you an invite)
- An internet connection

---

## Part 1 — Install the Required Programs

You only need to do this once.

---

### Step 1 — Install VS Code

VS Code is the program you'll use to make changes to the site.

1. Go to **https://code.visualstudio.com**
2. Click the big blue **Download** button
3. Open the downloaded file and follow the install prompts
4. When finished, open VS Code — you should see a welcome screen

---

### Step 2 — Install Git

Git is what sends your changes to the live site.

**On Mac:**
1. Open the **Terminal** app (press `Command + Space`, type "Terminal", hit Enter)
2. Type this and press Enter:
   ```
   git --version
   ```
3. If a number appears (like `git version 2.39.0`), Git is already installed — skip to Step 3
4. If it says "command not found", a pop-up will appear asking to install developer tools — click **Install** and wait for it to finish

**On Windows:**
1. Go to **https://git-scm.com/download/win**
2. Download and run the installer
3. Click **Next** through all the steps — the default settings are fine
4. When finished, restart your computer

---

### Step 3 — Install Node.js

Node.js is required to run the website on your computer for previewing changes.

1. Go to **https://nodejs.org**
2. Click the button labeled **LTS** (the recommended version)
3. Open the downloaded file and follow the install prompts
4. Restart your computer after it finishes

---

### Step 4 — Install Claude Code in VS Code

Claude Code is the AI assistant that will apply your changes.

1. Open **VS Code**
2. Click the **Extensions** icon on the left sidebar (it looks like four small squares)
3. In the search bar at the top, type: `Claude Code`
4. Click the result that says **Claude Code** by Anthropic
5. Click **Install**
6. When it finishes, you may be asked to sign in with an Anthropic account — follow the prompts to create a free account or log in

---

## Part 2 — Get the Website Files on Your Computer

You only need to do this once.

---

### Step 5 — Accept the GitHub Invite

Your developer will send you a GitHub repository invite by email.

1. Open the email from GitHub
2. Click **Accept invitation**
3. You'll be taken to the GitHub website — sign in or create a free account if you haven't already

---

### Step 6 — Clone the Repository (Download the Site Files)

This copies all the website files to your computer.

1. Open **VS Code**
2. Press `Ctrl + Shift + P` (Windows) or `Command + Shift + P` (Mac) — a command bar will appear at the top
3. Type `Git: Clone` and press **Enter**
4. Click **Clone from GitHub**
5. VS Code will ask you to sign in to GitHub — click **Allow** and sign in through the browser that opens
6. Once signed in, a search box will appear — type `respace-site` and select **Xuberan-Build/respace-site** from the list
7. A window will ask where to save the files — choose your **Desktop** or **Documents** folder
8. Click **Select as Repository Destination**
9. When it finishes, a pop-up will ask "Would you like to open the cloned repository?" — click **Open**

The website files are now on your computer.

---

### Step 7 — Install Project Dependencies

This is a one-time step that sets up the tools the website needs to run.

1. In VS Code, go to the top menu: **Terminal → New Terminal**
2. A panel will open at the bottom of VS Code
3. Type this and press Enter:
   ```
   npm install
   ```
4. Wait for it to finish — you'll see a blinking cursor when it's done

---

## Part 3 — How to Make a Change

Follow these steps **every time** you want to update the site.

---

### Step 8 — Open a Prompt Doc

1. In VS Code, look at the left sidebar — you'll see all the files and folders for the site
2. Click the **client-docs** folder to expand it
3. Open the doc for the section you want to change (e.g., `02-pricing.md` to update prices)
4. Fill in your new content where you see `[brackets like this]`

---

### Step 9 — Open Claude Code and Apply the Change

1. Press `Ctrl + Shift + P` (Windows) or `Command + Shift + P` (Mac)
2. Type `Claude` and select **Claude: Open Chat** (or look for the Claude icon in the left sidebar)
3. Copy the filled-in prompt from the doc
4. Paste it into the Claude chat box and press **Enter**
5. Claude will make the changes automatically — wait for it to finish

---

### Step 10 — Preview the Change (Optional but Recommended)

Before pushing the change live, you can preview it on your computer.

1. In the Terminal at the bottom of VS Code, type:
   ```
   npm run dev
   ```
2. Press Enter — you'll see a line that says something like `Local: http://localhost:5173`
3. Hold `Ctrl` (Windows) or `Command` (Mac) and click that link — your site opens in a browser
4. Check that everything looks correct
5. When done, go back to the Terminal and press `Ctrl + C` to stop the preview

---

### Step 11 — Push Your Changes Live

This sends your changes to the live site. Netlify will rebuild and publish automatically — it usually takes **1–2 minutes**.

1. Click the **Source Control** icon in the left sidebar of VS Code (it looks like a branching tree, or shows a number badge when you have changes)
2. You'll see a list of files that were changed
3. In the box at the top that says "Message", type a short note about what you changed — for example:
   - `Updated pricing`
   - `Added new testimonial`
   - `Fixed FAQ answer`
4. Click the **✓ Commit** button (the checkmark)
5. A pop-up may ask "There are no staged changes to commit" — click **Yes** to stage all changes
6. Click the **Sync Changes** button (it may say "Publish Branch" the first time)
7. Done — your changes are live within 1–2 minutes

---

### Step 12 — Confirm the Site Updated

1. Go to **https://app.netlify.com** and sign in (your developer can share the account access)
2. You'll see your site listed — it will show a green "Published" badge when the update is live
3. Visit your live site URL to confirm the changes look correct

---

## Troubleshooting

**"I don't see the Claude chat panel"**
Press `Ctrl + Shift + P` / `Command + Shift + P`, type `Claude`, and look for "Open Chat" or "Focus on Claude View".

**"The terminal says 'npm: command not found'"**
Node.js did not install correctly. Revisit Step 3 and make sure you restarted your computer after installing.

**"VS Code says I don't have permission to push"**
You may not have been added as a collaborator. Contact your developer and ask them to check your GitHub access.

**"The site looks broken after a change"**
Don't panic — your developer can always roll back. Message them with a description of what you changed and they can fix it quickly.

**"I want to undo a change"**
Go to the Source Control sidebar in VS Code. Click the clock/history icon to see recent commits, or contact your developer and they can restore a previous version.

---

## Quick Reference — The 3 Steps Every Time

| Step | What to do |
|---|---|
| 1 | Open a doc from the `client-docs` folder, fill in your changes |
| 2 | Paste the prompt into Claude Code and let it apply the change |
| 3 | Commit and sync in Source Control — site goes live in ~2 minutes |

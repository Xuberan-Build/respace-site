# EmailJS Setup — One-Time Configuration

This connects the contact form to `info@respace-usa.com` so every submission arrives as an email you can read and reply to directly.

---

## Part 1 — Create Your EmailJS Account

1. Go to **https://emailjs.com** and click **Sign Up Free**
2. Create an account with `info@respace-usa.com`
3. Verify your email and log in to the dashboard

---

## Part 2 — Connect Your Email (Add a Service)

1. In the EmailJS dashboard, click **Email Services** in the left sidebar
2. Click **Add New Service**
3. Choose **Gmail** (or whichever email provider `info@respace-usa.com` uses)
4. Click **Connect Account** and sign in with `info@respace-usa.com`
5. Give it a name like `Respace Contact`
6. Click **Create Service**
7. **Copy the Service ID** — it looks like `service_xxxxxxx` — save it somewhere

---

## Part 3 — Create an Email Template

This is the format of the email you'll receive when someone submits the form.

1. Click **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Set the **Subject** line to:
   ```
   New Respace Inquiry — {{from_name}}
   ```
4. Set the **To Email** to:
   ```
   info@respace-usa.com
   ```
5. Set the **Reply To** field to:
   ```
   {{reply_to}}
   ```
   *(This means when you hit Reply in your inbox, it goes directly back to the client)*

6. In the **Content / Body** section, paste this:

   ```
   New consultation request from {{from_name}}

   Name:     {{from_name}}
   Email:    {{from_email}}
   Phone:    {{phone}}
   Service:  {{service}}

   Message:
   {{message}}
   ```

7. Click **Save**
8. **Copy the Template ID** — it looks like `template_xxxxxxx` — save it

---

## Part 4 — Get Your Public Key

1. In the EmailJS dashboard, click your account name (top right) → **Account**
2. Under **API Keys**, copy your **Public Key** — save it

---

## Part 5 — Add the Keys to Your Local Dev Environment

1. Open VS Code and find the file `.env.local` in the root of the project
2. Replace the placeholder values with your real keys:

   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx
   ```

3. Save the file
4. Restart the dev server (`npm run dev`) — the form will now send emails locally

---

## Part 6 — Add the Keys to Netlify (For the Live Site)

These keys must also be set in Netlify so the live site can send emails.

1. Go to **https://app.netlify.com** and open the Respace site
2. Click **Site configuration** → **Environment variables**
3. Click **Add a variable** for each of the three keys:

   | Key | Value |
   |---|---|
   | `VITE_EMAILJS_SERVICE_ID` | `service_xxxxxxx` |
   | `VITE_EMAILJS_TEMPLATE_ID` | `template_xxxxxxx` |
   | `VITE_EMAILJS_PUBLIC_KEY` | `xxxxxxxxxxxxxxxxxxxx` |

4. After adding all three, click **Deploy** → **Trigger deploy** → **Deploy site** to rebuild with the new variables

---

## How It Works After Setup

When someone submits the contact form:

1. **Netlify** captures and stores the submission (backup, always on)
2. **EmailJS** sends an email to `info@respace-usa.com` with all the form details
3. The **Reply To** is set to the client's email — just hit Reply to respond directly
4. If EmailJS ever fails, the Netlify capture still works — no leads are lost

---

## Free Plan Limits

EmailJS free plan includes **200 emails/month**. For a consultation-based business this is plenty. If volume grows, paid plans start at $15/month for 1,000 emails.

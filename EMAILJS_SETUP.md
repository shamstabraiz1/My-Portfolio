# EmailJS Setup Guide for Your Portfolio

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up with: `shamstabraizkakar5@gmail.com`
- Verify your email

### 2. Add Gmail Service
- Go to "Email Services" → "Add New Service"
- Choose "Gmail"
- Connect your Gmail account
- **Copy your Service ID** (looks like `service_abc123`)

### 3. Create Email Template
- Go to "Email Templates" → "Create New Template"
- Name: "Portfolio Contact Form"
- Use this template:

```
Subject: Portfolio Contact: {{subject}}

Hello Shams,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Please reply directly to: {{from_email}}
```

- **Copy your Template ID** (looks like `template_xyz789`)

### 4. Get Public Key
- Go to "Account" → "General"
- **Copy your Public Key** (looks like `user_abcdef123`)

### 5. Update Configuration
Open `src/config/emailjs.ts` and replace:
- `YOUR_SERVICE_ID` with your actual Service ID
- `YOUR_TEMPLATE_ID` with your actual Template ID  
- `YOUR_PUBLIC_KEY` with your actual Public Key

### 6. Test Your Form
- Run `npm run dev`
- Fill out the contact form
- Check your Gmail inbox for the email!

## 🎯 Benefits
- ✅ 200 free emails per month
- ✅ Direct delivery to your Gmail
- ✅ Professional formatting
- ✅ Spam protection
- ✅ No backend required

## 🔧 Troubleshooting
If emails don't arrive:
1. Check your Gmail spam folder
2. Verify all credentials are correct
3. Make sure Gmail service is connected
4. The form will fallback to mailto if EmailJS fails

## 📧 Current Status
- ✅ EmailJS installed and configured
- ✅ Fallback mailto system working
- ⏳ Waiting for your EmailJS credentials
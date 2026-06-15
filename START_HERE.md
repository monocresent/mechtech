# MechTechnologie — Setup & Next Steps

A basic Next.js + Tailwind skeleton has already been created in this folder
(pages: home, about, portfolio, contact; shared header/footer; placeholder
portfolio data). Here's how to get it running and hand it to Claude Code for
the next round of work.

## 1. Open the project in VS Code

- Open VS Code
- File → Open Folder → select this `mechtech` folder
- Open a terminal in VS Code: Terminal → New Terminal

## 2. Install Node.js (if you don't have it)

Check first:
```
node -v
```
If that errors, install Node.js LTS from nodejs.org, then restart VS Code.

## 3. Install dependencies and run the dev server

In the VS Code terminal:
```
npm install
npm run dev
```
Then open http://localhost:3000 in your browser. You should see the live
site with Home, Portfolio, About, and Contact pages.

## 4. Install the Claude Code extension / CLI

- In VS Code, install the "Claude Code" extension from the marketplace, OR
- In the terminal: `npm install -g @anthropic-ai/claude-code`, then run `claude` in the project folder

Sign in with your Anthropic account when prompted.

## 5. Open a new chat with Claude Code and paste the prompt below

Don't start a brand-new file — Claude Code should work directly in this
existing project folder so it builds on what's already here.

## 6. Set up git + GitHub (recommended before Claude makes big changes)

```
git init
git add .
git commit -m "Initial MechTechnologie skeleton"
```
Then create a new repo on GitHub and push it. This gives you version history
so you can undo anything Claude Code changes that you don't like.

## 7. Deploy (once you're happy with progress)

- Push the repo to GitHub
- Go to vercel.com, sign in with GitHub, "Import Project", select the repo
- Vercel auto-detects Next.js — click Deploy
- Once live, add your custom domain (mechtechnologie.com or similar) under
  Project Settings → Domains

---

## Prompt to give Claude Code

Copy everything below into your first message to Claude Code in this project.

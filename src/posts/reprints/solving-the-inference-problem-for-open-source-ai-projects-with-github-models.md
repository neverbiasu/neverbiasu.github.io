---
title: Solving the inference problem for open source AI projects with GitHub Models
date: 2025-07-23T16:00:00+00:00
author: Sean Goedecke
tags:
    - AI models
    - CI/CD
    - GitHub Models
cover: https://github.blog/wp-content/uploads/2025/07/wallpaper-generic-image-logo-github.png?resize=1600%2C850
---

# Solving the inference problem for open source AI projects with GitHub Models

How using GitHub’s free inference API can make your AI-powered open source software more accessible.

![Image 8](https://github.blog/wp-content/uploads/2025/07/wallpaper-generic-image-logo-github.png?resize=1600%2C850)

[Sean Goedecke](https://github.blog/author/sgoedecke/ "Posts by Sean Goedecke") · [@sgoedecke](https://github.com/sgoedecke)

July 23, 2025 | Updated August 1, 2025

| 5 minutes

---

## Table of Contents

- [The hidden cost of “just add AI”](#the-hidden-cost-of-just-add-ai)
- [How to get started with GitHub Models](#how-to-get-started-with-github-models)
- [Scaling when your project takes off](#scaling-when-your-project-takes-off)
- [Take this with you](#take-this-with-you)

---

AI features can make an open source project shine. At least, until setup asks for a paid inference API key. Requiring contributors or even casual users to bring their own large language model (LLM) key stops adoption in its tracks:

```bash
$ my-cool-ai-tool
Error: OPENAI_API_KEY not found
```

Developers may not want to buy a paid plan just to try out your tool, and self hosting a model can be too heavy for laptops or GitHub Actions runners.

GitHub Models solves that friction with a free, OpenAI-compatible inference API that every GitHub account can use with no new keys, consoles, or SDKs required. In this article, we’ll show you how to drop it into your project, run it in CI/CD, and scale when your community takes off.

Let’s jump in.

## The hidden cost of “just add AI”

AI features feel ubiquitous today, but getting them running locally is still a challenge for a few reasons:

- **Paid APIs:** The simplest path is to ask users for an OpenAI or Anthropic key. That’s a non-starter for many hobbyists and students because paid APIs are too expensive.
- **Local models:** Running a 2 B-parameter LLM can work for lightweight tasks, but anything that requires more intelligence will quickly blow past typical laptop memory — let alone the 14 GB container that backs a GitHub Actions runner.
- **Docker images and weights:** You can bundle a model with your app, but distributing multi-gigabyte weights balloons install size and slows CI.

Every additional requirement filters out potential users and contributors. What you need is an inference endpoint that’s:

1. Free for public projects
2. Compatible with existing OpenAI SDKs
3. Available wherever your code runs, like your laptop, server, or Actions runner

That’s what GitHub Models provides.

### GitHub Models in a nutshell

- **What it is:** A REST endpoint that speaks the chat/completions spec you already know.
- **What you get:** A curated set of models (GPT-4o, DeepSeek-R1, Llama 3, and more) hosted by GitHub.
- **Who can call it:** Anyone with a GitHub Personal Access Token (PAT), or a repository’s built-in GITHUB_TOKEN when you opt-in via permissions.
- **How much it costs:** Free tier for all personal accounts and OSS orgs; metered paid tier unlocks higher throughput and larger context windows.

Because the API mirrors OpenAI’s, any client that accepts a baseURL will work without code changes. This includes OpenAI-JS, OpenAI Python, LangChain, llamacpp, or your own curl script.

## How to get started with GitHub Models

Since GitHub Models is compatible with the OpenAI `chat/completions` API, almost every inference SDK can use it. To get started, you can use the OpenAI SDK:

```js
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://models.github.ai/inference/chat/completions",
    apiKey: process.env.GITHUB_TOKEN  // or any PAT with models:read
});

const res = await openai.chat.completions.create({
    model: "openai/gpt-4o",
    messages: [{ role: "user", content: "Hi!" }]
});
console.log(res.choices[0].message.content);
```

If you write your AI open source software with GitHub Models as an inference provider, all GitHub users will be able to get up and running with it just by supplying a GitHub Personal Access Token (PAT).

And if your software runs in GitHub Actions, your users won’t even need to supply a PAT. By requesting the `models: read` permission in your workflow file, the built-in GitHub token will have permissions to make inference requests to GitHub Models. This means you can build a whole array of AI-powered Actions that can be shared and installed with a single click. For instance:

- Code review or PR triage bots
- Smart issue tagging workflows
- Weekly repository activity report generators
- And anything else that a GitHub Action can do

Plus, using GitHub Models makes it easy for your users to set up AI inference. And that has another positive effect: it’s easier for your _contributors_ to set up AI inference as well. When anyone with a GitHub account can run your code end to end, you’ll be able to get contributions from the whole range of GitHub users, not just the ones with an OpenAI key.

### Zero-configuration CI with GitHub Actions

Publishing an Action that relies on AI used to require users to add their inference API key as a GitHub Actions secret. Now you can ship a one-click install:

```yaml
# .github/workflows/triage.yml
permissions:
    contents: read
    issues: write
    models: read   # 👈 unlocks GitHub Models for the GITHUB_TOKEN

jobs:
    triage:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - name: Smart issue triage
                run: node scripts/triage.js
```

The runner’s `GITHUB_TOKEN` carries the `models:read` scope, so your Action can call any model without extra setup. This makes it well suited for:

- Automated pull request summaries
- Issue deduplication and tagging
- Weekly repository digests
- Anything else you can script in an Action

## Scaling when your project takes off

The GitHub Models inference API is free for everyone. But if you or your users want to do more inference than the free rate limits allow, you can turn on [paid inference](https://docs.github.com/en/billing/managing-billing-for-your-products/about-billing-for-github-models) in your settings for significantly larger context windows and higher requests-per-minute.

When your community grows, so will traffic. So it’s important to consider the following:

- **Requests per minute (RPM):** While the free tier offers default limits, the paid tier offers multiples higher.
- **Context window:** Free tier tops out at standard model limits; paid enables 128k tokens on supported models.
- **Latency:** The paid tier runs in its own separate deployment, so you’re not in the same queue as free tier users.

To get started, you can enable paid usage in **Settings > Models** for your org or enterprise. Your existing clients and tokens will keep working (but they’ll be faster and support bigger contexts).

## Take this with you

LLMs are transforming how developers build and ship software, but requiring users to supply their own paid API key can be a barrier to entry. The magic only happens when the first `npm install`, `cargo run`, or `go test` just works.

If you maintain an AI-powered open source codebase, you should consider adding GitHub Models as a default inference provider. Your users already have free AI inference via GitHub, so there’s little downside to letting them use it with your code. That’s doubly true if your project is able to run in GitHub Actions. The best API key is no API key!

By making high-quality inference a free default for every developer on GitHub, GitHub Models gets rid of the biggest blocker to OSS AI adoption. And that opens the door to more contributions, faster onboarding, and happier users.

Want to give it a try? **Check out the [GitHub Models documentation](https://docs.github.com/en/github-models) or jump straight into the [API reference](https://docs.github.com/en/github-models/reference) and start shipping AI features that just work today.**

***

## Tags

- [AI models](https://github.blog/tag/ai-models/)
- [CI/CD](https://github.blog/tag/ci-cd/)
- [GitHub Models](https://github.blog/tag/github-models/)

## Written by

![Image 9: Sean Goedecke](https://avatars.githubusercontent.com/u/19204567?v=4&s=200)

### [Sean Goedecke](https://github.blog/author/sgoedecke/)

[@sgoedecke](https://github.com/sgoedecke)

Sean is a software engineer at GitHub, working on GitHub Models.

---

## More on [AI models](https://github.blog/tag/ai-models/)

### [Real‑world video demo: Using different AI models in GitHub Copilot](https://github.blog/ai-and-ml/real%e2%80%91world-video-demo-using-different-ai-models-in-github-copilot/)

Curious about how AI models perform in real-world scenarios with GitHub Copilot? Same. We made a live video demo to find out, and wrote up our key takeaways.

[Jon Peck](https://github.blog/author/peckjon/ "Posts by Jon Peck")

### [A guide to deciding what AI model to use in GitHub Copilot](https://github.blog/ai-and-ml/github-copilot/a-guide-to-deciding-what-ai-model-to-use-in-github-copilot/)

What to look for with each model and how to test them in your workflows—with tips, tricks, and pointers.

[Klint Finley](https://github.blog/author/klintron/ "Posts by Klint Finley")

## Related posts

![Image 10](https://github.blog/wp-content/uploads/2025/06/wallpaper-copilot-generic-logo-dark.png?resize=400%2C212)

[AI & ML](https://github.blog/ai-and-ml/)

### [Onboarding your AI peer programmer: Setting up GitHub Copilot coding agent for success](https://github.blog/ai-and-ml/github-copilot/onboarding-your-ai-peer-programmer-setting-up-github-copilot-coding-agent-for-success/)

Learn how to configure Copilot coding agent’s environment, optimize project structure, use custom instructions, and extend its capabilities with MCP servers.

[Christopher Harrison](https://github.blog/author/geektrainer/ "Posts by Christopher Harrison")

![Image 11](https://github.blog/wp-content/uploads/2025/04/wallpaper_github_generic_1.png?resize=400%2C212)

[AI & ML](https://github.blog/ai-and-ml/)

### [A practical guide on how to use the GitHub MCP server](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/)

Upgrade from a local MCP Docker image to GitHub’s hosted server and automate pull requests, continuous integration, and security triage in minutes — no tokens required.

[Andrea Griffiths](https://github.blog/author/andreagriffiths11/ "Posts by Andrea Griffiths")

![Image 12](https://github.blog/wp-content/uploads/2025/07/wallpaper-generic-blue.png?resize=400%2C212)

[AI & ML](https://github.blog/ai-and-ml/)

### [How to build secure and scalable remote MCP servers](https://github.blog/ai-and-ml/generative-ai/how-to-build-secure-and-scalable-remote-mcp-servers/)

More context can mean more attack surfaces for your projects. Be prepared for what lies ahead with this guide.

[Den Delimarsky](https://github.blog/author/localden/ "Posts by Den Delimarsky")

## Explore more from GitHub

![Image 13: Docs](https://github.blog/wp-content/uploads/2024/07/Icon-Circle.svg)

### Docs

Everything you need to master GitHub, all in one place.

[Go to Docs](https://docs.github.com/)

![Image 14: GitHub](https://github.blog/wp-content/uploads/2024/07/Icon_95220f.svg)

### GitHub

Build what’s next on GitHub, the place for anyone from anywhere to build anything.

[Start building](https://github.com/)

![Image 15: Customer stories](https://github.blog/wp-content/uploads/2024/07/Icon_da43dc.svg)

### Customer stories

Meet the companies and engineering teams that build with GitHub.

[Learn more](https://github.com/customer-stories)

![Image 16: GitHub Universe 2025](https://github.blog/wp-content/uploads/2024/04/Universe24-North_Star.svg)

### GitHub Universe 2025

Last chance: Save $700 on your IRL pass to Universe and join us on Oct. 28-29 in San Francisco.

[Register now](https://githubuniverse.com/?utm_source=Blog&utm_medium=GitHub&utm_campaign=module)

---

## We do newsletters, too

Discover tips, technical guides, and best practices in our biweekly newsletter just for devs.

Your email address

*Your email address

Subscribe

- [x] Yes please, I’d like GitHub and affiliates to use my information for personalized communications, targeted advertising and campaign effectiveness. See the [GitHub Privacy Statement](https://github.com/site/privacy) for more details.

Subscribe

---

## Site-wide Links

[](https://github.com/)

### Product

- [Features](https://github.com/features)
- [Security](https://github.com/security)
- [Enterprise](https://github.com/enterprise)
- [Customer Stories](https://github.com/customer-stories?type=enterprise)
- [Pricing](https://github.com/pricing)
- [Resources](https://resources.github.com/)

### Platform

- [Developer API](https://developer.github.com/)
- [Partners](https://partner.github.com/)
- [Atom](https://atom.io/)
- [Electron](https://www.electronjs.org/)
- [GitHub Desktop](https://desktop.github.com/)

### Support

- [Docs](https://docs.github.com/)
- [Community Forum](https://github.community/)
- [Training](https://services.github.com/)
- [Status](https://www.githubstatus.com/)
- [Contact](https://support.github.com/)

### Company

- [About](https://github.com/about)
- [Blog](https://github.blog/)
- [Careers](https://github.com/about/careers)
- [Press](https://github.com/about/press)
- [Shop](https://shop.github.com/)
- © 2025 GitHub, Inc.
- [Terms](https://docs.github.com/en/github/site-policy/github-terms-of-service)
- [Privacy](https://docs.github.com/en/github/site-policy/github-privacy-statement)
- Manage Cookies
- Do not share my personal information
- [GitHub on LinkedIn](https://www.linkedin.com/company/github)
- [GitHub on Instagram](https://www.instagram.com/github/)
- [GitHub on YouTube](https://www.youtube.com/github)
- [GitHub on X](https://twitter.com/github)
- [GitHub on TikTok](https://www.tiktok.com/@github)
- [GitHub on Twitch](https://www.twitch.tv/github)
- [GitHub’s organization on GitHub](https://github.com/github)

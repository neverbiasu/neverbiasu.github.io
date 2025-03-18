---
title: "MCP: Flash in the Pan or Future Standard?"
icon: openmoji:code-editor
cover: /assets/images/reprint/mcp-debate-cover.jpeg
order: 1
author: Harrison Chase & Nuno Campos
date: 2024-05-01
category:
    - reprint
tag:
    - AI
    - LLM
    - Protocol
    - Debate
sticky: false
star: false
footer: Thoughts on MCP
copyright: reprint
---

# MCP: Flash in the Pan or Future Standard?

Model Context Protocol (MCP) has stirred up quite a storm on Twitter—but is it actually useful, or just noise? In this debate, Harrison Chase (LangChain CEO) and Nuno Campos (Head of LangGraph) discuss whether MCP lives up to the hype.

## Harrison's Take: MCP Is Actually Useful

I started skeptical about MCP, but I've begun to see its value. Essentially: **MCP is useful when you want to add tools to an agent you don't control**.

Take Claude Desktop, Cursor, or Windsurf. As a user, I can't control the underlying agent. These agents only have access to a few built-in tools by default.

But what if I want it to access tools that aren't included by default? For that, some protocol needs to exist—otherwise how would it know how to call the tool?

I believe this will also be useful for non-developers creating agents. One trend we're seeing is people wanting to make agent building accessible to domain experts regardless of technical expertise. I think these builders rarely want to (or can) edit agent logic itself—but they will want to give it access to specific tools. MCP is useful here.

## Nuno's Counterpoint: You're Underestimating Integration Difficulty

I think you're underestimating how much other parts of the agent need to be customized for tools. Sure, if Windsurf (God bless) ships with a terrible web search tool and you want to replace it with a good one, that would work. But that's not the real use case.

The truly compelling use case—giving Cursor capabilities its creators never imagined by injecting a magic tool—doesn't work in practice most of the time. In almost every agent I've seen in production, you need to adjust the system prompt based on available tools, or even other parts of the architecture.

## Harrison's Response: Good Enough Works

Okay, maybe these agents won't be 99% reliable... but they might still be good enough? Tool descriptions and instructions do matter! But we also know:

- MCP has tool definitions - a good MCP server might have better tool descriptions than you'd hastily write.
- MCP allows prompts - so you can include instructions.
- As underlying models improve, out-of-the-box tool-calling agents will get better.

I don't think anyone is going to build the next Cursor based solely on MCP integrations and tool-calling agents, but there's definitely value for internal or personal agents.

## Nuno's Challenge: 50% Success Rate Isn't Enough

Well, our own tool-calling benchmarks show that current models fail to call the right tool about half the time—and that's in agents with architecture and prompts tailored to specific tool sets. Even for personal agents, a 50% failure rate isn't very practical...

Yes, models will get better—but user expectations will rise too. Don't take my word for it; look at what Bezos says: "I love customers, because customers are always beautifully, wonderfully dissatisfied. Their expectations are never static—they go up. It's human nature."

You can only meet those expectations if you own the entire stack—UI, prompts, architecture, tools. Otherwise, good luck.

## Harrison's Analogy: Think About Zapier

Models will continue to get better—I'd bet on that. So whatever the success rate of agents is now, it's only going up.

I think the right comparison isn't my agent built with MCP versus those finely tuned with tools. I think the real value is in the long tail of connections and integrations I want to create.

It's like Zapier, which is about connecting email to Google Sheets to Slack, etc. I can create countless workflows, and there probably won't be a polished agent for every workflow. With MCP, I can create my own version.

What do you think of the Zapier analogy?

## Nuno's Reflection: We've Already Tried This

At LangChain, we've had a library of 500 tools for two years now, and I rarely see them used in production. They all implement the same "protocol," are compatible with any model, and are interchangeable. So what's the difference—is it MCP's magical form that runs a million servers locally on your terminal and is only compatible with desktop apps? That's not an advantage to me. Honestly, I do think Zapier is the ceiling for MCP's potential.

## Harrison's Clarification: Targeting Different Users

I think the difference between LangChain tools and MCP tools is that MCP isn't designed for the developer of the agent. They're most useful when you're bringing tools into an agent that you can't develop.

To be clear—if I'm writing an agent to do XYZ—I absolutely wouldn't use MCP. But I don't think that's the target use case for MCP. MCP is for bringing tools into agents you don't control. It also enables non-developers to bring tools into agents (while LangChain tools are developer-facing). And there are many more non-developers than developers.

As for the current form of MCP? Yes, it's bad. But it will get better, right? My imagined future state of MCP is that you can install MCP apps with one click (no more running servers in your local terminal), and they'll be accessible on web apps too. I bet MCP is heading in this direction.

What changes would MCP need to make for you to believe they're useful?

## Nuno's Challenge: More Improvements Needed

Okay, so MCP needs to become more like OpenAI's custom GPTs for the current hype to be justified. But custom GPTs aren't that popular either. So what's missing from GPTs that MCP has?

## Harrison's Response: Comparing to Plugins

I mean, MCP is more like Plugins, which also didn't succeed 🙂 I kind of forget the Plugin experience (not sure I ever used it), so any comparison I make might not be accurate. But I would say:

- MCP's ecosystem is already much larger than the plugins ecosystem
- Models are getting better, more capable of using these tools

## Nuno's Summary: What MCP Needs to Succeed

I don't know if the ecosystem is larger. A directory I found in 5 seconds listed 893 servers at the time. I think you might be counting the number of tweets mentioning MCP on your timeline rather than actual things built with it 🙂 But back to your unanswered question, I think if MCP is going to be more than a footnote in AI history, it needs to:

1. **Become less complex**. Why does a tool protocol also need to provide prompts and LLM completions?
2. **Become easier to implement**. Why does a protocol for serving tools need bidirectional communication? Yes, I read all their listed reasons, and sorry, receiving logs from the server is not a good enough reason.
3. **Work on servers**. Stateless protocols are key—just because we're building with LLMs doesn't mean we should forget all the lessons learned about scaling online. Once it works on servers, other issues emerge like authentication (not easy to solve in a distributed way).
4. **Make up for the quality degradation that comes from inserting random tools into an agent that knows nothing about them**.

## Harrison's Closing Thought

You might be right, my Twitter timeline has some recency bias. But there's also a lot of skepticism up there!

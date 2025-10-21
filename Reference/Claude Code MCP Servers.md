---
tags:
  - claude-code
  - ai
  - MCP-Servers
---
## Scope
by adding the `--scope` flag we can determine where the MCP will be installed. Options are:
`local`, `user`, `project`, `dynamic`, `enterprise`

Example
```bash
claude mcp add playwright --scope user npx @playwright/mcp@latest
```
## Adding the Playwright MCP server
[installation instructions](https://github.com/microsoft/playwright-mcp)
```bash
claude mcp add playwright npx @playwright/mcp@latest
```

## Adding the Context7 MCP server

[installation instructions](https://github.com/upstash/context7)
Remotely:
```bash
claude mcp add --transport http context7 https://mcp.context7.com/mcp --header "CONTEXT7_API_KEY: YOUR_API_KEY"
```
Locally:
```bash
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY
```
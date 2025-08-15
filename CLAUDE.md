# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an Obsidian vault named "silver-brain" containing personal knowledge notes organized in a structured format. The repository serves as a digital brain/second brain system for storing and organizing technical documentation and learning notes.

## Repository Structure

```
silver-brain/
├── Daily Notes/           # Daily note entries (e.g., 2025-08-15.md)
├── Reference/            # Technical reference documentation
│   ├── AWS/             # AWS CLI, authentication, credentials
│   ├── JavaScript/      # JS/TS concepts, Husky setup, loops, promises
│   ├── Linux/           # CLI commands, SSH keys, file operations
│   ├── Python/          # Testing frameworks and patterns
│   └── git/             # Git workflows, terminal commands
├── Troubleshooting/     # Problem-solving documentation
└── .obsidian/           # Obsidian configuration and plugins
```

## Git Workflow

This repository uses automated Git commits via the Obsidian Git plugin. The plugin is configured to:
- Auto-commit changes every 5 minutes with message format: `vault backup: YYYY-MM-DD HH:mm:ss`
- Use merge strategy for syncing
- Pull before push to avoid conflicts

### Manual Git Operations

When working with this vault manually (outside of Obsidian):
- Follow the git workflow guidelines in `Reference/git/Git Workflow Guidelines.md`
- Use conventional commit messages when committing manually
- Prefer rebase over merge for feature branches to maintain clean history

## Content Organization

### Note Categories
- **Daily Notes**: Time-based entries for daily thoughts and activities
- **Reference**: Structured technical documentation by topic/technology
- **Troubleshooting**: Problem-solution documentation

### Tagging System
Notes use a comprehensive tagging system for categorization. As noted in the vault philosophy: "Tags categorize, Links connect" - use tags to answer "What type of note is this?" and links to answer "What else should I know about this topic?"

## Obsidian Configuration

The vault includes several plugins and themes:
- **obsidian-git**: Automated version control
- **obsidian-style-settings**: Theme customization
- **obsidian-editor-shortcuts**: Enhanced editing
- **tag-wrangler**: Tag management

Multiple themes are available including AnuPpuccin, Typewriter, Obsidian Nord, and others.

## Language and Writing Style

This repository uses **British English** for all content. When creating or editing notes, use British spelling conventions (e.g., "organised" not "organized", "colour" not "color", "centre" not "center").

## Working with This Repository

### Adding New Content
- Place reference material in appropriate `Reference/` subdirectories
- Use consistent markdown formatting and include relevant tags
- Follow existing naming conventions (title case with descriptive names)
- Include practical examples and commands where applicable
- Use British English spelling and conventions

### Updating Documentation
- Maintain the hierarchical structure when adding new reference categories
- Keep troubleshooting notes focused on specific problems and solutions
- Include relevant tags for discoverability

### Git Operations
- The repository is configured for automatic commits via Obsidian
- Manual commits should follow conventional commit format
- Be aware that `.obsidian/workspace.json` frequently changes and represents user session state
Tags: #terminal #shell #cli #linux #REPL #zsh #bash #sh

# Differences between Terminal, Shell and CLI

A Terminal, or my precisely a Terminal Emulator (because it emulates the physical computer terminals of old) is a specific part of a program that let's you type commands into a window and can display text in response. Which commands you are able to type and what they will do, actually depends on the shell. The terminal emulator is just responsible for drawing text on the screen and processing your keystrokes.

The shell, is the program that runs all of these commands.  It's main job is to interpret the commands you write and execute them. Shells are often referred to as REPLs. A REPL stands for Read, Evaluate, Print, Loop

`sh` is The Bourne shell, the original UNIX shell and it's [POSIX compliant](https://en.wikipedia.org/wiki/POSIX).
`bash` is Theo Bourne Again shell and it's the most popular shell on linux. It builds on `sh` but has a lot of extra features,
`zsh` is The Z shell and it is the most popular shell on MacOS. Like bash, it builds on top of `sh` but also has a lot of extra features.

Both `zsh` and `bash` are 
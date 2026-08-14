---
title: Mini Gaming Console — Generation III
tagline: Colour TFT, rotary-encoder navigation, and a real embedded UI layer.
summary: >-
  The third revision of the mini console: a colour TFT display driven over SPI, a rotary encoder for
  fast menu navigation, and a rebuilt embedded UI with proper menu state management — the point
  where the project stopped being a toy and started being a product.
year: '2026'
role: Hardware
status: Prototype
category: Embedded Systems
featured: false
order: 5
series: { name: 'Mini Gaming Consoles', part: 3 }
tags:
  - Embedded Systems
  - ESP32
  - TFT / SPI Graphics
  - Product Design
highlights:
  - { value: 'Gen 3', label: 'Hardware revision' }
  - { value: 'Colour', label: 'TFT display over SPI' }
  - { value: 'Encoder', label: 'Added navigation input' }
stack:
  hardware:
    - ESP32
    - Colour TFT display (SPI)
    - Rotary encoder
    - Analog joystick
    - Capacitive Touch Sensor
    - Li-ion battery (18650)(3000mah) + TP4056 charging
    - Vibration motors
  software:
    - Embedded C++ / Arduino framework
    - TFT display driver
    - SPI graphics pipeline
    - Menu state machine
    - Game loop architecture
  tools:
    - Enclosure design & 3D printing
    - Iterative hardware revision
cover: /images/gaming-console-v3/02.jpg
gallery:
  - { src: /images/gaming-console-v3/02.jpg, alt: "Generation III console — colour TFT and rotary encoder", caption: "Top view showing the colour TFT, rotary encoder and joystick", span: normal }
  - { src: /images/gaming-console-v3/01.jpg, alt: "Generation III console", span: normal }
---

## Overview

Generation III is where the console series grew up. Generations I and II proved the concept and
fixed the mechanical packaging; this revision replaced the monochrome OLED with a **colour TFT**,
added a **rotary encoder** for navigation, and rebuilt the software around a real UI layer instead
of per-game screen drawing.

## Problem statement

The 128×64 OLED of the earlier revisions was the binding constraint. It limited what a game could
show, it made menus feel cramped, and every new game meant hand-rolling another screen layout.
Navigation via joystick was also imprecise for list selection — a joystick is a great analog input
and a poor menu control.

### Input

The rotary encoder was added specifically for menu navigation: detent-per-item selection with a
push-to-confirm, which is dramatically faster and more precise than nudging a joystick through a
list. The joystick and capacitive touch sensor were retained for gameplay, so each input does what it is actually
good at.

### Software architecture

The UI was rebuilt as a **menu state machine** sitting above the game loop:

- A root menu that enumerates the available games
- Per-game state entered and exited cleanly, so a game can be quit without a reset
- Shared rendering primitives instead of per-game screen code
- Pause and game-over handling common to every title

This is the change that made adding a new game a matter of writing the game, rather than writing
the game plus its entire screen furniture.

## Skills demonstrated

- AI assisted Embedded UI design and menu systems
- Human–machine interface design on constrained hardware
- Iterative product development across three hardware generations

## Future improvements

- Sound beyond the buzzer — a small DAC or I²S audio path
- Save-state persistence to flash
- A hardware revision that consolidates the wiring onto a custom PCB

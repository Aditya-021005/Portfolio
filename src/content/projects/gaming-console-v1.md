---
title: Mini Gaming Console — Generation I
tagline: ESP32, an OLED, haptics, and three games written from scratch.
summary: >-
  The first mini console: an ESP32 driving a 128×64 OLED, with a joystick, buttons, dual
  vibration motors and Li-ion charging — plus three original games written from scratch with enemy
  AI, collision detection and full game-state handling.
year: '2023 — 2024'
role: Hardware, firmware, game development
status: Shipped
category: Embedded Systems
order: 7
series: { name: 'Mini Gaming Consoles', part: 1 }
tags:
  - Embedded Systems
  - ESP32
  - Game Development
  - Consumer Electronics
highlights:
  - { value: 'Gen 1', label: 'Hardware revision' }
  - { value: '128×64', label: 'OLED display' }
  - { value: '3', label: 'Games written from scratch' }
stack:
  hardware:
    - ESP32 microcontroller
    - 128×64 OLED display
    - Rechargeable Li-ion battery
    - TP4056 charging module
    - Analog joystick
    - Push buttons
    - Dual vibration motors (L/R haptics)
    - Buzzer
    - USB programming interface
    - Custom enclosure
  software:
    - Embedded C++ / Arduino framework
    - OLED graphics rendering
    - Game loop architecture
    - Collision detection
    - Enemy AI
    - Score and lives tracking
  tools:
    - Enclosure design
    - Point-to-point prototyping
    - Battery charging integration
cover: /images/gaming-console-v1/01.jpg
gallery:
  - { src: /images/gaming-console-v1/01.jpg, alt: "Generation I console enclosure", caption: "Printed shell with the OLED visible along the top edge", span: normal }
  - { src: /images/gaming-console-v1/02.jpg, alt: "Generation I console", span: normal }
  - { src: /images/gaming-console-v1/03.jpg, alt: "Generation I console", span: normal }
videos:
  - { type: mp4, src: /videos/gaming-console-v1-prototype.mp4, title: "Generation I prototype — gameplay on the bench", poster: /images/gaming-console-v1/01.jpg }
---

## Overview

The console that started the series. An ESP32, a 128×64 OLED, a joystick, buttons, two vibration
motors for stereo haptics, a buzzer, a Li-ion cell with TP4056 charging, and an enclosure to hold
it all together.

The goal was to build a complete consumer-style product rather than a breadboard demo — something
with a battery, a case, and software you could hand to someone without explanation.

## Hardware

- **ESP32** as the main controller — more compute than the games need, which left headroom for
  later software features
- **128×64 OLED** over I²C for the display
- **Analog joystick** plus discrete push buttons for input
- **Dual vibration motors**, left and right, for directional haptic feedback
- **Buzzer** for game audio
- **TP4056** charging module with a rechargeable Li-ion cell
- **USB** for programming

## Games

Three games written from scratch, each a different software problem:

**Space Invaders** — the most involved: enemy formations with movement patterns, projectile
management on both sides, and collision detection between many moving objects at once.

**Car Dodge** — an endless scroller. Simple mechanically, but the one that most needed a smooth,
consistent frame rate to feel fair.

**Memory Game** — an early revision exploring sequence generation, input matching and difficulty
progression.

### Shared software features

- Multiple lives with a life-lost state
- Score tracking
- Enemy AI behaviour
- Collision detection
- Pause screen
- Game-over screen

## Challenges

**Enclosure size.** The case ended up larger than the electronics needed, because it was designed
around the assembly rather than the assembly being designed to fit it.

**Battery bulge.** Stacking the cell behind the PCB pushed the rear shell out — visible, and the
first thing anyone noticed.

**Point-to-point wiring.** With no custom PCB, every connection was hand-wired. It worked, but it
was dense, fragile, and made the device slow to open and awkward to service.

**OLED graphical limits.** At 128×64 monochrome, every game had to be designed around what could
be legibly drawn. Sprites became a few pixels; UI became text.

**Frame rate.** Redrawing the OLED over I²C is not free. Keeping the games smooth meant limiting
what was redrawn each frame — the first time I had to think about a display bandwidth budget.

## Lessons learned

Gen I proved the concept and produced a clear, honest list of what was wrong with it. Every one of
those complaints was mechanical, not electrical — which set the entire agenda for
[Generation II](/projects/gaming-console-v2), a revision that changed the package and left the
electronics alone.

That pattern — ship it, live with it, list what's actually wrong, fix exactly that — is how the
whole series progressed.

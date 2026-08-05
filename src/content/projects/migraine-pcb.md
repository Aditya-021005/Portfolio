---
title: Migraine-Relief Wearable PCB
tagline: Freelance schematic capture and compact layout for a portable medical device.
summary: >-
  A freelance hardware engineering commission: schematic capture and compact PCB layout for a
  wearable migraine-reduction device, where the binding constraint was fitting a complete circuit
  into a form factor someone would actually wear.
year: '2024'
role: Freelance hardware engineer
status: Shipped
category: PCB Design
order: 9
tags:
  - PCB Design
  - Medical Electronics
  - Freelance
  - Hardware Engineering
highlights:
  - { value: 'Freelance', label: 'Client commission' }
  - { value: 'Wearable', label: 'Compact form factor' }
  - { value: 'Schematic → layout', label: 'Full ownership' }
stack:
  hardware:
    - Custom compact PCB
    - Portable / wearable form factor
    - Battery-powered operation
  software:
    - N/A — hardware design commission
  tools:
    - Schematic capture
    - PCB layout and routing
    - Component placement optimisation
    - Design for manufacture
cover: /images/dev_01.png
---

## Overview

A client-driven hardware commission: design the electronics for a compact wearable or portable
migraine-reduction device, from schematic through to a fabrication-ready board.

Freelance hardware work is a different discipline from personal projects. The requirements come
from someone else, they are frequently expressed as product constraints rather than electrical
ones, and the deliverable has to be something a fabricator can build without asking questions.

## Problem statement

The device is worn. That single fact drives everything: the board has to fit a small,
specific volume, it has to run from a small battery, and the component placement has to respect
where the enclosure allows height — because a tall part in the wrong place is a mechanical failure
even if the circuit is perfect.

## Responsibilities

- **Schematic capture** — translating the functional requirements into a complete, reviewable
  circuit
- **PCB layout** — board outline, stack-up and placement within the mechanical envelope
- **Component placement** — grouping by function, respecting height restrictions, keeping
  connectors and user-facing parts where the enclosure needs them
- **Routing optimisation** — short, clean paths in a constrained area, with attention to return
  paths
- **Compact form-factor design** — the whole exercise, really

## Design approach

**Placement is the design.** In a board this size, routing quality is decided before the first
trace: components that belong together are placed together, and the mechanically-fixed parts are
positioned first because they cannot move later.

**Mechanical constraints are electrical constraints.** Board outline, mounting points and
component height came from the enclosure, not from the schematic. Working outward from that
envelope avoids the expensive discovery that a finished board doesn't fit.

**Design for the person assembling it.** Fiducials, sensible orientation, clear silkscreen and
polarity markings cost nothing at design time and save a build.

## Challenges

**Area versus function.** Every millimetre is contested. Resolving it meant repeatedly revisiting
placement rather than accepting the first arrangement that routed.

**Client-driven requirements.** Requirements arrived as product goals, not specifications. Part of
the job was converting those into electrical requirements and confirming the interpretation before
committing to a layout.

## Skills demonstrated

- Medical / wearable electronics considerations
- Compact PCB design and routing
- Hardware prototyping
- Working to an external client's requirements and timeline

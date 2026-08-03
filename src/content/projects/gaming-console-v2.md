---
title: Handheld Gaming Console — Generation II
tagline: Same electronics, completely rebuilt package.
summary: >-
  A mechanical redesign of the handheld console: a magnetic snap-fit enclosure, relocated battery
  that eliminated the Gen I bulge, cleaner internal wiring and a noticeably thinner, better
  balanced device.
year: '2024'
role: Mechanical design, packaging, assembly
status: Shipped
category: Embedded Systems
order: 5
series: { name: 'Handheld Console Series', part: 2 }
tags:
  - Product Design
  - Mechanical Design
  - Packaging
  - Rapid Prototyping
highlights:
  - { value: 'Gen 2', label: 'Hardware revision' }
  - { value: 'Snap-fit', label: 'Magnetic enclosure' }
  - { value: 'No bulge', label: 'Battery relocated' }
stack:
  hardware:
    - ESP32
    - 128×64 OLED display
    - Li-ion battery + TP4056 charging
    - Analog joystick and push buttons
    - Dual vibration motors
    - Magnets for enclosure retention
  software:
    - Embedded C++ / Arduino framework
    - Carried forward from Generation I
  tools:
    - Enclosure design
    - 3D printing / DFM
    - Packaging optimisation
    - Tolerance and fit work
# cover: /images/gaming-console-v2/hero.jpg
---

## Overview

Generation II changed almost nothing electrically and almost everything physically. Gen I worked —
it just wasn't pleasant to hold or to open. This revision was a pure packaging exercise, and it's
the one that taught me the most about mechanical design.

## Problem statement

Gen I had four specific physical failures:

1. The enclosure was larger than the electronics required
2. The battery created a visible bulge in the rear shell
3. Internal point-to-point wiring was dense and fragile
4. Opening the device meant fighting screws or a friction fit

None of these are firmware problems. All of them are the first thing anyone notices.

## Design process

### Packaging first

Rather than shrinking the Gen I shell, I laid out the internals from scratch — board, battery,
display, joystick, buttons and both vibration motors — and *then* wrapped an enclosure around
that arrangement. Designing the package around the parts instead of forcing parts into a package
is what removed the wasted volume.

### The battery bulge

The Gen I bulge came from stacking the cell behind the PCB. Gen II relocates it into the volume
alongside the board that was previously dead space, which flattened the rear shell and moved mass
towards the grips — better balance as a side effect of a thickness fix.

### Magnetic snap-fit

Screws are slow to open and unforgiving of print tolerance. Embedded magnets with a registration
feature give a shell that closes with a satisfying click, holds firmly, and opens instantly for
debugging — which matters enormously on a device you are still developing firmware for.

### Wiring

Gen I's point-to-point wiring was the main assembly risk. Gen II routed harnesses along defined
paths with clearance designed in, rather than letting wires find their own way.

## Challenges

**Print tolerance versus magnet fit.** Magnet pockets that are correct in CAD are a press-fit or a
loose fit in reality depending on the printer. Resolved by iterating test coupons rather than
reprinting whole shells.

**Ergonomics is a physical question.** Grip comfort could not be evaluated in CAD. Several printed
iterations were needed to get thickness and edge radii to something that felt right in the hand.

## Engineering focus

- Mechanical optimisation and packaging efficiency
- Manufacturability — fewer parts, faster assembly, tolerant of print variation
- Serviceability — a device you can open in two seconds is a device you keep improving

## Lessons learned

The electronics decide what a device *can* do; the packaging decides whether anyone wants to hold
it. A revision that changes no features can still be the most valuable one in the series.

Gen II's mechanical platform is what made [Generation III](/projects/gaming-console-v3) — with its
larger colour display and added encoder — a straightforward change rather than another
ground-up rebuild.

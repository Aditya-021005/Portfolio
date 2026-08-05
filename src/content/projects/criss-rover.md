---
title: CRISS Rover
tagline: Advising on the electrical architecture of a multidisciplinary rover programme.
summary: >-
  Large-scale robotics platform developed with CRISS Robotics, where I serve as Senior Technical
  Advisor — covering the battery management system, power distribution, PCB review, subsystem
  integration, testing and team documentation.
year: '2025'
role: Senior Technical Advisor
status: In Progress
category: Robotics
featured: true
order: 3
tags:
  - Robotics
  - Power Electronics
  - PCB Design
  - Systems Engineering
  - Systems Advisory
highlights:
  - { value: 'Advisor', label: 'Electrical subsystem' }
  - { value: 'BMS', label: 'Battery architecture owned' }
  - { value: '100%', label: 'Boards schematic-reviewed' }
stack:
  hardware:
    - Battery management system
    - High-current power distribution
    - Custom PCBs
    - Motor drivers
    - Wiring harness architecture
  software:
    - Embedded C / C++
    - Subsystem test firmware
  tools:
    - KiCad
    - Schematic & layout review
    - Bring-up and debug procedure
    - Subsystem documentation
cover: /images/criss-rover/02.jpg
gallery:
  - { src: /images/criss-rover/02.jpg, alt: "CRISS Rover electrical subsystem boards on the bench", caption: "Power distribution board, motor driver boards and the main controller", span: wide }
  - { src: /images/criss-rover/01.jpg, alt: "CRISS Rover electrical hardware", span: normal }
  - { src: /images/criss-rover/03.jpg, alt: "CRISS Rover electrical hardware", span: normal }
  - { src: /images/criss-rover/04.jpg, alt: "CRISS Rover electrical hardware", span: normal }
  - { src: /images/criss-rover/05.jpg, alt: "CRISS Rover electrical hardware", span: normal }
---

## Overview

CRISS Rover is a large robotics platform built by a multidisciplinary student team. I advise on
the electrical subsystem: everything from the cells to the connectors that the mechanical and
software teams plug into.

The interesting part of a programme this size is not any single board — it's that the electrical
architecture has to serve teams whose requirements are still changing. The aim is to make the
power system predictable enough that nobody else has to think about it.

## Scope

- **Battery management system** — cell configuration, protection strategy, monitoring and the
  safety envelope the rest of the platform operates inside.
- **Power distribution** — regulated rails for compute and sensing, high-current paths for the
  drivetrain, and clean separation between them.
- **PCB design** — schematic capture and layout for the subsystem boards.
- **Electrical debugging** — bring-up procedure, fault isolation and the diagnosis of integration
  failures across subsystem boundaries.
- **Wiring architecture** — harness design, connector selection and strain relief for a platform
  that gets assembled and disassembled repeatedly.
- **System integration** — making the electrical, mechanical and software subsystems meet.
- **Documentation** — schematics, test records and handover notes.
- **Review and mentoring** — running design reviews and bringing junior members up to speed.

## Architecture

The power system splits into two domains that deliberately do not share a return path any more
than they must:

- A **high-current domain** feeding the drivetrain, sized for stall current rather than nominal
  draw, with distribution laid out to keep the loop areas small.
- A **low-current domain** for compute, sensing and communications, regulated and filtered so that
  a drivetrain transient never shows up as a brownout on a microcontroller.

Every board gets a defined power-up order and a known-safe state on fault.

## Challenges

**Requirements that move.** Mechanical and software requirements changed through the build. The
answer was margin: specify the distribution for more current than currently requested, and leave
spare regulated rails and connector positions.

**Debugging across subsystem boundaries.** The hardest faults were never purely electrical — they
were a firmware assumption meeting a wiring reality. Documenting the expected voltage at every
test point turned "the rover doesn't move" into a five-minute measurement.

**Teaching while shipping.** Reviewing a junior member's layout takes longer than fixing it
yourself. Doing it anyway is the only way the team gets faster.

## Lessons learned

- Specify the electrical interface to other subsystems early and in writing. It is far cheaper
  than discovering the mismatch at integration.
- A ground plane and a considered return path solve problems that no amount of firmware will.
- Advising a hardware team is mostly review discipline and written handover, not decisions.

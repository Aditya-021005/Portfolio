---
title: SUBASS — Autonomous Drone Battery Swapping
tagline: An automated ground station that swaps UAV batteries without a human in the loop.
summary: >-
  Sub-system Autonomous Battery Swapping: an automated ground station module that performs rapid
  battery hot-swaps on UAVs, enabling continuous mission uptime without manual intervention.
year: '2026'
role: Power management, sensor alignment, mechanical-electrical interconnect
status: In Progress
category: Robotics
featured: true
order: 1
tags:
  - Robotics
  - Mechatronics
  - Power Management
  - UAV Infrastructure
  - Sensor Integration
highlights:
  - { value: 'Autonomous', label: 'No manual intervention' }
  - { value: 'Hot-swap', label: 'Battery exchange cycle' }
  - { value: 'Persistent', label: 'Continuous UAV uptime' }
stack:
  hardware:
    - Automated battery dock mechanism
    - Battery charging and power delivery interface
    - Alignment sensors
    - Mechanical-electrical interconnects
    - Motorised actuation
  software:
    - Swap sequence control
    - Alignment and position feedback
    - Charge state monitoring
  tools:
    - Power management design
    - Sensor positioning
    - Interconnect reliability testing
    - Mechanical-electrical integration
  cover: /images/SUBASS_01.jpg

---

## Overview

A UAV's mission length is capped by one thing: the battery. Every flight ends with a landing, a
person walking out to the aircraft, a manual swap and a restart. SUBASS — **Sub-system Autonomous
Battery Swapping** — removes the person from that loop.

It is an automated ground station module that receives a UAV, exchanges its depleted battery for a
charged one, and releases it back to the mission. The goal is persistent operation: an aircraft
that can stay on task indefinitely as long as the ground station has charged packs.

## Problem statement

Battery swapping sounds mechanical, but the difficult requirements are electrical and positional:

- The aircraft never lands in exactly the same place twice, so the dock has to **tolerate and
  correct for misalignment** rather than assume precision.
- A power interface that is mated and unmated on every cycle has to stay reliable across
  **thousands of connections**, not the handful a manually-serviced battery sees.
- The station has to know the **state of every pack** it holds, so it never hands the aircraft a
  battery that will not complete the next mission.
- Any fault has to fail safe. A half-completed swap must not leave an aircraft powered by nothing.

## Contributions

My work on the project covers three areas:

### Battery dock power management

The station is simultaneously charging several packs and delivering power through the swap
interface. That means managing charge scheduling across the magazine, monitoring pack state so
only a genuinely ready battery is presented, and designing the delivery path so the aircraft
receives clean power at the moment of handover.

### Sensor positioning for alignment

Alignment is the difference between a swap that works and one that damages a connector. I worked
on **where the sensing goes** — positioning the sensors so the dock can detect the aircraft's
actual pose and drive the correction, rather than assuming the landing was accurate. Sensor
placement here is a design decision, not an afterthought: a sensor in the wrong position produces
a measurement that is technically correct and operationally useless.

### Mechanical–electrical interconnect reliability

The interconnect is the part of the system that is *designed to wear*. Every swap cycle mates and
unmates it. The work here is about contact design, alignment tolerance and making sure the
mechanical engagement sequence and the electrical connection sequence happen in the right order —
so contacts are never making or breaking under load.

## Why it's interesting

This is the project that most clearly sits across domains. The mechanism is mechanical, the
interface is electrical, the alignment is a sensing and control problem, and the scheduling is
software. None of those can be designed without reference to the others — the connector geometry
constrains the alignment tolerance, which constrains the sensor placement, which constrains the
mechanism.

## Current status

Active development. The system architecture and the contribution areas above are in progress;
this page will be expanded with hardware detail, test results and imagery as the build matures.

## Future work

- Swap-cycle endurance testing on the interconnect
- Closed-loop alignment correction from the sensor feedback
- Magazine capacity and charge-scheduling optimisation
- Integration testing against a live UAV platform

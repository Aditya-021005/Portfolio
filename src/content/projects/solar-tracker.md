---
title: Auto-Rotating Solar Panel Array
tagline: Closed-loop sun tracking with differential light sensing.
summary: >-
  An automated solar tracking system that continuously orients photovoltaic panels toward the sun
  to maximise energy capture — a closed-loop control problem where the power spent tracking has to
  stay well below the power gained.
year: '2023'
role: Design, firmware, control
status: Prototype
category: Energy
order: 10
tags:
  - Renewable Energy
  - Automation
  - Control Systems
  - Embedded Systems
highlights:
  - { value: 'Closed-loop', label: 'Differential LDR sensing' }
  - { value: 'Autonomous', label: 'No schedule or clock needed' }
  - { value: 'Low-power', label: 'Tracking budget constraint' }
stack:
  hardware:
    - Microcontroller
    - Servo / stepper actuators
    - LDR light sensors
    - Motor drivers
    - Photovoltaic panel
    - Rechargeable battery
  software:
    - Embedded C / C++
    - Differential sensing algorithm
    - Closed-loop positioning
    - Deadband and hysteresis logic
  tools:
    - Sensor interfacing
    - Control loop tuning
    - Power budgeting
# cover: /images/solar-tracker/hero.jpg
---

## Overview

A fixed solar panel is only correctly aimed at one moment of the day. A tracking panel follows the
sun and captures meaningfully more energy — provided the tracking mechanism doesn't spend the
gains moving itself.

This project built an automated tracker that orients a photovoltaic panel toward the sun
throughout the day using **differential light sensing** and a closed control loop.

## Objectives

- Automatic sun tracking without a clock, calendar or location input
- Increased photovoltaic yield across the day
- Low-power operation, so tracking cost stays well under tracking benefit
- Fully autonomous control

## Design process

### Sensing: differential, not absolute

The tracker doesn't compute where the sun *should* be — it measures where it *is*. Light sensors
are arranged in opposing pairs with a separator between them. When the panel points directly at
the sun both sensors are equally lit; when it drifts, one is shaded and the readings diverge.

The control input is therefore the **difference** between sensors, not their absolute values. That
choice makes the system inherently robust: it self-corrects for cloud cover, sensor ageing and
component tolerance, all of which affect both sensors together and cancel in the difference.

### Control: deadband over continuous correction

A naive controller chases every fluctuation and hunts around the target, burning power and wearing
the mechanism. The loop uses a **deadband**: below a difference threshold, the panel is considered
aligned and the actuators stay off.

Tuning that threshold is the central trade-off of the whole project:

- Too narrow → constant hunting, and the tracking energy eats the gain
- Too wide → the panel sits persistently off-aim and loses yield

Movements are also made as discrete corrections rather than continuous motion, so the actuators
are idle for the great majority of the day.

### Power budgeting

For a tracker to make sense, the energy spent on sensing, computing and actuating must be a small
fraction of the additional energy captured. That reframes the problem: the objective is not the
most accurate tracking, but the **best net energy gain**.

## Challenges

**Hunting.** The first version oscillated around the target. Deadband plus hysteresis resolved it.

**Cloud cover and false peaks.** A bright cloud edge or a reflective surface can present a local
light maximum. Differential sensing handles most of this; requiring a difference to persist before
acting handles the rest.

**Mechanical backlash.** Play in the drivetrain means commanded position and actual position
differ, and the loop can chase the slop. Handled by making the deadband wider than the backlash.

## Skills demonstrated

- Renewable energy systems
- Sensor interfacing and differential measurement
- Embedded automation
- Closed-loop control design and tuning

## Future improvements

- Dual-axis tracking for seasonal elevation as well as daily azimuth
- Logging to quantify the actual yield improvement against a fixed reference panel
- A night-time park position and a wind stow mode

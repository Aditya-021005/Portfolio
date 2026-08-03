---
title: Mini Rover
tagline: A small Wi-Fi rover built as a reusable robotics testbed.
summary: >-
  A compact Wi-Fi-enabled rover built as a modular platform for experimenting with wireless
  control, embedded firmware and differential-drive behaviour — deliberately designed to be
  reconfigured rather than finished.
year: '2023'
role: Hardware, firmware, integration
status: Shipped
category: Robotics
order: 7
tags:
  - ESP32
  - Wi-Fi
  - Robotics
  - Motor Control
highlights:
  - { value: 'ESP32', label: 'Wi-Fi controller' }
  - { value: 'Diff-drive', label: 'Drivetrain' }
  - { value: 'Modular', label: 'Reconfigurable platform' }
stack:
  hardware:
    - ESP32 controller
    - Motor driver
    - DC gear motors
    - Battery pack
    - Modular chassis
  software:
    - Embedded C++ / Arduino framework
    - Wi-Fi control interface
    - Differential-drive mixing
    - PWM motor control
  tools:
    - Chassis integration
    - Power management
# cover: /images/mini-rover/hero.jpg
---

## Overview

The Mini Rover exists to be experimented on. Rather than building a robot for one task, I built a
small differential-drive platform with an ESP32, a motor driver and a battery, and kept the
mechanical and electrical interfaces deliberately open so that subsystems could be swapped without
rebuilding the rover.

## Design intent

Most of what makes a robot difficult — wireless control latency, motor response, power sag under
load, drivetrain calibration — shows up on a small platform just as clearly as on a large one, and
far more cheaply. Having a rover on the desk that can be reflashed in seconds is worth more than a
more capable robot that is precious.

## Features

- **ESP32-based controller** — Wi-Fi built in, enough PWM channels and headroom for expansion
- **Wi-Fi remote operation** — control from a browser or client on the same network, no pairing
  and no dongle
- **Differential drive** — two independently driven wheels; heading comes from the speed
  difference between them
- **Motor driver integration** — H-bridge control with direction and PWM speed
- **Battery-powered** — fully untethered, so real operation is actually tested
- **Modular electronics layout** — space and connections left for added sensors

## Engineering notes

**Differential-drive mixing.** A joystick gives forward/turn; the motors want left/right. The
mixing between them, plus clamping so a hard turn at full speed doesn't saturate one side and
change the turn radius unexpectedly, is the core of the control code.

**Wireless latency.** A control link that feels fine on a graph feels sluggish when driving.
Testing by driving rather than by measuring is what exposed how much buffering matters, and it
pushed the design towards small, frequent control packets.

**Power sag.** Motors starting under load pull the rail down enough to reset a microcontroller
sharing it. Decoupling and sensible supply separation are not optional, even on a small robot —
a lesson that carried directly into the power architecture work on
[CRISS Rover](/projects/criss-rover).

## Skills demonstrated

- Motor control and PWM
- Wireless communication and remote control architecture
- Embedded firmware
- Robot chassis integration
- Power management

## Future improvements

- Encoder feedback for closed-loop speed control and odometry
- Onboard sensing (IMU, distance sensors) for basic autonomy
- A custom PCB to replace the module-and-jumper wiring

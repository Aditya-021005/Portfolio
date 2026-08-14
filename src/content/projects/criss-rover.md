---
title: CRISS Rover
tagline: Working on the Electrical architecture of a multidisciplinary rover programme.
summary: >-
  Large-scale robotics platform developed with CRISS Robotics, where I serve as Senior Technical
  Advisor — covering the battery management system, power distribution, PCB review, subsystem
  integration, testing and team documentation.
year: '2024 - Present'
role: Senior Technical Advisor (ex-Electrical Subsystem Lead / Vice Captain)
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
    - Incremental encoders
    - Absolute encoders
    - Linear actuators
    - Potentiometer feedback
    - Wiring harness architecture
  software:
    - Embedded C / C++
    - PID motor control
    - Subsystem test firmware
  tools:
    - KiCad
    - Schematic & layout review
    - Bring-up and debug procedure
    - Subsystem documentation
cover: /images/criss-rover/05.jpg
gallery:
  - { src: /images/criss-rover/02.jpg, alt: "CRISS Rover electrical subsystem boards on the bench", caption: "Power distribution board, motor driver boards and the main controller", span: wide }
  - { src: /images/criss-rover/01.jpg, alt: "CRISS Rover electrical hardware", span: normal }
  - { src: /images/criss-rover/03.jpg, alt: "CRISS Rover electrical hardware", span: normal }
  - { src: /images/criss-rover/04.jpg, alt: "CRISS Rover electrical hardware", span: normal }
  - { src: /images/criss-rover/05.jpg, alt: "CRISS Rover electrical hardware", span: normal }
---

## Overview

CRISS Rover is a large robotics platform built by a multidisciplinary student team. I currently advise on
the electrical subsystem. Previously I was the Electrical Sub-system Lead.

My work spans everything from the battery and power distribution architecture to the control electronics,
actuation, feedback systems and the connectors that the mechanical and software teams plug into.

The interesting part of a programme this size is not any single board — it's that the electrical
architecture has to serve teams whose requirements are still changing. The aim is to make the
power and control system predictable enough that the rest of the platform can build around it.

## Scope

- **Battery management system** — cell configuration, protection strategy, monitoring and the
  safety envelope the rest of the platform operates inside.
- **Power distribution** — regulated rails for compute and sensing, high-current paths for the
  drivetrain and actuators, and clean separation between them.
- **PCB design** — schematic capture and layout for the subsystem boards, including the
  dual-stacked PCB architecture and dedicated power distribution board.
- **Electrical debugging** — bring-up procedure, fault isolation and the diagnosis of integration
  failures across subsystem boundaries.
- **Wiring architecture** — harness design, connector selection and strain relief for a platform
  that gets assembled and disassembled repeatedly.
- **System integration** — making the electrical, mechanical and software subsystems meet.
- **Closed-loop control** — integrating encoder and position feedback into drivetrain, steering
  and arm control systems.
- **Review and mentoring** — running design reviews and bringing junior members up to speed.

## Architecture

The rover electrical system is organised around a distributed **power, control, actuation and
feedback architecture**, with dedicated interfaces for each major electromechanical subsystem.

At the core is a **dual-stacked PCB architecture**, combining the main control and interface
electronics with a dedicated **Power Distribution PCB**. The architecture separates low-voltage
control and sensing from high-current power distribution while providing a common electrical
backbone for the rover.

### Power & Safety

The main battery feeds the **Power Distribution PCB**, which distributes power to the drivetrain,
actuators and electronics. A dedicated **smart relay mechanism** provides the master power and
safety interlock for the entire rover.

The master power system uses **two relays** to control the complete rover power path. Following
a kill event, the system must first be **un-killed** and then require a deliberate **pushbutton
input** before the rover can be powered on again. This creates a controlled power-up sequence
and prevents the rover from automatically re-energising when the kill switch is released.

### Drive System

The drivetrain uses **Cytron motor drivers** controlled by the main embedded control system.
Each drive motor is equipped with an **incremental encoder**, providing feedback for closed-loop
motor control.

The encoder feedback is used in a **PID control loop**, allowing the system to regulate drive
motor speed and behaviour against the commanded value while compensating for changes in load,
terrain and motor response.

Drive control path:

**Drive Command → PID Controller → Cytron Motor Driver → Drive Motor → Incremental Encoder → Feedback**

### Steering System

The rover uses **absolute encoders** for position feedback on both the **pivot steering** and
**Ackermann steering** mechanisms.

Unlike incremental feedback, absolute position feedback provides the actual steering position
directly, allowing the controller to determine the steering state without relying on accumulated
encoder counts or requiring the system to reconstruct its position from previous movement.

This provides a reliable feedback layer for steering control and allows the mechanical steering
systems to be integrated cleanly with the higher-level rover control architecture.

### Arm & Actuation

The robotic arm uses **linear actuators with potentiometer feedback** for position measurement.
The potentiometer feedback allows the controller to determine the actual actuator position and
use it for controlled arm movement.

Rather than relying only on actuator travel time, the feedback system allows the arm to operate
based on measured position.

Arm control path:

**Position Command → Controller → Actuator Driver → Linear Actuator → Potentiometer → Position Feedback**

### System Integration

The resulting architecture can be viewed as four interconnected layers:

- **Power layer** — battery, Bucks, power distribution and master safety switching.
- **Control layer** — control PCB, Esp32 and subsystem interfaces.
- **Actuation layer** — Cytron motor drivers, drive motors, steering mechanisms and linear actuators.
- **Feedback layer** — incremental encoders, absolute encoders and potentiometer-based position feedback.

The goal of the architecture is to keep the drivetrain, steering and arm systems modular enough
to be developed and tested independently while still operating as a single integrated rover.
This approach also simplifies subsystem bring-up, fault isolation, debugging and integration across
the mechanical, electrical and software teams.

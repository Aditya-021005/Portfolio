---
title: IGCAR Turbidity Sensor System
tagline: Bare-metal AVR instrumentation with a custom optical front end.
summary: >-
  A custom embedded turbidity measurement system for fluid analysis, built around a bare-metal
  ATmega microcontroller and a purpose-designed PCB with a TSL235R light-to-frequency sensor and
  precision LED emitter.
year: '2024'
role: Firmware, PCB design, optical front end
status: Shipped
category: Instrumentation
featured: false
order: 5
tags:
  - PCB Design
  - Bare-Metal AVR
  - Sensor Instrumentation
  - Environmental Monitoring
highlights:
  - { value: 'Bare-metal', label: 'No framework, no HAL' }
  - { value: 'TSL235R', label: 'Light-to-frequency sensor' }
  - { value: 'Custom', label: 'PCB and optical path' }
stack:
  hardware:
    - Bare-metal ATmega MCU
    - Custom PCB
    - TSL235R light-to-frequency sensor
    - Precision LED emitter
    - Power regulation circuitry
  software:
    - Embedded C (register level)
    - Hardware timer capture
    - Frequency measurement algorithm
    - Calibration routines
  tools:
    - Analog front-end design
    - Optical path design
    - Noise reduction techniques
    - Sensor calibration against references
cover: /images/igcar-turbidity/01.jpg
# Documentation CTA — drop the report at public/files/igcar-turbidity-report.pdf
# and uncomment these two lines to show a download button on the project page.
# downloads:
#   - { label: "Technical report (PDF)", href: /files/igcar-turbidity-report.pdf, icon: pdf }
gallery:
  - { src: /images/igcar-turbidity/01.jpg, alt: "Enclosed turbidity instrument measuring a sample", caption: "Reading 7619 NTU with the optical probe in a beaker", span: wide }
  - { src: /images/igcar-turbidity/02.jpg, alt: "IGCAR turbidity measurement system", span: normal }
  - { src: /images/igcar-turbidity/03.jpg, alt: "Turbidity instrument — detail", span: normal }
  - { src: /images/igcar-turbidity/04.jpg, alt: "Turbidity instrument — detail", span: normal }
  - { src: /images/igcar-turbidity/05.jpg, alt: "Turbidity instrument — detail", span: normal }
---

## Overview

Turbidity — the cloudiness of a fluid caused by suspended particles — is measured optically: shine
a known light through a sample and measure how much makes it to a detector. Doing that *accurately*
is an exercise in controlling everything except the thing you're measuring.

This instrument was developed at IGCAR around a bare-metal ATmega, a custom PCB, and a TSL235R
light-to-frequency converter paired with a precision LED emitter.

## Problem statement

The measurement is only as good as its weakest link, and there are several candidates: LED output
drift, ambient light leaking into the optical path, detector noise, supply ripple modulating the
emitter, and timing error in the frequency measurement itself. The design had to attack all of
them.

## Why light-to-frequency

The TSL235R outputs a **square wave whose frequency is proportional to irradiance**, rather than
an analog voltage. That choice removes a whole class of problems:

- No ADC, so no ADC noise, reference drift or resolution ceiling
- The signal is digital by the time it leaves the sensor — immune to pickup along the trace
- Measurement precision becomes a function of the timing hardware, which on an ATmega is excellent

The cost is that the firmware now has to measure frequency well.

## Firmware

Written **bare-metal in C**, directly against the ATmega registers — no Arduino framework, no HAL.

The core of it is the hardware timer:

- Timer capture used to measure the sensor period, rather than counting edges in software
- Interrupt-driven capture so measurement is not affected by whatever the main loop is doing
- Averaging over multiple periods to trade response time for resolution, chosen deliberately
- Careful handling of timer overflow, the classic source of intermittent wrong readings

Working at register level was the right call here: the whole instrument is one peripheral used
precisely, and the abstraction layers would have hidden exactly the details that matter.

## Hardware & optical design

**Optical path.** Emitter and detector geometry defines what you are actually measuring —
transmitted light, scattered light, or an unrepeatable mix of both. The path was designed to fix
that geometry and to exclude ambient light, since a measurement that changes when someone turns on
the room lights is not a measurement.

**Analog front end and power.** The LED emitter needs a stable drive current: ripple on the
emitter supply appears directly as ripple in the reading. Regulation and decoupling were designed
around that requirement.

**PCB layout.** The sensitive optical section was kept away from switching and digital noise, with
attention to return paths and to keeping the sensor's output trace short.

## Calibration

Raw frequency is not turbidity. The system was calibrated against reference standards to build the
mapping from measured frequency to turbidity units, which also exposes the non-linear region at
the extremes of the range where the relationship stops behaving.

## Challenges

- **Ambient light immunity** — solved mechanically in the optical path rather than in firmware.
- **Timer overflow handling** — an easy bug to write and a hard one to see, because it only
  corrupts occasional readings.
- **Supply-borne noise** — traced to the emitter drive and fixed at the regulator rather than
  filtered out downstream.

## Skills demonstrated

- Embedded C and AVR register-level programming
- Optical instrumentation and analog front-end design
- Precision frequency measurement
- Sensor interfacing and calibration
- Low-noise PCB design

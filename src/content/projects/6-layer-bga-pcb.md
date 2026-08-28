---
title: 6-Layer BGA Sensor-Fusion Controller
summary: A compact 30 × 30 mm, 6-layer high-density PCB designed around a BGA MCU, IMU, SPI NOR flash, USB-C and SWD debugging.
year: '2026'
category: PCB Design
tags: [PCB Design, BGA, KiCad, STM32, HDI, Embedded Systems]
role: Hardware / PCB Design
status: In Development
featured: true
order: 3
cover: /images/3DView.jpg
highlights:
  - { value: '30 × 30 mm', label: 'Form factor' }
  - { value: '6-layer', label: 'PCB architecture' }
  - { value: 'BGA', label: 'MCU package' }
  - { value: 'HDI', label: 'Routing approach' }
  - { value: 'USB 2.0', label: 'High-speed interface' }
  - { value: 'SWD', label: 'Debug interface' }
stack:
  hardware:
    - STM32 BGA microcontroller
    - LSM6DS3TR-C 6-axis IMU
    - SPI NOR Flash
    - USB-C interface
    - Tag-Connect SWD interface
  software:
    - Embedded firmware
    - SPI sensor and flash interfaces
    - USB 2.0 interface
  tools:
    - KiCad
    - BGA escape routing
    - Multilayer PCB design
    - Design-rule checking
gallery:
  - { src: /images/schematic.jpg, alt: "PCB schematic", caption: "System schematic", span: wide }
  - { src: /images/PCB2.png, alt: "PCB front layout", caption: "Top-layer PCB layout", span: wide }
  - { src: /images/PCB1.jpg, alt: "BGA routing", caption: "BGA escape routing", span: wide }
  - { src: /images/3DView.jpg, alt: "3D PCB render", caption: "3D board render", span: normal }
---

## Overview

A compact high-density embedded controller designed specifically to explore professional multilayer PCB design, BGA routing, dense component placement and signal/power integrity within a constrained 30 × 30 mm form factor.

The board combines a BGA microcontroller, inertial sensing, external SPI flash, USB connectivity and SWD debugging into a six-layer architecture.

## Design Objectives

The primary objective was to learn and apply the design techniques required for compact professional electronics rather than simply building another development-board-style PCB.

The design focuses on:

- BGA footprint verification
- High-density component placement
- BGA escape routing
- Multilayer routing
- Power distribution
- Ground-plane management
- USB 2.0 routing
- SWD programming and debugging
- Compact mechanical packaging

## Major Hardware

### MCU

The main processor is an STM32 microcontroller in a BGA package.

The BGA package significantly increases routing density compared with conventional QFP/QFN packages and makes escape routing and layer planning important parts of the design.

### IMU

The board uses an LSM6DS3TR-C 6-axis inertial measurement unit.

It provides:

- 3-axis accelerometer
- 3-axis gyroscope
- SPI communication

### External Flash

A W25Q-series SPI NOR Flash device provides non-volatile external storage for firmware data, configuration or application data.

### USB-C

USB-C provides the external USB interface and power connection.

The USB 2.0 D+ and D− differential pair is routed as a controlled high-speed signal path.

### Debug Interface

A Tag-Connect SWD interface provides programming and debugging access without requiring a large permanent connector.

## PCB Architecture

The board is constrained to a 30 × 30 mm footprint and uses six copper layers to provide enough routing and power distribution capacity for the dense design.

The multilayer structure allows:

- Dedicated signal routing
- Ground reference planes
- Power distribution
- Shorter high-speed connections
- BGA escape routing

## BGA Routing

One of the main learning objectives was routing the BGA package.

The design explores:

- Fanout strategies
- Via placement
- Escape routing
- Layer transitions
- High-density routing
- Via-in-pad / microvia considerations where applicable

## Design Process

The board was developed through:

1. Component selection
2. Datasheet verification
3. Symbol verification
4. Footprint verification
5. Schematic development
6. Power-tree design
7. PCB floorplanning
8. BGA escape planning
9. Multilayer routing
10. Design-rule checking
11. 3D verification

## Engineering Challenges

The main challenge was fitting the required electronics into a 30 × 30 mm board while maintaining practical routing and manufacturability.

The BGA package introduced additional constraints around:

- Escape routing
- Via pitch
- Layer usage
- Component placement
- Power delivery
- Manufacturing capability

## What I Learned

This project significantly expanded my understanding of professional PCB design beyond conventional two-layer boards.

The major areas of learning were:

- BGA package design
- Multilayer stackups
- HDI concepts
- Signal integrity
- Power integrity
- Dense placement
- Manufacturing constraints
- PCB design verification

---
title: Precision Agricultural Drone & Mapping GUI
tagline: A 650 mm autonomous survey platform, sized and tuned from first principles.
summary: >-
  A complete autonomous agricultural UAV built for precision farming and field surveying —
  airframe selection, propulsion sizing, power budgeting, ArduPilot configuration and a custom
  ground-station GUI for live telemetry, mission control and logging.
year: '2025'
role: Systems design, build, flight tuning, GUI development
status: In Progress
category: UAV
featured: true
order: 2
tags:
  - UAV
  - Autonomous Systems
  - Precision Agriculture
  - ArduPilot
  - Geospatial
  - GUI Development
highlights:
  - { value: '650 mm', label: 'Foldable carbon frame' }
  - { value: '6S · 10 Ah', label: 'LiPo pack' }
  - { value: '15 in', label: 'Carbon propellers' }
  - { value: '320 KV', label: 'Brushless motors' }
stack:
  hardware:
    - Tarot Iron Man 650 foldable frame
    - Tarot 4114 320 KV brushless motors
    - 15-inch carbon fibre propellers
    - ReadyToSky 45 A BLHeli ESCs
    - Pixhawk 2.4.8 flight controller
    - GPS + compass module
    - 6S 10000 mAh LiPo battery
    - Telemetry radio link
    - FPV camera
    - Brushless camera gimbal
    - Power distribution board
  software:
    - ArduPilot (ArduCopter)
    - Mission Planner
    - MAVLink
    - Python ground-station GUI
    - OpenCV
  tools:
    - Thrust & payload calculation
    - Power budgeting
    - Centre-of-gravity planning
    - ESC & radio calibration
    - Failsafe configuration
cover: /images/agri-drone/01.jpg
---

## Overview

This is the most complete system I've built: an autonomous multirotor designed specifically for
precision agriculture — field surveying, repeatable flight lines over crops, and a data pipeline
that turns those flights into something an agronomist can act on.

It covers both halves of the problem. The **airframe** had to lift a camera payload for a useful
endurance and hold a stable line in wind. The **ground software** had to make missions repeatable
by someone who is not a drone pilot.

## Problem statement

Off-the-shelf agricultural drones are either expensive turnkey platforms or hobby airframes with
no survey workflow attached. I wanted a platform where every engineering decision — motor choice,
battery sizing, failsafe behaviour, mission structure — was mine to justify, and where the ground
station exposed exactly the telemetry that matters during a survey rather than a generic
autopilot GUI.

## Design process

### Sizing before buying

Propulsion came first. Working from a target all-up weight including camera and gimbal, I sized
the system for a comfortable thrust-to-weight ratio at hover rather than at maximum throttle —
hovering near full throttle leaves nothing for wind rejection or an aggressive waypoint turn.

That drove the chain backwards:

- **Motors** — Tarot 4114 at 320 KV, a low-KV motor suited to large, slow-turning props.
- **Propellers** — 15-inch carbon fibre, for efficiency at the hover RPM the low-KV motors want.
- **ESCs** — ReadyToSky 45 A BLHeli, chosen with headroom above the motors' continuous draw.
- **Battery** — 6S 10000 mAh LiPo, balancing endurance against the mass penalty of the pack.

### Power budgeting

The pack has to feed more than the motors: flight controller, GPS, telemetry radio, FPV camera and
the gimbal all draw from the same source. I budgeted each rail separately and sized the
distribution board and wiring for the motor current, not the average current — the peaks during an
aggressive correction are what melt connectors.

### Centre of gravity

On a foldable frame with a gimbal hanging below the nose, CG is not automatic. Battery position
was chosen to bring the CG onto the geometric centre with the payload fitted, then re-checked
after every hardware change. A drone that trims itself level in hover is a drone that isn't
burning current fighting its own layout.

## Firmware & configuration

The flight stack is ArduPilot on a Pixhawk 2.4.8, configured through Mission Planner.

- **Sensor calibration** — accelerometer, compass and radio calibration, with compass orientation
  verified against GPS heading rather than assumed.
- **Flight modes** — Stabilize and Alt Hold for bring-up, Loiter for position hold, Auto for
  waypoint missions, and RTL bound to a switch.
- **Failsafes** — battery failsafe with a staged response (warn, then RTL), radio failsafe, and a
  GPS-loss behaviour chosen deliberately rather than left at default.
- **Tuning** — progressive PID tuning starting from conservative gains, working up until the
  platform tracks a step input without oscillating.

> Bring-up order matters. Props off, then motor direction, then radio, then a tethered hover, then
> a low-altitude Loiter, then the first Auto mission. Skipping a step is how airframes get broken.

## Ground-station GUI

Mission Planner is comprehensive but general-purpose. For survey work I built a focused ground
station over MAVLink:

- Live telemetry dashboard — attitude, altitude, groundspeed, satellite count, link quality
- GPS coordinate readout with waypoint visualisation on a field map
- Current flight mode and mission progress at a glance
- Battery monitoring with per-cell voltage and consumed capacity
- Mission controls — upload, start, pause and RTL
- Flight data logging for post-processing
- Live FPV feed embedded alongside the telemetry

The design goal was that an operator should be able to answer "is this survey going correctly?"
without reading a single number twice.

## Challenges

**Vibration into the IMU.** Large props on a foldable frame put real vibration into the flight
controller. Resolved with damped controller mounting and by balancing props before flight —
visible in the logs as a tightening of the accelerometer traces.

**Compass interference.** High motor currents running near the GPS/compass mast skew heading.
Fixed by routing high-current leads away from the mast and re-running the compass calibration in
place, with the full payload fitted.

**Endurance versus payload.** Every gram of camera and gimbal is endurance spent. This is a
straight trade, and the honest answer was to fix the mission length first and let that constrain
the payload — not the other way round.

## Lessons learned

- Size the propulsion system on paper before ordering anything. Every component after the motor
  choice is downstream of it.
- Failsafes are a design input, not a settings screen you fill in at the end.
- A ground station earns its keep the first time it tells you something is wrong *before* the
  airframe does.

## Future improvements

The airframe is the platform; the data pipeline is where the value is. Planned work:

- Orthomosaic generation from geotagged survey imagery
- Automated geotagging tied to camera trigger events in the flight log
- NDVI and multispectral analysis for crop health
- Thermal imaging integration for irrigation and stress mapping
- AI-based crop health assessment on captured imagery
- Automated agricultural reporting from a completed survey flight

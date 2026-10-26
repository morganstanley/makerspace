---
template: exercise
title: 'Troubleshooting'
level: 1
exercise: 6
category: Cutebot
tags: ['MakeCode', 'Cutebot', 'micro:bit']
description: The problems you will see most, and what to check first
---


The problems you will see most, and what to check first.

- **No Cutebot Pro drawer**: Extension not added to this project, or plain “Cutebot” added. **Fix:** Extensions → search `cutebot pro` → ELECFREAKS Cutebot Pro.

- **Robot doesn’t move**: Power switch off, flat battery, or a speed too low to turn the wheels. **Fix:** Switch on, check battery, use 30 % or more.

- **Robot moves on its own**: Driving code in _on start_ or _forever_ runs as soon as it powers on. **Fix:** Keep it on the floor, or start the code from button A.

- **Robot never stops**: No stop block: motors keep the last speed. **Fix:** Add **set all wheel to stop immediately**.

- **Robot drives in a curve**: Wheels differ slightly, or one speed is mistyped. **Fix:** Check both numbers. Small curves are normal.

- **Sonar always shows 0**: Nothing within range, or pointing at something soft. **Fix:** Hold a flat book 10–50 cm in front.

- **Reacts slowly**: **show icon** / **show number** takes ~0.5 s inside a driving loop. **Fix:** Use the headlights to show state instead.

- **Download doesn’t work**: micro:bit not paired, or the file went to Downloads. **Fix:** Pair via ⋯ → Connect device, or drag the .hex onto the MICROBIT drive.

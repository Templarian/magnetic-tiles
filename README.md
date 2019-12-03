# Magnetic Tiles

View the [site](https://templarian.github.io/magnetic-tiles/) to learn if this tile system might work for your dungeon maps.

## Getting Started

The following tiles will allow for basic creation of a map. Assuming these work for your purpose move on to the other files.

| File | Magnet Size | Required | Optional |
| ---- | --- | --- | --- |
| `base.stl` | 6x6x2 Cylinder | 12 | 4 |
| `top.stl` | 6x6x2 Cylinder | 0 | 0 / 2 / 4<sup>1</sup> |
| `tile-blank.stl` | n/a | - | - |
| `rig.stl`<sup>2</sup> | n/a | - | - |
| `wall-full.stl` | 4x4x4 Cylinder | 1 | 0 |
| `wall-half.stl` | 4x4x4 Cylinder | 1 | 0 |
| `wall-quarter.stl` | 4x4x4 Cylinder | 1 | 0 |
| `wall-corner.stl` | 4x4x4 Cylinder | 2 | 0 |
| `wall-end.stl` | 4x4x4 Cylinder | 3 | 0 |

<sub>1</sub> Base and Top click together, but for a more secure fit 2 diagonal magnets or all 4 can be used.

<sub>2</sub> Use `rig` to align the `top` and `tile-*` tiles. Place four drops of super glue to adhere the two pieces applying pressure.

### Printer Settings

- Quality
  - Layer Height = `0.2mm`
- Shell
  - Wall Thickness = `1.2mm`
    - Wall Line Count = `3`
  - Top/Buttom Thickness = `0.8mm`
    - Top Thickness = `0.8mm`
      - Top Layers = `4`
    - Bottom Thickness = `0.8mm`
      - Bottom Layers `4`
- Infill
  - Grid recommended
- Build Plate Adhesion
  - Build Plate Adhesion Type = `Raft`
  - Raft Extra Margin = `3mm`

> Rafts are highly preferred for walls, but improve surface quality for all prints.

## Frequently Asked Questions

Where to purchase magnets?

> Amazon, etc...

What kind of 3D printer is required?

> Any consumer grade printer such as an Ender 3 will work fine.

How do miniatures magnet into place?

> Place a magnet perferably 6x6x2mm in the center of the base.

Why?

> Magnets.
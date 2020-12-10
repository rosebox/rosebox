# Chagngelog

## [0.4.51] - 2020-12-10

### CHANGED
- Made `flex` more permissive so that now it supports a two-values syntax (pairs).

## [0.4.5] - 2020-12-10

### Added
- `borderImage`
- `borderImageSlice`
- `borderImageWidth`
- `borderImageRepeat`
- `borderImageSource`
- `borderImageOutset`
- `borderCollapse`
- `borderImageSpace`

### CHANGED
- Use `react-jss` instead of `@material-ui/styles`
- `makeStylesRB` to `createUseStyles`

## [0.4.4] - 2020-12-08

### Added
- `justifySelf`
- `justifyItems`

### Fixed
- A bug in `justifyContent`'s type

## [0.4.2] - 2020-12-07

### Added
- Safe support for untyped props [see here](https://github.com/hugonteifeh/rosebox/issues/111).

## [0.4.18] - 2020-12-07

### Changed
- Type `Animation`.

## [0.4.18] - 2020-12-07

### Changed
- Signature for animation.
- Annotations for some properties.
- Type parameter for Duration

## [0.4.17] - 2020-12-07

### Fixed
- Type-guards for `HEX` and `HSLA`

## [0.4.0] - 2020-12-05

### Added
- 🎉 🎉🎉 Support for CSS-classes using `@material-ui/styles` and `jss`.
- Mathematical functions for Duration and Length (`add`, `sub`, `mult`, `div`) and `eq`.

## [0.3.97] - 2020-11-30

### Changed
- The `Length` type is now more fine-grained; now we have `Length<LengthUnit>`
- The `Duration` type is now more fine-grained; now we have `Duration<DurationUnit>`
- The `Calculation` type is now more fine-grained; now we have `Calculation<CalcOperation>`
- The `Angle` type is now more fine-grained; now we have `Angle<AngleUnit>`
- The `Gradient` type is now more fine-grained; now we have `Gradient<GradientType>`

## [0.3.89] - 2020-11-23
- Implemented outlineWidth, outlineStyle, outlineColor and outline.

## [0.3.88] - 2020-11-20
- Added support for linearGradient (with the value constructor linGrad()).

## [0.3.6] - 2020-09-13

- Added support for env()
- Added calc() support for more properties.
- Readded support for 2-values and 3-values syntax for padding and margin.
- Added missing value for border.
- Update the names for calc functions from (add, subs, multi, div) to (cadd, csubs, cmult, cdiv) in repsective order.

## [0.3.6] - 2020-08-27

- Added textOrientation
- Added textGroupAlign
- Added textJustify
- Added textIndent
- Added textEmphasisColor
- Added textEmphasisSkip
- Added textEmphasisPosition
- Update syntax for textTransform

## [0.3.52] - 2020-08-13

- Added a `darken` function for colors.
- Added a `lighten` function for colors.

## [0.1.8] - 2020-03-08

- Update the type signature for 'style'.
- Added 'style2'.

## [0.1.5] - 2020-03-07

### Added

- The "borderTopColor" declaration function
- The "borderRightColor" declaration function
- The "borderBottomColor" declaration function
- The "borderLeftColor" declaration function
- The "borderColor" declaration function
- The "borderTopWidth" declaration function
- The "borderRightWidth" declaration function
- The "borderBottomWidth" declaration function
- The "borderLeftWidth" declaration function
- The "borderWidth" declaration function
- The "borderTopRightRadius" declaration function
- The "borderBottomRightRadius" declaration function
- The "borderBottomLeftRadius" declaration function
- The "borderTopLeftRadius" declaration function
- The "borderRadius" declaration function
- The "borderTopStyle" declaration function
- The "borderRightStyle" declaration function
- The "borderBottomStyle" declaration function
- The "borderLeftRadius" declaration function
- The "borderStyle" declaration function
- The "borderTop" declaration function
- The "borderRight" declaration function
- The "borderBottom" declaration function
- The "borderLeft" declaration function
- The "border" declaration function
- The "overflowX" declaration function
- The "overflowY" declaration function
- The "overflow" declaration function
- The "textTransform" declaration function
- The "textDecoration" declaration function
- The "textDecorationStyle" declaration function
- The "textDecorationLine" declaration function
- The "textDecorationColor" declaration function
- The "textAlign" declaration function
- The "letterSpacing" declaration function
- The "lineHeight" declaration function
- The "visibility" declaration function

const AnimatablePropArray = [
    'all',
    'backdropFilter',
    'background',
    'backgroundColor',
    'backgroundPosition',
    'backgroundSize',
    'blockSize',
    'border',
    'borderBottom',
    'borderBottomColor',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomWidth',
    'borderColor',
    'borderEndEndRadius',
    'borderEndStartRadius',
    'borderImageOutset',
    'borderImageSlice',
    'borderImageWidth',
    'borderInlineEnd',
    'borderInlineEndColor',
    'borderInlineEndWidth',
    'borderInlineStart',
    'borderInlineStartColor',
    'borderInlineStartWidth',
    'borderLeft',
    'borderLeftColor',
    'borderLeftWidth',
    'borderRadius',
    'borderRight',
    'borderRightColor',
    'borderRightWidth',
    'borderStartEndRadius',
    'borderStartStartRadius',
    'borderTop',
    'borderTopColor',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopWidth',
    'borderWidth',
    'bottom',
    'boxShadow',
    'caretColor',
    'clip',
    'clipPath',
    'color',
    'columnCount',
    'columnGap',
    'columnRule',
    'columnRuleColor',
    'columnRuleWidth',
    'columnWidth',
    'columns',
    'filter',
    'flex',
    'flexBasis',
    'flexGrow',
    'flexShrink',
    'font',
    'fontSize',
    'fontSizeAdjust',
    'fontStretch',
    'fontVariationSettings',
    'fontWeight',
    'gap',
    'gridColumnGap',
    'gridGap',
    'gridRowGap',
    'gridTemplateColumns',
    'gridTemplateRows',
    'height',
    'inlineSize',
    'inset',
    'insetBlock',
    'insetBlockEnd',
    'insetBlockStart',
    'insetInline',
    'insetInlineEnd',
    'insetInlineStart',
    'left',
    'letterSpacing',
    'lineClamp',
    'lineHeight',
    'margin',
    'marginBlockEnd',
    'marginBlockStart',
    'marginBottom',
    'marginInlineEnd',
    'marginInlineStart',
    'marginLeft',
    'marginRight',
    'marginTop',
    'mask',
    'maskBorder',
    'maskPosition',
    'maskSize',
    'maxBlockSize',
    'maxHeight',
    'maxInlineSize',
    'maxLines',
    'maxWidth',
    'minBlockSize',
    'minHeight',
    'minInlineSize',
    'minWidth',
    'objectPosition',
    'offset',
    'offsetAnchor',
    'offsetDistance',
    'offsetPath',
    'offsetPosition',
    'offsetRotate',
    'opacity',
    'order',
    'outline',
    'outlineColor',
    'outlineOffset',
    'outlineWidth',
    'padding',
    'paddingBlockEnd',
    'paddingBlockStart',
    'paddingBottom',
    'paddingInlineEnd',
    'paddingInlineStart',
    'paddingLeft',
    'paddingRight',
    'paddingTop',
    'perspective',
    'perspectiveOrigin',
    'right',
    'rotate',
    'rowGap',
    'scale',
    'scrollMargin',
    'scrollMarginBlock',
    'scrollMarginBlockEnd',
    'scrollMarginBlockStart',
    'scrollMarginBottom',
    'scrollMarginInline',
    'scrollMarginInlineEnd',
    'scrollMarginInlineStart',
    'scrollMarginLeft',
    'scrollMarginRight',
    'scrollMarginTop',
    'scrollPadding',
    'scrollPaddingBlock',
    'scrollPaddingBlockEnd',
    'scrollPaddingBlockStart',
    'scrollPaddingBottom',
    'scrollPaddingInline',
    'scrollPaddingInlineEnd',
    'scrollPaddingInlineStart',
    'scrollPaddingLeft',
    'scrollPaddingRight',
    'scrollPaddingTop',
    'scrollSnapCoordinate',
    'scrollSnapDestination',
    'scrollbarColor',
    'shapeImageThreshold',
    'shapeMargin',
    'shapeOutside',
    'tabSize',
    'textDecoration',
    'textDecorationColor',
    'textDecorationThickness',
    'textEmphasis',
    'textEmphasisColor',
    'textIndent',
    'textShadow',
    'textUnderlineOffset',
    'top',
    'transform',
    'transformOrigin',
    'translate',
    'verticalAlign',
    'visibility',
    'width',
    'wordSpacing',
    'zIndex',
    'zoom',
] as const

export type AnimatableProperty = typeof AnimatablePropArray[number]

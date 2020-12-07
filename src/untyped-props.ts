import { ValueOrFunc } from './core'

export type UntypedProps = {
    /** @deprecated */
    _alignContent: string
    /** @deprecated */
    _alignItems: string
    /** @deprecated */
    _alignSelf: string
    _alignmentBaseline: string
    _all: string
    /** @deprecated */
    _animation: string
    /** @deprecated */
    _animationDelay: string
    /** @deprecated */
    _animationDirection: string
    /** @deprecated */
    _animationDuration: string
    /** @deprecated */
    _animationFillMode: string
    /** @deprecated */
    _animationIterationCount: string
    /** @deprecated */
    _animationName: string
    /** @deprecated */
    _animationPlayState: string
    /** @deprecated */
    _animationTimingFunction: string
    _appearance: string
    _aspectRatio: string
    _azimuth: string
    /** @deprecated */
    _backfaceVisibility: string
    _background: string
    _backgroundAttachment: string
    _backgroundBlendMode: string
    _backgroundClip: string
    /** @deprecated */
    _backgroundColor: string
    /** @deprecated */
    _backgroundImage: string
    _backgroundOrigin: string
    /** @deprecated */
    _backgroundPosition: string
    _backgroundRepeat: string
    /** @deprecated */
    _backgroundSize: string
    _baselineShift: string
    _baselineSource: string
    _blockEllipsis: string
    _blockSize: string
    _blockStep: string
    _blockStepAlign: string
    _blockStepInsert: string
    _blockStepRound: string
    _blockStepSize: string
    _bookmarkLabel: string
    _bookmarkLevel: string
    _bookmarkState: string
    /** @deprecated */
    _border: string
    _borderBlock: string
    _borderBlockColor: string
    _borderBlockEnd: string
    _borderBlockEndColor: string
    _borderBlockEndStyle: string
    _borderBlockEndWidth: string
    _borderBlockStart: string
    _borderBlockStartColor: string
    _borderBlockStartStyle: string
    _borderBlockStartWidth: string
    _borderBlockStyle: string
    _borderBlockWidth: string
    /** @deprecated */
    _borderBottom: string
    /** @deprecated */
    _borderBottomColor: string
    /** @deprecated */
    _borderBottomLeftRadius: string
    /** @deprecated */
    _borderBottomRightRadius: string
    /** @deprecated */
    _borderBottomStyle: string
    /** @deprecated */
    _borderBottomWidth: string
    _borderBoundary: string
    _borderCollapse: string
    /** @deprecated */
    _borderColor: string
    _borderEndEndRadius: string
    _borderEndStartRadius: string
    _borderImage: string
    _borderImageOutset: string
    _borderImageRepeat: string
    _borderImageSlice: string
    _borderImageSource: string
    _borderImageWidth: string
    _borderInline: string
    _borderInlineColor: string
    _borderInlineEnd: string
    _borderInlineEndColor: string
    _borderInlineEndStyle: string
    _borderInlineEndWidth: string
    _borderInlineStart: string
    _borderInlineStartColor: string
    _borderInlineStartStyle: string
    _borderInlineStartWidth: string
    _borderInlineStyle: string
    _borderInlineWidth: string
    /** @deprecated */
    _borderLeft: string
    /** @deprecated */
    _borderLeftColor: string
    /** @deprecated */
    _borderLeftStyle: string
    /** @deprecated */
    _borderLeftWidth: string
    /** @deprecated */
    _borderRadius: string
    /** @deprecated */
    _borderRight: string
    /** @deprecated */
    _borderRightColor: string
    /** @deprecated */
    _borderRightStyle: string
    /** @deprecated */
    _borderRightWidth: string
    _borderSpacing: string
    _borderStartEndRadius: string
    _borderStartStartRadius: string
    /** @deprecated */
    _borderStyle: string
    /** @deprecated */
    _borderTop: string
    /** @deprecated */
    _borderTopColor: string
    /** @deprecated */
    _borderTopLeftRadius: string
    /** @deprecated */
    _borderTopRightRadius: string
    /** @deprecated */
    _borderTopStyle: string
    /** @deprecated */
    _borderTopWidth: string
    /** @deprecated */
    _borderWidth: string
    /** @deprecated */
    _bottom: string
    _boxDecorationBreak: string
    /** @deprecated */
    _boxShadow: string
    /** @deprecated */
    _boxSizing: string
    _boxSnap: string
    _breakAfter: string
    _breakBefore: string
    _breakInside: string
    _captionSide: string
    _caret: string
    _caretColor: string
    _caretShape: string
    _chains: string
    _clear: string
    _clip: string
    _clipPath: string
    _clipRule: string
    /** @deprecated */
    _color: string
    _colorAdjust: string
    _colorInterpolationFilters: string
    _colorScheme: string
    _columnCount: string
    _columnFill: string
    _columnGap: string
    _columnRule: string
    _columnRuleColor: string
    _columnRuleStyle: string
    _columnRuleWidth: string
    _columnSpan: string
    _columnWidth: string
    _columns: string
    _contain: string
    _containIntrinsicSize: string
    _content: string
    _contentVisibility: string
    _continue: string
    _counterIncrement: string
    _counterReset: string
    _counterSet: string
    _cue: string
    _cueAfter: string
    _cueBefore: string
    _cursor: string
    _direction: string
    /** @deprecated */
    _display: string
    _dominantBaseline: string
    _elevation: string
    _emptyCells: string
    _fill: string
    _fillBreak: string
    _fillColor: string
    _fillImage: string
    _fillOpacity: string
    _fillOrigin: string
    _fillPosition: string
    _fillRepeat: string
    _fillRule: string
    _fillSize: string
    _filter: string
    /** @deprecated */
    _flex: string
    /** @deprecated */
    _flexBasis: string
    /** @deprecated */
    _flexDirection: string
    /** @deprecated */
    _flexFlow: string
    /** @deprecated */
    _flexGrow: string
    /** @deprecated */
    _flexShrink: string
    /** @deprecated */
    _flexWrap: string
    _float: string
    _floatDefer: string
    _floatOffset: string
    _floatReference: string
    _floodColor: string
    _floodOpacity: string
    _flow: string
    _flowFrom: string
    _flowInto: string
    _font: string
    /** @deprecated */
    _fontFamily: string
    _fontFeatureSettings: string
    /** @deprecated */
    _fontKerning: string
    _fontLanguageOverride: string
    /** @deprecated */
    _fontOpticalSizing: string
    _fontPalette: string
    /** @deprecated */
    _fontSize: string
    /** @deprecated */
    _fontSizeAdjust: string
    /** @deprecated */
    _fontStretch: string
    /** @deprecated */
    _fontStyle: string
    /** @deprecated */
    _fontSynthesis: string
    /** @deprecated */
    _fontSynthesisSmallCaps: string
    /** @deprecated */
    _fontSynthesisStyle: string
    /** @deprecated */
    _fontSynthesisWeight: string
    _fontVariant: string
    _fontVariantAlternates: string
    /** @deprecated */
    _fontVariantCaps: string
    _fontVariantEastAsian: string
    /** @deprecated */
    _fontVariantEmoji: string
    /** @deprecated */
    _fontVariantLigatures: string
    /** @deprecated */
    _fontVariantNumeric: string
    /** @deprecated */
    _fontVariantPosition: string
    /** @deprecated */
    _fontVariationSettings: string
    /** @deprecated */
    _fontWeight: string
    _footnoteDisplay: string
    _footnotePolicy: string
    _forcedColorAdjust: string
    _gap: string
    _glyphOrientationVertical: string
    _grid: string
    _gridArea: string
    _gridAutoColumns: string
    _gridAutoFlow: string
    _gridAutoRows: string
    _gridColumn: string
    _gridColumnEnd: string
    _gridColumnStart: string
    _gridRow: string
    _gridRowEnd: string
    _gridRowStart: string
    _gridTemplate: string
    _gridTemplateAreas: string
    _gridTemplateColumns: string
    _gridTemplateRows: string
    _hangingPunctuation: string
    /** @deprecated */
    _height: string
    _hyphenateCharacter: string
    _hyphenateLimitChars: string
    _hyphenateLimitLast: string
    _hyphenateLimitLines: string
    _hyphenateLimitZone: string
    _hyphens: string
    _imageOrientation: string
    _imageRendering: string
    _imageResolution: string
    _initialLetter: string
    _initialLetterAlign: string
    _initialLetterWrap: string
    _inlineSize: string
    _inlineSizing: string
    _inset: string
    _insetBlock: string
    _insetBlockEnd: string
    _insetBlockStart: string
    _insetInline: string
    _insetInlineEnd: string
    _insetInlineStart: string
    _isolation: string
    /** @deprecated */
    _justifyContent: string
    _justifyItems: string
    _justifySelf: string
    _leadingTrim: string
    /** @deprecated */
    _left: string
    /** @deprecated */
    _letterSpacing: string
    _lightingColor: string
    _lineBreak: string
    _lineClamp: string
    _lineGrid: string
    /** @deprecated */
    _lineHeight: string
    _lineHeightStep: string
    _linePadding: string
    _lineSnap: string
    _listStyle: string
    _listStyleImage: string
    _listStylePosition: string
    _listStyleType: string
    /** @deprecated */
    _margin: string
    _marginBlock: string
    _marginBlockEnd: string
    _marginBlockStart: string
    /** @deprecated */
    _marginBottom: string
    _marginBreak: string
    _marginInline: string
    _marginInlineEnd: string
    _marginInlineStart: string
    /** @deprecated */
    _marginLeft: string
    /** @deprecated */
    _marginRight: string
    /** @deprecated */
    _marginTop: string
    _marginTrim: string
    _marker: string
    _markerEnd: string
    _markerKnockoutLeft: string
    _markerKnockoutRight: string
    _markerMid: string
    _markerPattern: string
    _markerSegment: string
    _markerSide: string
    _markerStart: string
    _mask: string
    _maskBorder: string
    _maskBorderMode: string
    _maskBorderOutset: string
    _maskBorderRepeat: string
    _maskBorderSlice: string
    _maskBorderSource: string
    _maskBorderWidth: string
    _maskClip: string
    _maskComposite: string
    _maskImage: string
    _maskMode: string
    _maskOrigin: string
    _maskPosition: string
    _maskRepeat: string
    _maskSize: string
    _maskType: string
    _maxBlockSize: string
    _maxHeight: string
    _maxInlineSize: string
    _maxLines: string
    /** @deprecated */
    _maxWidth: string
    _minBlockSize: string
    /** @deprecated */
    _minHeight: string
    _minInlineSize: string
    _minIntrinsicSizing: string
    _minWidth: string
    _mixBlendMode: string
    _navDown: string
    _navLeft: string
    _navRight: string
    _navUp: string
    _objectFit: string
    _objectPosition: string
    _offset: string
    _offsetAnchor: string
    _offsetDistance: string
    _offsetPath: string
    _offsetPosition: string
    _offsetRotate: string
    /** @deprecated */
    _opacity: string
    /** @deprecated */
    _order: string
    _orphans: string
    /** @deprecated */
    _outline: string
    /** @deprecated */
    _outlineColor: string
    _outlineOffset: string
    /** @deprecated */
    _outlineStyle: string
    /** @deprecated */
    _outlineWidth: string
    /** @deprecated */
    _overflow: string
    _overflowAnchor: string
    _overflowBlock: string
    _overflowClipMargin: string
    _overflowInline: string
    _overflowWrap: string
    /** @deprecated */
    _overflowX: string
    /** @deprecated */
    _overflowY: string
    _overscrollBehavior: string
    _overscrollBehaviorBlock: string
    _overscrollBehaviorInline: string
    _overscrollBehaviorX: string
    _overscrollBehaviorY: string
    /** @deprecated */
    _padding: string
    _paddingBlock: string
    _paddingBlockEnd: string
    _paddingBlockStart: string
    /** @deprecated */
    _paddingBottom: string
    _paddingInline: string
    _paddingInlineEnd: string
    _paddingInlineStart: string
    /** @deprecated */
    _paddingLeft: string
    /** @deprecated */
    _paddingRight: string
    /** @deprecated */
    _paddingTop: string
    _page: string
    _pageBreakAfter: string
    _pageBreakBefore: string
    _pageBreakInside: string
    _pause: string
    _pauseAfter: string
    _pauseBefore: string
    _perspective: string
    _perspectiveOrigin: string
    _pitch: string
    _pitchRange: string
    _placeContent: string
    _placeItems: string
    _placeSelf: string
    _playDuring: string
    /** @deprecated */
    _position: string
    _propertyName: string
    _quotes: string
    _regionFragment: string
    _resize: string
    _rest: string
    _restAfter: string
    _restBefore: string
    _richness: string
    /** @deprecated */
    _right: string
    _rotate: string
    _rowGap: string
    _rubyAlign: string
    _rubyMerge: string
    _rubyOverhang: string
    _rubyPosition: string
    _running: string
    _scale: string
    _scrollBehavior: string
    _scrollMargin: string
    _scrollMarginBlock: string
    _scrollMarginBlockEnd: string
    _scrollMarginBlockStart: string
    _scrollMarginBottom: string
    _scrollMarginInline: string
    _scrollMarginInlineEnd: string
    _scrollMarginInlineStart: string
    _scrollMarginLeft: string
    _scrollMarginRight: string
    _scrollMarginTop: string
    _scrollPadding: string
    _scrollPaddingBlock: string
    _scrollPaddingBlockEnd: string
    _scrollPaddingBlockStart: string
    _scrollPaddingBottom: string
    _scrollPaddingInline: string
    _scrollPaddingInlineEnd: string
    _scrollPaddingInlineStart: string
    _scrollPaddingLeft: string
    _scrollPaddingRight: string
    _scrollPaddingTop: string
    _scrollSnapAlign: string
    _scrollSnapStop: string
    _scrollSnapType: string
    _scrollbarColor: string
    _scrollbarGutter: string
    _scrollbarWidth: string
    _shapeImageThreshold: string
    _shapeInside: string
    _shapeMargin: string
    _shapeOutside: string
    _spatialNavigationAction: string
    _spatialNavigationContain: string
    _spatialNavigationFunction: string
    _speak: string
    _speakAs: string
    _speakHeader: string
    _speakNumeral: string
    _speakPunctuation: string
    _speechRate: string
    _stress: string
    _stringSet: string
    _stroke: string
    _strokeAlign: string
    _strokeAlignment: string
    _strokeBreak: string
    _strokeColor: string
    _strokeDashCorner: string
    _strokeDashJustify: string
    _strokeDashadjust: string
    _strokeDasharray: string
    _strokeDashcorner: string
    _strokeDashoffset: string
    _strokeImage: string
    _strokeLinecap: string
    _strokeLinejoin: string
    _strokeMiterlimit: string
    _strokeOpacity: string
    _strokeOrigin: string
    _strokePosition: string
    _strokeRepeat: string
    _strokeSize: string
    _strokeWidth: string
    _tabSize: string
    _tableLayout: string
    /** @deprecated */
    _textAlign: string
    _textAlignAll: string
    _textAlignLast: string
    _textCombineUpright: string
    _textDecoration: string
    _textDecorationColor: string
    _textDecorationLine: string
    _textDecorationSkip: string
    _textDecorationSkipBox: string
    _textDecorationSkipInk: string
    _textDecorationSkipInset: string
    _textDecorationSkipSelf: string
    _textDecorationSkipSpaces: string
    _textDecorationStyle: string
    _textDecorationThickness: string
    _textEdge: string
    /** @deprecated */
    _textEmphasis: string
    /** @deprecated */
    _textEmphasisColor: string
    /** @deprecated */
    _textEmphasisPosition: string
    /** @deprecated */
    _textEmphasisSkip: string
    _textEmphasisStyle: string
    _textGroupAlign: string
    /** @deprecated */
    _textIndent: string
    /** @deprecated */
    _textJustify: string
    /** @deprecated */
    _textOrientation: string
    _textOverflow: string
    _textShadow: string
    _textSpaceCollapse: string
    _textSpaceTrim: string
    _textSpacing: string
    /** @deprecated */
    _textTransform: string
    /** @deprecated */
    _textUnderlineOffset: string
    /** @deprecated */
    _textUnderlinePosition: string
    /** @deprecated */
    _textWrap: string
    /** @deprecated */
    _top: string
    /** @deprecated */
    _transform: string
    /** @deprecated */
    _transformBox: string
    /** @deprecated */
    _transformOrigin: string
    /** @deprecated */
    _transformStyle: string
    /** @deprecated */
    _transition: string
    /** @deprecated */
    _transitionDelay: string
    /** @deprecated */
    _transitionDuration: string
    /** @deprecated */
    _transitionProperty: string
    /** @deprecated */
    _transitionTimingFunction: string
    /** @deprecated */
    _translate: string
    /** @deprecated */
    _unicodeBidi: string
    /** @deprecated */
    _userSelect: string
    /** @deprecated */
    _verticalAlign: string
    /** @deprecated */
    _visibility: string
    _voiceBalance: string
    _voiceDuration: string
    _voiceFamily: string
    _voicePitch: string
    _voiceRange: string
    /** @deprecated */
    _voiceRate: string
    /** @deprecated */
    _voiceStress: string
    /** @deprecated */
    _voiceVolume: string
    /** @deprecated */
    _volume: string
    /** @deprecated */
    _whiteSpace: string
    /** @deprecated */
    _widows: string
    /** @deprecated */
    _width: string
    /** @deprecated */
    _willChange: string
    _wordBoundaryDetection: string
    _wordBoundaryExpansion: string
    _wordBreak: string
    /** @deprecated */
    _wordSpacing: string
    _wordWrap: string
    _wrapAfter: string
    _wrapBefore: string
    _wrapFlow: string
    _wrapInside: string
    _wrapThrough: string
    /** @deprecated */
    _writingMode: string
    /** @deprecated */
    _zIndex: string
}

export type UntypedPropsJSS = {
    /** @deprecated */
    _alignContent: ValueOrFunc<string>
    /** @deprecated */
    _alignItems: ValueOrFunc<string>
    /** @deprecated */
    _alignSelf: ValueOrFunc<string>
    _alignmentBaseline: ValueOrFunc<string>
    _all: ValueOrFunc<string>
    /** @deprecated */
    _animation: ValueOrFunc<string>
    /** @deprecated */
    _animationDelay: ValueOrFunc<string>
    /** @deprecated */
    _animationDirection: ValueOrFunc<string>
    /** @deprecated */
    _animationDuration: ValueOrFunc<string>
    /** @deprecated */
    _animationFillMode: ValueOrFunc<string>
    /** @deprecated */
    _animationIterationCount: ValueOrFunc<string>
    /** @deprecated */
    _animationName: ValueOrFunc<string>
    /** @deprecated */
    _animationPlayState: ValueOrFunc<string>
    /** @deprecated */
    _animationTimingFunction: ValueOrFunc<string>
    _appearance: ValueOrFunc<string>
    _aspectRatio: ValueOrFunc<string>
    _azimuth: ValueOrFunc<string>
    /** @deprecated */
    _backfaceVisibility: ValueOrFunc<string>
    _background: ValueOrFunc<string>
    _backgroundAttachment: ValueOrFunc<string>
    _backgroundBlendMode: ValueOrFunc<string>
    _backgroundClip: ValueOrFunc<string>
    /** @deprecated */
    _backgroundColor: ValueOrFunc<string>
    /** @deprecated */
    _backgroundImage: ValueOrFunc<string>
    _backgroundOrigin: ValueOrFunc<string>
    /** @deprecated */
    _backgroundPosition: ValueOrFunc<string>
    _backgroundRepeat: ValueOrFunc<string>
    /** @deprecated */
    _backgroundSize: ValueOrFunc<string>
    _baselineShift: ValueOrFunc<string>
    _baselineSource: ValueOrFunc<string>
    _blockEllipsis: ValueOrFunc<string>
    _blockSize: ValueOrFunc<string>
    _blockStep: ValueOrFunc<string>
    _blockStepAlign: ValueOrFunc<string>
    _blockStepInsert: ValueOrFunc<string>
    _blockStepRound: ValueOrFunc<string>
    _blockStepSize: ValueOrFunc<string>
    _bookmarkLabel: ValueOrFunc<string>
    _bookmarkLevel: ValueOrFunc<string>
    _bookmarkState: ValueOrFunc<string>
    /** @deprecated */
    _border: ValueOrFunc<string>
    _borderBlock: ValueOrFunc<string>
    _borderBlockColor: ValueOrFunc<string>
    _borderBlockEnd: ValueOrFunc<string>
    _borderBlockEndColor: ValueOrFunc<string>
    _borderBlockEndStyle: ValueOrFunc<string>
    _borderBlockEndWidth: ValueOrFunc<string>
    _borderBlockStart: ValueOrFunc<string>
    _borderBlockStartColor: ValueOrFunc<string>
    _borderBlockStartStyle: ValueOrFunc<string>
    _borderBlockStartWidth: ValueOrFunc<string>
    _borderBlockStyle: ValueOrFunc<string>
    _borderBlockWidth: ValueOrFunc<string>
    /** @deprecated */
    _borderBottom: ValueOrFunc<string>
    /** @deprecated */
    _borderBottomColor: ValueOrFunc<string>
    /** @deprecated */
    _borderBottomLeftRadius: ValueOrFunc<string>
    /** @deprecated */
    _borderBottomRightRadius: ValueOrFunc<string>
    /** @deprecated */
    _borderBottomStyle: ValueOrFunc<string>
    /** @deprecated */
    _borderBottomWidth: ValueOrFunc<string>
    _borderBoundary: ValueOrFunc<string>
    _borderCollapse: ValueOrFunc<string>
    /** @deprecated */
    _borderColor: ValueOrFunc<string>
    _borderEndEndRadius: ValueOrFunc<string>
    _borderEndStartRadius: ValueOrFunc<string>
    _borderImage: ValueOrFunc<string>
    _borderImageOutset: ValueOrFunc<string>
    _borderImageRepeat: ValueOrFunc<string>
    _borderImageSlice: ValueOrFunc<string>
    _borderImageSource: ValueOrFunc<string>
    _borderImageWidth: ValueOrFunc<string>
    _borderInline: ValueOrFunc<string>
    _borderInlineColor: ValueOrFunc<string>
    _borderInlineEnd: ValueOrFunc<string>
    _borderInlineEndColor: ValueOrFunc<string>
    _borderInlineEndStyle: ValueOrFunc<string>
    _borderInlineEndWidth: ValueOrFunc<string>
    _borderInlineStart: ValueOrFunc<string>
    _borderInlineStartColor: ValueOrFunc<string>
    _borderInlineStartStyle: ValueOrFunc<string>
    _borderInlineStartWidth: ValueOrFunc<string>
    _borderInlineStyle: ValueOrFunc<string>
    _borderInlineWidth: ValueOrFunc<string>
    /** @deprecated */
    _borderLeft: ValueOrFunc<string>
    /** @deprecated */
    _borderLeftColor: ValueOrFunc<string>
    /** @deprecated */
    _borderLeftStyle: ValueOrFunc<string>
    /** @deprecated */
    _borderLeftWidth: ValueOrFunc<string>
    /** @deprecated */
    _borderRadius: ValueOrFunc<string>
    /** @deprecated */
    _borderRight: ValueOrFunc<string>
    /** @deprecated */
    _borderRightColor: ValueOrFunc<string>
    /** @deprecated */
    _borderRightStyle: ValueOrFunc<string>
    /** @deprecated */
    _borderRightWidth: ValueOrFunc<string>
    _borderSpacing: ValueOrFunc<string>
    _borderStartEndRadius: ValueOrFunc<string>
    _borderStartStartRadius: ValueOrFunc<string>
    /** @deprecated */
    _borderStyle: ValueOrFunc<string>
    /** @deprecated */
    _borderTop: ValueOrFunc<string>
    /** @deprecated */
    _borderTopColor: ValueOrFunc<string>
    /** @deprecated */
    _borderTopLeftRadius: ValueOrFunc<string>
    /** @deprecated */
    _borderTopRightRadius: ValueOrFunc<string>
    /** @deprecated */
    _borderTopStyle: ValueOrFunc<string>
    /** @deprecated */
    _borderTopWidth: ValueOrFunc<string>
    /** @deprecated */
    _borderWidth: ValueOrFunc<string>
    /** @deprecated */
    _bottom: ValueOrFunc<string>
    _boxDecorationBreak: ValueOrFunc<string>
    /** @deprecated */
    _boxShadow: ValueOrFunc<string>
    /** @deprecated */
    _boxSizing: ValueOrFunc<string>
    _boxSnap: ValueOrFunc<string>
    _breakAfter: ValueOrFunc<string>
    _breakBefore: ValueOrFunc<string>
    _breakInside: ValueOrFunc<string>
    _captionSide: ValueOrFunc<string>
    _caret: ValueOrFunc<string>
    _caretColor: ValueOrFunc<string>
    _caretShape: ValueOrFunc<string>
    _chains: ValueOrFunc<string>
    _clear: ValueOrFunc<string>
    _clip: ValueOrFunc<string>
    _clipPath: ValueOrFunc<string>
    _clipRule: ValueOrFunc<string>
    /** @deprecated */
    _color: ValueOrFunc<string>
    _colorAdjust: ValueOrFunc<string>
    _colorInterpolationFilters: ValueOrFunc<string>
    _colorScheme: ValueOrFunc<string>
    _columnCount: ValueOrFunc<string>
    _columnFill: ValueOrFunc<string>
    _columnGap: ValueOrFunc<string>
    _columnRule: ValueOrFunc<string>
    _columnRuleColor: ValueOrFunc<string>
    _columnRuleStyle: ValueOrFunc<string>
    _columnRuleWidth: ValueOrFunc<string>
    _columnSpan: ValueOrFunc<string>
    _columnWidth: ValueOrFunc<string>
    _columns: ValueOrFunc<string>
    _contain: ValueOrFunc<string>
    _containIntrinsicSize: ValueOrFunc<string>
    _content: ValueOrFunc<string>
    _contentVisibility: ValueOrFunc<string>
    _continue: ValueOrFunc<string>
    _counterIncrement: ValueOrFunc<string>
    _counterReset: ValueOrFunc<string>
    _counterSet: ValueOrFunc<string>
    _cue: ValueOrFunc<string>
    _cueAfter: ValueOrFunc<string>
    _cueBefore: ValueOrFunc<string>
    _cursor: ValueOrFunc<string>
    _direction: ValueOrFunc<string>
    /** @deprecated */
    _display: ValueOrFunc<string>
    _dominantBaseline: ValueOrFunc<string>
    _elevation: ValueOrFunc<string>
    _emptyCells: ValueOrFunc<string>
    _fill: ValueOrFunc<string>
    _fillBreak: ValueOrFunc<string>
    _fillColor: ValueOrFunc<string>
    _fillImage: ValueOrFunc<string>
    _fillOpacity: ValueOrFunc<string>
    _fillOrigin: ValueOrFunc<string>
    _fillPosition: ValueOrFunc<string>
    _fillRepeat: ValueOrFunc<string>
    _fillRule: ValueOrFunc<string>
    _fillSize: ValueOrFunc<string>
    _filter: ValueOrFunc<string>
    /** @deprecated */
    _flex: ValueOrFunc<string>
    /** @deprecated */
    _flexBasis: ValueOrFunc<string>
    /** @deprecated */
    _flexDirection: ValueOrFunc<string>
    /** @deprecated */
    _flexFlow: ValueOrFunc<string>
    /** @deprecated */
    _flexGrow: ValueOrFunc<string>
    /** @deprecated */
    _flexShrink: ValueOrFunc<string>
    /** @deprecated */
    _flexWrap: ValueOrFunc<string>
    _float: ValueOrFunc<string>
    _floatDefer: ValueOrFunc<string>
    _floatOffset: ValueOrFunc<string>
    _floatReference: ValueOrFunc<string>
    _floodColor: ValueOrFunc<string>
    _floodOpacity: ValueOrFunc<string>
    _flow: ValueOrFunc<string>
    _flowFrom: ValueOrFunc<string>
    _flowInto: ValueOrFunc<string>
    _font: ValueOrFunc<string>
    /** @deprecated */
    _fontFamily: ValueOrFunc<string>
    _fontFeatureSettings: ValueOrFunc<string>
    /** @deprecated */
    _fontKerning: ValueOrFunc<string>
    _fontLanguageOverride: ValueOrFunc<string>
    /** @deprecated */
    _fontOpticalSizing: ValueOrFunc<string>
    _fontPalette: ValueOrFunc<string>
    /** @deprecated */
    _fontSize: ValueOrFunc<string>
    /** @deprecated */
    _fontSizeAdjust: ValueOrFunc<string>
    /** @deprecated */
    _fontStretch: ValueOrFunc<string>
    /** @deprecated */
    _fontStyle: ValueOrFunc<string>
    /** @deprecated */
    _fontSynthesis: ValueOrFunc<string>
    /** @deprecated */
    _fontSynthesisSmallCaps: ValueOrFunc<string>
    /** @deprecated */
    _fontSynthesisStyle: ValueOrFunc<string>
    /** @deprecated */
    _fontSynthesisWeight: ValueOrFunc<string>
    _fontVariant: ValueOrFunc<string>
    _fontVariantAlternates: ValueOrFunc<string>
    /** @deprecated */
    _fontVariantCaps: ValueOrFunc<string>
    _fontVariantEastAsian: ValueOrFunc<string>
    /** @deprecated */
    _fontVariantEmoji: ValueOrFunc<string>
    /** @deprecated */
    _fontVariantLigatures: ValueOrFunc<string>
    /** @deprecated */
    _fontVariantNumeric: ValueOrFunc<string>
    /** @deprecated */
    _fontVariantPosition: ValueOrFunc<string>
    /** @deprecated */
    _fontVariationSettings: ValueOrFunc<string>
    /** @deprecated */
    _fontWeight: ValueOrFunc<string>
    _footnoteDisplay: ValueOrFunc<string>
    _footnotePolicy: ValueOrFunc<string>
    _forcedColorAdjust: ValueOrFunc<string>
    _gap: ValueOrFunc<string>
    _glyphOrientationVertical: ValueOrFunc<string>
    _grid: ValueOrFunc<string>
    _gridArea: ValueOrFunc<string>
    _gridAutoColumns: ValueOrFunc<string>
    _gridAutoFlow: ValueOrFunc<string>
    _gridAutoRows: ValueOrFunc<string>
    _gridColumn: ValueOrFunc<string>
    _gridColumnEnd: ValueOrFunc<string>
    _gridColumnStart: ValueOrFunc<string>
    _gridRow: ValueOrFunc<string>
    _gridRowEnd: ValueOrFunc<string>
    _gridRowStart: ValueOrFunc<string>
    _gridTemplate: ValueOrFunc<string>
    _gridTemplateAreas: ValueOrFunc<string>
    _gridTemplateColumns: ValueOrFunc<string>
    _gridTemplateRows: ValueOrFunc<string>
    _hangingPunctuation: ValueOrFunc<string>
    /** @deprecated */
    _height: ValueOrFunc<string>
    _hyphenateCharacter: ValueOrFunc<string>
    _hyphenateLimitChars: ValueOrFunc<string>
    _hyphenateLimitLast: ValueOrFunc<string>
    _hyphenateLimitLines: ValueOrFunc<string>
    _hyphenateLimitZone: ValueOrFunc<string>
    _hyphens: ValueOrFunc<string>
    _imageOrientation: ValueOrFunc<string>
    _imageRendering: ValueOrFunc<string>
    _imageResolution: ValueOrFunc<string>
    _initialLetter: ValueOrFunc<string>
    _initialLetterAlign: ValueOrFunc<string>
    _initialLetterWrap: ValueOrFunc<string>
    _inlineSize: ValueOrFunc<string>
    _inlineSizing: ValueOrFunc<string>
    _inset: ValueOrFunc<string>
    _insetBlock: ValueOrFunc<string>
    _insetBlockEnd: ValueOrFunc<string>
    _insetBlockStart: ValueOrFunc<string>
    _insetInline: ValueOrFunc<string>
    _insetInlineEnd: ValueOrFunc<string>
    _insetInlineStart: ValueOrFunc<string>
    _isolation: ValueOrFunc<string>
    /** @deprecated */
    _justifyContent: ValueOrFunc<string>
    _justifyItems: ValueOrFunc<string>
    _justifySelf: ValueOrFunc<string>
    _leadingTrim: ValueOrFunc<string>
    /** @deprecated */
    _left: ValueOrFunc<string>
    /** @deprecated */
    _letterSpacing: ValueOrFunc<string>
    _lightingColor: ValueOrFunc<string>
    _lineBreak: ValueOrFunc<string>
    _lineClamp: ValueOrFunc<string>
    _lineGrid: ValueOrFunc<string>
    /** @deprecated */
    _lineHeight: ValueOrFunc<string>
    _lineHeightStep: ValueOrFunc<string>
    _linePadding: ValueOrFunc<string>
    _lineSnap: ValueOrFunc<string>
    _listStyle: ValueOrFunc<string>
    _listStyleImage: ValueOrFunc<string>
    _listStylePosition: ValueOrFunc<string>
    _listStyleType: ValueOrFunc<string>
    /** @deprecated */
    _margin: ValueOrFunc<string>
    _marginBlock: ValueOrFunc<string>
    _marginBlockEnd: ValueOrFunc<string>
    _marginBlockStart: ValueOrFunc<string>
    /** @deprecated */
    _marginBottom: ValueOrFunc<string>
    _marginBreak: ValueOrFunc<string>
    _marginInline: ValueOrFunc<string>
    _marginInlineEnd: ValueOrFunc<string>
    _marginInlineStart: ValueOrFunc<string>
    /** @deprecated */
    _marginLeft: ValueOrFunc<string>
    /** @deprecated */
    _marginRight: ValueOrFunc<string>
    /** @deprecated */
    _marginTop: ValueOrFunc<string>
    _marginTrim: ValueOrFunc<string>
    _marker: ValueOrFunc<string>
    _markerEnd: ValueOrFunc<string>
    _markerKnockoutLeft: ValueOrFunc<string>
    _markerKnockoutRight: ValueOrFunc<string>
    _markerMid: ValueOrFunc<string>
    _markerPattern: ValueOrFunc<string>
    _markerSegment: ValueOrFunc<string>
    _markerSide: ValueOrFunc<string>
    _markerStart: ValueOrFunc<string>
    _mask: ValueOrFunc<string>
    _maskBorder: ValueOrFunc<string>
    _maskBorderMode: ValueOrFunc<string>
    _maskBorderOutset: ValueOrFunc<string>
    _maskBorderRepeat: ValueOrFunc<string>
    _maskBorderSlice: ValueOrFunc<string>
    _maskBorderSource: ValueOrFunc<string>
    _maskBorderWidth: ValueOrFunc<string>
    _maskClip: ValueOrFunc<string>
    _maskComposite: ValueOrFunc<string>
    _maskImage: ValueOrFunc<string>
    _maskMode: ValueOrFunc<string>
    _maskOrigin: ValueOrFunc<string>
    _maskPosition: ValueOrFunc<string>
    _maskRepeat: ValueOrFunc<string>
    _maskSize: ValueOrFunc<string>
    _maskType: ValueOrFunc<string>
    _maxBlockSize: ValueOrFunc<string>
    _maxHeight: ValueOrFunc<string>
    _maxInlineSize: ValueOrFunc<string>
    _maxLines: ValueOrFunc<string>
    /** @deprecated */
    _maxWidth: ValueOrFunc<string>
    _minBlockSize: ValueOrFunc<string>
    /** @deprecated */
    _minHeight: ValueOrFunc<string>
    _minInlineSize: ValueOrFunc<string>
    _minIntrinsicSizing: ValueOrFunc<string>
    _minWidth: ValueOrFunc<string>
    _mixBlendMode: ValueOrFunc<string>
    _navDown: ValueOrFunc<string>
    _navLeft: ValueOrFunc<string>
    _navRight: ValueOrFunc<string>
    _navUp: ValueOrFunc<string>
    _objectFit: ValueOrFunc<string>
    _objectPosition: ValueOrFunc<string>
    _offset: ValueOrFunc<string>
    _offsetAnchor: ValueOrFunc<string>
    _offsetDistance: ValueOrFunc<string>
    _offsetPath: ValueOrFunc<string>
    _offsetPosition: ValueOrFunc<string>
    _offsetRotate: ValueOrFunc<string>
    /** @deprecated */
    _opacity: ValueOrFunc<string>
    /** @deprecated */
    _order: ValueOrFunc<string>
    _orphans: ValueOrFunc<string>
    /** @deprecated */
    _outline: ValueOrFunc<string>
    /** @deprecated */
    _outlineColor: ValueOrFunc<string>
    _outlineOffset: ValueOrFunc<string>
    /** @deprecated */
    _outlineStyle: ValueOrFunc<string>
    /** @deprecated */
    _outlineWidth: ValueOrFunc<string>
    /** @deprecated */
    _overflow: ValueOrFunc<string>
    _overflowAnchor: ValueOrFunc<string>
    _overflowBlock: ValueOrFunc<string>
    _overflowClipMargin: ValueOrFunc<string>
    _overflowInline: ValueOrFunc<string>
    _overflowWrap: ValueOrFunc<string>
    /** @deprecated */
    _overflowX: ValueOrFunc<string>
    /** @deprecated */
    _overflowY: ValueOrFunc<string>
    _overscrollBehavior: ValueOrFunc<string>
    _overscrollBehaviorBlock: ValueOrFunc<string>
    _overscrollBehaviorInline: ValueOrFunc<string>
    _overscrollBehaviorX: ValueOrFunc<string>
    _overscrollBehaviorY: ValueOrFunc<string>
    /** @deprecated */
    _padding: ValueOrFunc<string>
    _paddingBlock: ValueOrFunc<string>
    _paddingBlockEnd: ValueOrFunc<string>
    _paddingBlockStart: ValueOrFunc<string>
    /** @deprecated */
    _paddingBottom: ValueOrFunc<string>
    _paddingInline: ValueOrFunc<string>
    _paddingInlineEnd: ValueOrFunc<string>
    _paddingInlineStart: ValueOrFunc<string>
    /** @deprecated */
    _paddingLeft: ValueOrFunc<string>
    /** @deprecated */
    _paddingRight: ValueOrFunc<string>
    /** @deprecated */
    _paddingTop: ValueOrFunc<string>
    _page: ValueOrFunc<string>
    _pageBreakAfter: ValueOrFunc<string>
    _pageBreakBefore: ValueOrFunc<string>
    _pageBreakInside: ValueOrFunc<string>
    _pause: ValueOrFunc<string>
    _pauseAfter: ValueOrFunc<string>
    _pauseBefore: ValueOrFunc<string>
    _perspective: ValueOrFunc<string>
    _perspectiveOrigin: ValueOrFunc<string>
    _pitch: ValueOrFunc<string>
    _pitchRange: ValueOrFunc<string>
    _placeContent: ValueOrFunc<string>
    _placeItems: ValueOrFunc<string>
    _placeSelf: ValueOrFunc<string>
    _playDuring: ValueOrFunc<string>
    /** @deprecated */
    _position: ValueOrFunc<string>
    _propertyName: ValueOrFunc<string>
    _quotes: ValueOrFunc<string>
    _regionFragment: ValueOrFunc<string>
    _resize: ValueOrFunc<string>
    _rest: ValueOrFunc<string>
    _restAfter: ValueOrFunc<string>
    _restBefore: ValueOrFunc<string>
    _richness: ValueOrFunc<string>
    /** @deprecated */
    _right: ValueOrFunc<string>
    _rotate: ValueOrFunc<string>
    _rowGap: ValueOrFunc<string>
    _rubyAlign: ValueOrFunc<string>
    _rubyMerge: ValueOrFunc<string>
    _rubyOverhang: ValueOrFunc<string>
    _rubyPosition: ValueOrFunc<string>
    _running: ValueOrFunc<string>
    _scale: ValueOrFunc<string>
    _scrollBehavior: ValueOrFunc<string>
    _scrollMargin: ValueOrFunc<string>
    _scrollMarginBlock: ValueOrFunc<string>
    _scrollMarginBlockEnd: ValueOrFunc<string>
    _scrollMarginBlockStart: ValueOrFunc<string>
    _scrollMarginBottom: ValueOrFunc<string>
    _scrollMarginInline: ValueOrFunc<string>
    _scrollMarginInlineEnd: ValueOrFunc<string>
    _scrollMarginInlineStart: ValueOrFunc<string>
    _scrollMarginLeft: ValueOrFunc<string>
    _scrollMarginRight: ValueOrFunc<string>
    _scrollMarginTop: ValueOrFunc<string>
    _scrollPadding: ValueOrFunc<string>
    _scrollPaddingBlock: ValueOrFunc<string>
    _scrollPaddingBlockEnd: ValueOrFunc<string>
    _scrollPaddingBlockStart: ValueOrFunc<string>
    _scrollPaddingBottom: ValueOrFunc<string>
    _scrollPaddingInline: ValueOrFunc<string>
    _scrollPaddingInlineEnd: ValueOrFunc<string>
    _scrollPaddingInlineStart: ValueOrFunc<string>
    _scrollPaddingLeft: ValueOrFunc<string>
    _scrollPaddingRight: ValueOrFunc<string>
    _scrollPaddingTop: ValueOrFunc<string>
    _scrollSnapAlign: ValueOrFunc<string>
    _scrollSnapStop: ValueOrFunc<string>
    _scrollSnapType: ValueOrFunc<string>
    _scrollbarColor: ValueOrFunc<string>
    _scrollbarGutter: ValueOrFunc<string>
    _scrollbarWidth: ValueOrFunc<string>
    _shapeImageThreshold: ValueOrFunc<string>
    _shapeInside: ValueOrFunc<string>
    _shapeMargin: ValueOrFunc<string>
    _shapeOutside: ValueOrFunc<string>
    _spatialNavigationAction: ValueOrFunc<string>
    _spatialNavigationContain: ValueOrFunc<string>
    _spatialNavigationFunction: ValueOrFunc<string>
    _speak: ValueOrFunc<string>
    _speakAs: ValueOrFunc<string>
    _speakHeader: ValueOrFunc<string>
    _speakNumeral: ValueOrFunc<string>
    _speakPunctuation: ValueOrFunc<string>
    _speechRate: ValueOrFunc<string>
    _stress: ValueOrFunc<string>
    _stringSet: ValueOrFunc<string>
    _stroke: ValueOrFunc<string>
    _strokeAlign: ValueOrFunc<string>
    _strokeAlignment: ValueOrFunc<string>
    _strokeBreak: ValueOrFunc<string>
    _strokeColor: ValueOrFunc<string>
    _strokeDashCorner: ValueOrFunc<string>
    _strokeDashJustify: ValueOrFunc<string>
    _strokeDashadjust: ValueOrFunc<string>
    _strokeDasharray: ValueOrFunc<string>
    _strokeDashcorner: ValueOrFunc<string>
    _strokeDashoffset: ValueOrFunc<string>
    _strokeImage: ValueOrFunc<string>
    _strokeLinecap: ValueOrFunc<string>
    _strokeLinejoin: ValueOrFunc<string>
    _strokeMiterlimit: ValueOrFunc<string>
    _strokeOpacity: ValueOrFunc<string>
    _strokeOrigin: ValueOrFunc<string>
    _strokePosition: ValueOrFunc<string>
    _strokeRepeat: ValueOrFunc<string>
    _strokeSize: ValueOrFunc<string>
    _strokeWidth: ValueOrFunc<string>
    _tabSize: ValueOrFunc<string>
    _tableLayout: ValueOrFunc<string>
    /** @deprecated */
    _textAlign: ValueOrFunc<string>
    _textAlignAll: ValueOrFunc<string>
    _textAlignLast: ValueOrFunc<string>
    _textCombineUpright: ValueOrFunc<string>
    _textDecoration: ValueOrFunc<string>
    _textDecorationColor: ValueOrFunc<string>
    _textDecorationLine: ValueOrFunc<string>
    _textDecorationSkip: ValueOrFunc<string>
    _textDecorationSkipBox: ValueOrFunc<string>
    _textDecorationSkipInk: ValueOrFunc<string>
    _textDecorationSkipInset: ValueOrFunc<string>
    _textDecorationSkipSelf: ValueOrFunc<string>
    _textDecorationSkipSpaces: ValueOrFunc<string>
    _textDecorationStyle: ValueOrFunc<string>
    _textDecorationThickness: ValueOrFunc<string>
    _textEdge: ValueOrFunc<string>
    /** @deprecated */
    _textEmphasis: ValueOrFunc<string>
    /** @deprecated */
    _textEmphasisColor: ValueOrFunc<string>
    /** @deprecated */
    _textEmphasisPosition: ValueOrFunc<string>
    /** @deprecated */
    _textEmphasisSkip: ValueOrFunc<string>
    _textEmphasisStyle: ValueOrFunc<string>
    _textGroupAlign: ValueOrFunc<string>
    /** @deprecated */
    _textIndent: ValueOrFunc<string>
    /** @deprecated */
    _textJustify: ValueOrFunc<string>
    /** @deprecated */
    _textOrientation: ValueOrFunc<string>
    _textOverflow: ValueOrFunc<string>
    _textShadow: ValueOrFunc<string>
    _textSpaceCollapse: ValueOrFunc<string>
    _textSpaceTrim: ValueOrFunc<string>
    _textSpacing: ValueOrFunc<string>
    /** @deprecated */
    _textTransform: ValueOrFunc<string>
    /** @deprecated */
    _textUnderlineOffset: ValueOrFunc<string>
    /** @deprecated */
    _textUnderlinePosition: ValueOrFunc<string>
    /** @deprecated */
    _textWrap: ValueOrFunc<string>
    /** @deprecated */
    _top: ValueOrFunc<string>
    /** @deprecated */
    _transform: ValueOrFunc<string>
    /** @deprecated */
    _transformBox: ValueOrFunc<string>
    /** @deprecated */
    _transformOrigin: ValueOrFunc<string>
    /** @deprecated */
    _transformStyle: ValueOrFunc<string>
    /** @deprecated */
    _transition: ValueOrFunc<string>
    /** @deprecated */
    _transitionDelay: ValueOrFunc<string>
    /** @deprecated */
    _transitionDuration: ValueOrFunc<string>
    /** @deprecated */
    _transitionProperty: ValueOrFunc<string>
    /** @deprecated */
    _transitionTimingFunction: ValueOrFunc<string>
    /** @deprecated */
    _translate: ValueOrFunc<string>
    /** @deprecated */
    _unicodeBidi: ValueOrFunc<string>
    /** @deprecated */
    _userSelect: ValueOrFunc<string>
    /** @deprecated */
    _verticalAlign: ValueOrFunc<string>
    /** @deprecated */
    _visibility: ValueOrFunc<string>
    _voiceBalance: ValueOrFunc<string>
    _voiceDuration: ValueOrFunc<string>
    _voiceFamily: ValueOrFunc<string>
    _voicePitch: ValueOrFunc<string>
    _voiceRange: ValueOrFunc<string>
    /** @deprecated */
    _voiceRate: ValueOrFunc<string>
    /** @deprecated */
    _voiceStress: ValueOrFunc<string>
    /** @deprecated */
    _voiceVolume: ValueOrFunc<string>
    /** @deprecated */
    _volume: ValueOrFunc<string>
    /** @deprecated */
    _whiteSpace: ValueOrFunc<string>
    /** @deprecated */
    _widows: ValueOrFunc<string>
    /** @deprecated */
    _width: ValueOrFunc<string>
    /** @deprecated */
    _willChange: ValueOrFunc<string>
    _wordBoundaryDetection: ValueOrFunc<string>
    _wordBoundaryExpansion: ValueOrFunc<string>
    _wordBreak: ValueOrFunc<string>
    /** @deprecated */
    _wordSpacing: ValueOrFunc<string>
    _wordWrap: ValueOrFunc<string>
    _wrapAfter: ValueOrFunc<string>
    _wrapBefore: ValueOrFunc<string>
    _wrapFlow: ValueOrFunc<string>
    _wrapInside: ValueOrFunc<string>
    _wrapThrough: ValueOrFunc<string>
    /** @deprecated */
    _writingMode: ValueOrFunc<string>
    /** @deprecated */
    _zIndex: ValueOrFunc<string>
}
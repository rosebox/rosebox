import { ValueOrFunc } from './core'

export type UntypedProps = {
    /** @deprecated since 0.4.3 */
    _alignContent: string
    /** @deprecated since 0.4.3 */
    _alignItems: string
    /** @deprecated since 0.4.3 */
    _alignSelf: string
    _alignmentBaseline: string
    _all: string
    /** @deprecated since 0.4.3 */
    _animation: string
    /** @deprecated since 0.4.3 */
    _animationDelay: string
    /** @deprecated since 0.4.3 */
    _animationDirection: string
    /** @deprecated since 0.4.3 */
    _animationDuration: string
    /** @deprecated since 0.4.3 */
    _animationFillMode: string
    /** @deprecated since 0.4.3 */
    _animationIterationCount: string
    /** @deprecated since 0.4.3 */
    _animationName: string
    /** @deprecated since 0.4.3 */
    _animationPlayState: string
    /** @deprecated since 0.4.3 */
    _animationTimingFunction: string
    _appearance: string
    _aspectRatio: string
    _azimuth: string
    /** @deprecated since 0.4.3 */
    _backfaceVisibility: string
    _background: string
    _backgroundAttachment: string
    _backgroundBlendMode: string
    _backgroundClip: string
    /** @deprecated since 0.4.3 */
    _backgroundColor: string
    /** @deprecated since 0.4.3 */
    _backgroundImage: string
    _backgroundOrigin: string
    /** @deprecated since 0.4.3 */
    _backgroundPosition: string
    _backgroundRepeat: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _borderBottom: string
    /** @deprecated since 0.4.3 */
    _borderBottomColor: string
    /** @deprecated since 0.4.3 */
    _borderBottomLeftRadius: string
    /** @deprecated since 0.4.3 */
    _borderBottomRightRadius: string
    /** @deprecated since 0.4.3 */
    _borderBottomStyle: string
    /** @deprecated since 0.4.3 */
    _borderBottomWidth: string
    _borderBoundary: string
    _borderCollapse: string
    /** @deprecated since 0.4.3 */
    _borderColor: string
    _borderEndEndRadius: string
    _borderEndStartRadius: string
    _borderImage: string
    _borderImageOutset: string
    _borderImageRepeat: string
    _borderImageSlice: string
    /** @deprecated since 0.4.5 */
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
    /** @deprecated since 0.4.3 */
    _borderLeft: string
    /** @deprecated since 0.4.3 */
    _borderLeftColor: string
    /** @deprecated since 0.4.3 */
    _borderLeftStyle: string
    /** @deprecated since 0.4.3 */
    _borderLeftWidth: string
    /** @deprecated since 0.4.3 */
    _borderRadius: string
    /** @deprecated since 0.4.3 */
    _borderRight: string
    /** @deprecated since 0.4.3 */
    _borderRightColor: string
    /** @deprecated since 0.4.3 */
    _borderRightStyle: string
    /** @deprecated since 0.4.3 */
    _borderRightWidth: string
    _borderSpacing: string
    _borderStartEndRadius: string
    _borderStartStartRadius: string
    /** @deprecated since 0.4.3 */
    _borderStyle: string
    /** @deprecated since 0.4.3 */
    _borderTop: string
    /** @deprecated since 0.4.3 */
    _borderTopColor: string
    /** @deprecated since 0.4.3 */
    _borderTopLeftRadius: string
    /** @deprecated since 0.4.3 */
    _borderTopRightRadius: string
    /** @deprecated since 0.4.3 */
    _borderTopStyle: string
    /** @deprecated since 0.4.3 */
    _borderTopWidth: string
    /** @deprecated since 0.4.3 */
    _borderWidth: string
    /** @deprecated since 0.4.3 */
    _bottom: string
    _boxDecorationBreak: string
    /** @deprecated since 0.4.3 */
    _boxShadow: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _flex: string
    /** @deprecated since 0.4.3 */
    _flexBasis: string
    /** @deprecated since 0.4.3 */
    _flexDirection: string
    /** @deprecated since 0.4.3 */
    _flexFlow: string
    /** @deprecated since 0.4.3 */
    _flexGrow: string
    /** @deprecated since 0.4.3 */
    _flexShrink: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _fontFamily: string
    _fontFeatureSettings: string
    /** @deprecated since 0.4.3 */
    _fontKerning: string
    _fontLanguageOverride: string
    /** @deprecated since 0.4.3 */
    _fontOpticalSizing: string
    _fontPalette: string
    /** @deprecated since 0.4.3 */
    _fontSize: string
    /** @deprecated since 0.4.3 */
    _fontSizeAdjust: string
    /** @deprecated since 0.4.3 */
    _fontStretch: string
    /** @deprecated since 0.4.3 */
    _fontStyle: string
    /** @deprecated since 0.4.3 */
    _fontSynthesis: string
    /** @deprecated since 0.4.3 */
    _fontSynthesisSmallCaps: string
    /** @deprecated since 0.4.3 */
    _fontSynthesisStyle: string
    /** @deprecated since 0.4.3 */
    _fontSynthesisWeight: string
    _fontVariant: string
    _fontVariantAlternates: string
    /** @deprecated since 0.4.3 */
    _fontVariantCaps: string
    _fontVariantEastAsian: string
    /** @deprecated since 0.4.3 */
    _fontVariantEmoji: string
    /** @deprecated since 0.4.3 */
    _fontVariantLigatures: string
    /** @deprecated since 0.4.3 */
    _fontVariantNumeric: string
    /** @deprecated since 0.4.3 */
    _fontVariantPosition: string
    /** @deprecated since 0.4.3 */
    _fontVariationSettings: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _justifyContent: string
    /** @deprecated since 0.4.4 */
    _justifyItems: string
    /** @deprecated since 0.4.4 */
    _justifySelf: string
    _leadingTrim: string
    /** @deprecated since 0.4.3 */
    _left: string
    /** @deprecated since 0.4.3 */
    _letterSpacing: string
    _lightingColor: string
    _lineBreak: string
    _lineClamp: string
    _lineGrid: string
    /** @deprecated since 0.4.3 */
    _lineHeight: string
    _lineHeightStep: string
    _linePadding: string
    _lineSnap: string
    _listStyle: string
    _listStyleImage: string
    _listStylePosition: string
    _listStyleType: string
    /** @deprecated since 0.4.3 */
    _margin: string
    _marginBlock: string
    _marginBlockEnd: string
    _marginBlockStart: string
    /** @deprecated since 0.4.3 */
    _marginBottom: string
    _marginBreak: string
    _marginInline: string
    _marginInlineEnd: string
    _marginInlineStart: string
    /** @deprecated since 0.4.3 */
    _marginLeft: string
    /** @deprecated since 0.4.3 */
    _marginRight: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _maxWidth: string
    _minBlockSize: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _opacity: string
    /** @deprecated since 0.4.3 */
    _order: string
    _orphans: string
    /** @deprecated since 0.4.3 */
    _outline: string
    /** @deprecated since 0.4.3 */
    _outlineColor: string
    _outlineOffset: string
    /** @deprecated since 0.4.3 */
    _outlineStyle: string
    /** @deprecated since 0.4.3 */
    _outlineWidth: string
    /** @deprecated since 0.4.3 */
    _overflow: string
    _overflowAnchor: string
    _overflowBlock: string
    _overflowClipMargin: string
    _overflowInline: string
    _overflowWrap: string
    /** @deprecated since 0.4.3 */
    _overflowX: string
    /** @deprecated since 0.4.3 */
    _overflowY: string
    _overscrollBehavior: string
    _overscrollBehaviorBlock: string
    _overscrollBehaviorInline: string
    _overscrollBehaviorX: string
    _overscrollBehaviorY: string
    /** @deprecated since 0.4.3 */
    _padding: string
    _paddingBlock: string
    _paddingBlockEnd: string
    _paddingBlockStart: string
    /** @deprecated since 0.4.3 */
    _paddingBottom: string
    _paddingInline: string
    _paddingInlineEnd: string
    _paddingInlineStart: string
    /** @deprecated since 0.4.3 */
    _paddingLeft: string
    /** @deprecated since 0.4.3 */
    _paddingRight: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _position: string
    _propertyName: string
    _quotes: string
    _regionFragment: string
    _resize: string
    _rest: string
    _restAfter: string
    _restBefore: string
    _richness: string
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _textEmphasis: string
    /** @deprecated since 0.4.3 */
    _textEmphasisColor: string
    /** @deprecated since 0.4.3 */
    _textEmphasisPosition: string
    /** @deprecated since 0.4.3 */
    _textEmphasisSkip: string
    _textEmphasisStyle: string
    _textGroupAlign: string
    /** @deprecated since 0.4.3 */
    _textIndent: string
    /** @deprecated since 0.4.3 */
    _textJustify: string
    /** @deprecated since 0.4.3 */
    _textOrientation: string
    _textOverflow: string
    _textShadow: string
    _textSpaceCollapse: string
    _textSpaceTrim: string
    _textSpacing: string
    /** @deprecated since 0.4.3 */
    _textTransform: string
    /** @deprecated since 0.4.3 */
    _textUnderlineOffset: string
    /** @deprecated since 0.4.3 */
    _textUnderlinePosition: string
    /** @deprecated since 0.4.3 */
    _textWrap: string
    /** @deprecated since 0.4.3 */
    _top: string
    /** @deprecated since 0.4.3 */
    _transform: string
    /** @deprecated since 0.4.3 */
    _transformBox: string
    /** @deprecated since 0.4.3 */
    _transformOrigin: string
    /** @deprecated since 0.4.3 */
    _transformStyle: string
    /** @deprecated since 0.4.3 */
    _transition: string
    /** @deprecated since 0.4.3 */
    _transitionDelay: string
    /** @deprecated since 0.4.3 */
    _transitionDuration: string
    /** @deprecated since 0.4.3 */
    _transitionProperty: string
    /** @deprecated since 0.4.3 */
    _transitionTimingFunction: string
    /** @deprecated since 0.4.3 */
    _translate: string
    /** @deprecated since 0.4.3 */
    _unicodeBidi: string
    /** @deprecated since 0.4.3 */
    _userSelect: string
    /** @deprecated since 0.4.3 */
    _verticalAlign: string
    /** @deprecated since 0.4.3 */
    _visibility: string
    _voiceBalance: string
    _voiceDuration: string
    _voiceFamily: string
    _voicePitch: string
    _voiceRange: string
    /** @deprecated since 0.4.3 */
    _voiceRate: string
    /** @deprecated since 0.4.3 */
    _voiceStress: string
    /** @deprecated since 0.4.3 */
    _voiceVolume: string
    /** @deprecated since 0.4.3 */
    _volume: string
    /** @deprecated since 0.4.3 */
    _whiteSpace: string
    /** @deprecated since 0.4.3 */
    _widows: string
    /** @deprecated since 0.4.3 */
    _width: string
    /** @deprecated since 0.4.3 */
    _willChange: string
    _wordBoundaryDetection: string
    _wordBoundaryExpansion: string
    _wordBreak: string
    /** @deprecated since 0.4.3 */
    _wordSpacing: string
    _wordWrap: string
    _wrapAfter: string
    _wrapBefore: string
    _wrapFlow: string
    _wrapInside: string
    _wrapThrough: string
    /** @deprecated since 0.4.3 */
    _writingMode: string
    /** @deprecated since 0.4.3 */
    _zIndex: string
}

export type UntypedPropsJSS = {
    /** @deprecated since 0.4.3 */
    _alignContent: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _alignItems: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _alignSelf: ValueOrFunc<string>
    _alignmentBaseline: ValueOrFunc<string>
    _all: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animation: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationDelay: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationDirection: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationDuration: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationFillMode: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationIterationCount: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationName: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationPlayState: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _animationTimingFunction: ValueOrFunc<string>
    _appearance: ValueOrFunc<string>
    _aspectRatio: ValueOrFunc<string>
    _azimuth: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _backfaceVisibility: ValueOrFunc<string>
    _background: ValueOrFunc<string>
    _backgroundAttachment: ValueOrFunc<string>
    _backgroundBlendMode: ValueOrFunc<string>
    _backgroundClip: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _backgroundColor: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _backgroundImage: ValueOrFunc<string>
    _backgroundOrigin: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _backgroundPosition: ValueOrFunc<string>
    _backgroundRepeat: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _borderBottom: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderBottomColor: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderBottomLeftRadius: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderBottomRightRadius: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderBottomStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderBottomWidth: ValueOrFunc<string>
    _borderBoundary: ValueOrFunc<string>
    _borderCollapse: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderColor: ValueOrFunc<string>
    _borderEndEndRadius: ValueOrFunc<string>
    _borderEndStartRadius: ValueOrFunc<string>
    _borderImage: ValueOrFunc<string>
    _borderImageOutset: ValueOrFunc<string>
    _borderImageRepeat: ValueOrFunc<string>
    _borderImageSlice: ValueOrFunc<string>
    /** @deprecated since 0.4.5 */
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
    /** @deprecated since 0.4.3 */
    _borderLeft: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderLeftColor: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderLeftStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderLeftWidth: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderRadius: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderRight: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderRightColor: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderRightStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderRightWidth: ValueOrFunc<string>
    _borderSpacing: ValueOrFunc<string>
    _borderStartEndRadius: ValueOrFunc<string>
    _borderStartStartRadius: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderTop: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderTopColor: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderTopLeftRadius: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderTopRightRadius: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderTopStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderTopWidth: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _borderWidth: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _bottom: ValueOrFunc<string>
    _boxDecorationBreak: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _boxShadow: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _flex: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _flexBasis: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _flexDirection: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _flexFlow: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _flexGrow: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _flexShrink: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _fontFamily: ValueOrFunc<string>
    _fontFeatureSettings: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontKerning: ValueOrFunc<string>
    _fontLanguageOverride: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontOpticalSizing: ValueOrFunc<string>
    _fontPalette: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontSize: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontSizeAdjust: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontStretch: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontSynthesis: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontSynthesisSmallCaps: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontSynthesisStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontSynthesisWeight: ValueOrFunc<string>
    _fontVariant: ValueOrFunc<string>
    _fontVariantAlternates: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontVariantCaps: ValueOrFunc<string>
    _fontVariantEastAsian: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontVariantEmoji: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontVariantLigatures: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontVariantNumeric: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontVariantPosition: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _fontVariationSettings: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _justifyContent: ValueOrFunc<string>
    /** @deprecated since 0.4.4 */
    _justifyItems: ValueOrFunc<string>
    /** @deprecated since 0.4.4 */
    _justifySelf: ValueOrFunc<string>
    _leadingTrim: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _left: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _letterSpacing: ValueOrFunc<string>
    _lightingColor: ValueOrFunc<string>
    _lineBreak: ValueOrFunc<string>
    _lineClamp: ValueOrFunc<string>
    _lineGrid: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _lineHeight: ValueOrFunc<string>
    _lineHeightStep: ValueOrFunc<string>
    _linePadding: ValueOrFunc<string>
    _lineSnap: ValueOrFunc<string>
    _listStyle: ValueOrFunc<string>
    _listStyleImage: ValueOrFunc<string>
    _listStylePosition: ValueOrFunc<string>
    _listStyleType: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _margin: ValueOrFunc<string>
    _marginBlock: ValueOrFunc<string>
    _marginBlockEnd: ValueOrFunc<string>
    _marginBlockStart: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _marginBottom: ValueOrFunc<string>
    _marginBreak: ValueOrFunc<string>
    _marginInline: ValueOrFunc<string>
    _marginInlineEnd: ValueOrFunc<string>
    _marginInlineStart: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _marginLeft: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _marginRight: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _maxWidth: ValueOrFunc<string>
    _minBlockSize: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _opacity: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _order: ValueOrFunc<string>
    _orphans: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _outline: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _outlineColor: ValueOrFunc<string>
    _outlineOffset: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _outlineStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _outlineWidth: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _overflow: ValueOrFunc<string>
    _overflowAnchor: ValueOrFunc<string>
    _overflowBlock: ValueOrFunc<string>
    _overflowClipMargin: ValueOrFunc<string>
    _overflowInline: ValueOrFunc<string>
    _overflowWrap: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _overflowX: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _overflowY: ValueOrFunc<string>
    _overscrollBehavior: ValueOrFunc<string>
    _overscrollBehaviorBlock: ValueOrFunc<string>
    _overscrollBehaviorInline: ValueOrFunc<string>
    _overscrollBehaviorX: ValueOrFunc<string>
    _overscrollBehaviorY: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _padding: ValueOrFunc<string>
    _paddingBlock: ValueOrFunc<string>
    _paddingBlockEnd: ValueOrFunc<string>
    _paddingBlockStart: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _paddingBottom: ValueOrFunc<string>
    _paddingInline: ValueOrFunc<string>
    _paddingInlineEnd: ValueOrFunc<string>
    _paddingInlineStart: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _paddingLeft: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _paddingRight: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _position: ValueOrFunc<string>
    _propertyName: ValueOrFunc<string>
    _quotes: ValueOrFunc<string>
    _regionFragment: ValueOrFunc<string>
    _resize: ValueOrFunc<string>
    _rest: ValueOrFunc<string>
    _restAfter: ValueOrFunc<string>
    _restBefore: ValueOrFunc<string>
    _richness: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
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
    /** @deprecated since 0.4.3 */
    _textEmphasis: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textEmphasisColor: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textEmphasisPosition: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textEmphasisSkip: ValueOrFunc<string>
    _textEmphasisStyle: ValueOrFunc<string>
    _textGroupAlign: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textIndent: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textJustify: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textOrientation: ValueOrFunc<string>
    _textOverflow: ValueOrFunc<string>
    _textShadow: ValueOrFunc<string>
    _textSpaceCollapse: ValueOrFunc<string>
    _textSpaceTrim: ValueOrFunc<string>
    _textSpacing: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textTransform: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textUnderlineOffset: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textUnderlinePosition: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _textWrap: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _top: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transform: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transformBox: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transformOrigin: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transformStyle: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transition: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transitionDelay: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transitionDuration: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transitionProperty: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _transitionTimingFunction: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _translate: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _unicodeBidi: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _userSelect: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _verticalAlign: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _visibility: ValueOrFunc<string>
    _voiceBalance: ValueOrFunc<string>
    _voiceDuration: ValueOrFunc<string>
    _voiceFamily: ValueOrFunc<string>
    _voicePitch: ValueOrFunc<string>
    _voiceRange: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _voiceRate: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _voiceStress: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _voiceVolume: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _volume: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _whiteSpace: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _widows: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _width: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _willChange: ValueOrFunc<string>
    _wordBoundaryDetection: ValueOrFunc<string>
    _wordBoundaryExpansion: ValueOrFunc<string>
    _wordBreak: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _wordSpacing: ValueOrFunc<string>
    _wordWrap: ValueOrFunc<string>
    _wrapAfter: ValueOrFunc<string>
    _wrapBefore: ValueOrFunc<string>
    _wrapFlow: ValueOrFunc<string>
    _wrapInside: ValueOrFunc<string>
    _wrapThrough: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _writingMode: ValueOrFunc<string>
    /** @deprecated since 0.4.3 */
    _zIndex: ValueOrFunc<string>
}

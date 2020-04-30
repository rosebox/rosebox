import { AnimatableCSSProp, Time, GlobalCssKeyword } from '../shared/types'
import { TransitionTimingFunctionValue, serializeTransitionTimingFunctionValue } from '../transition-timing-function'
import { isTime } from '../shared/types'
import { serializeTime } from '../shared/serializers'

type SingleTransition =
    'none'
    | AnimatableCSSProp
    | Time
    | TransitionTimingFunctionValue

type SingleTransitionOneValueTupleSyntax = [SingleTransition]

type SingleTransitionTwoValuesSyntax =
    ['none' | AnimatableCSSProp, Time] |
    ['none' | AnimatableCSSProp, TransitionTimingFunctionValue] |
    [Time, 'none' | AnimatableCSSProp] |
    [Time, TransitionTimingFunctionValue] |
    [TransitionTimingFunctionValue, 'none' | AnimatableCSSProp] |
    [TransitionTimingFunctionValue, Time]


type SingleTransitionThreeValuesSyntax =
    ['none' | AnimatableCSSProp, Time, TransitionTimingFunctionValue] |
    ['none' | AnimatableCSSProp, TransitionTimingFunctionValue, Time] |
    ['none' | AnimatableCSSProp, Time, Time] |
    [TransitionTimingFunctionValue, 'none' | AnimatableCSSProp, Time] |
    [TransitionTimingFunctionValue, Time, 'none' | AnimatableCSSProp] |
    [TransitionTimingFunctionValue, Time, Time] |
    [Time, 'none' | AnimatableCSSProp, TransitionTimingFunctionValue] |
    [Time, TransitionTimingFunctionValue, 'none' | AnimatableCSSProp] |
    [Time, 'none' | AnimatableCSSProp, Time] |
    [Time, Time, 'none' | AnimatableCSSProp] |
    [Time, TransitionTimingFunctionValue, Time] |
    [Time, Time, TransitionTimingFunctionValue]

type SingleTransitionFourValuesSyntax =
    ['none' | AnimatableCSSProp, Time, Time, TransitionTimingFunctionValue] |
    ['none' | AnimatableCSSProp, Time, TransitionTimingFunctionValue, Time] |
    ['none' | AnimatableCSSProp, TransitionTimingFunctionValue, Time, Time] |
    [TransitionTimingFunctionValue, Time, Time, 'none' | AnimatableCSSProp] |
    [TransitionTimingFunctionValue, Time, 'none' | AnimatableCSSProp, Time] |
    [TransitionTimingFunctionValue, 'none' | AnimatableCSSProp, Time, Time] |
    [Time, Time, 'none' | AnimatableCSSProp, TransitionTimingFunctionValue] |
    [Time, Time, TransitionTimingFunctionValue, 'none' | AnimatableCSSProp] |
    [Time, 'none' | AnimatableCSSProp, Time, TransitionTimingFunctionValue] |
    [Time, 'none' | AnimatableCSSProp, TransitionTimingFunctionValue, Time] |
    [Time, TransitionTimingFunctionValue, Time, 'none' | AnimatableCSSProp] |
    [Time, TransitionTimingFunctionValue, 'none' | AnimatableCSSProp, Time]


type SingleTransitionTuple =
    SingleTransitionOneValueTupleSyntax
    | SingleTransitionTwoValuesSyntax
    | SingleTransitionThreeValuesSyntax
    | SingleTransitionFourValuesSyntax


type TransitionPropertyValue =
    | SingleTransitionTuple
    | SingleTransitionTuple[]
    | GlobalCssKeyword

const serializeAtomicValue = (value: 'none' | AnimatableCSSProp | Time | TransitionTimingFunctionValue): string =>
    typeof value === 'string'
        ? value
        : isTime(value)
            ? serializeTime(value)
            : serializeTransitionTimingFunctionValue(value)

const isSingleTransition = (value: TransitionPropertyValue): value is SingleTransitionTuple =>
    !Array.isArray(value[0]) || (!!value[1] && !Array.isArray(value[1]))

const serializeSingleTransition = (value: SingleTransitionTuple): string =>
    (value as ('none' | AnimatableCSSProp | Time | TransitionTimingFunctionValue)[])
        .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
        .trim()

export const serializeTransitionValue = (value: TransitionPropertyValue): string => {
    return typeof value === 'string'
        ? value
        : isSingleTransition(value)
            ? serializeSingleTransition(value)
            : (value as SingleTransitionTuple[]).reduce((acc: any, item, idx) =>
                acc + serializeSingleTransition(item) + (idx === value.length - 1 ? '' : ', '), '')
                .trim()
}

export type TransitionDeclaration = {
    /**
     * Maps to CSS's **`transition`** property
     * @category RBProperty
     */
    transition: TransitionPropertyValue
}

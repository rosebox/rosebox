import { AnimatableProperty, Duration, GlobalCssKeyword, serializeTimingFunctionValue, ValueOrFunc } from '../shared'
import { TimingFunctionValue } from '../shared'
import { isDuration } from '../shared'

const toHyphenCase = (x: string) => x.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

type SingleTransition = 'none' | AnimatableProperty | Duration | TimingFunctionValue

type SingleTransitionOneValueTupleSyntax = [SingleTransition]

type SingleTransitionTwoValuesSyntax =
    | ['none' | AnimatableProperty, Duration]
    | ['none' | AnimatableProperty, TimingFunctionValue]
    | [Duration, 'none' | AnimatableProperty]
    | [Duration, TimingFunctionValue]
    | [TimingFunctionValue, 'none' | AnimatableProperty]
    | [TimingFunctionValue, Duration]

type SingleTransitionThreeValuesSyntax =
    | ['none' | AnimatableProperty, Duration, TimingFunctionValue]
    | ['none' | AnimatableProperty, TimingFunctionValue, Duration]
    | ['none' | AnimatableProperty, Duration, Duration]
    | [TimingFunctionValue, 'none' | AnimatableProperty, Duration]
    | [TimingFunctionValue, Duration, 'none' | AnimatableProperty]
    | [TimingFunctionValue, Duration, Duration]
    | [Duration, 'none' | AnimatableProperty, TimingFunctionValue]
    | [Duration, TimingFunctionValue, 'none' | AnimatableProperty]
    | [Duration, 'none' | AnimatableProperty, Duration]
    | [Duration, Duration, 'none' | AnimatableProperty]
    | [Duration, TimingFunctionValue, Duration]
    | [Duration, Duration, TimingFunctionValue]

type SingleTransitionFourValuesSyntax =
    | ['none' | AnimatableProperty, Duration, Duration, TimingFunctionValue]
    | ['none' | AnimatableProperty, Duration, TimingFunctionValue, Duration]
    | ['none' | AnimatableProperty, TimingFunctionValue, Duration, Duration]
    | [TimingFunctionValue, Duration, Duration, 'none' | AnimatableProperty]
    | [TimingFunctionValue, Duration, 'none' | AnimatableProperty, Duration]
    | [TimingFunctionValue, 'none' | AnimatableProperty, Duration, Duration]
    | [Duration, Duration, 'none' | AnimatableProperty, TimingFunctionValue]
    | [Duration, Duration, TimingFunctionValue, 'none' | AnimatableProperty]
    | [Duration, 'none' | AnimatableProperty, Duration, TimingFunctionValue]
    | [Duration, 'none' | AnimatableProperty, TimingFunctionValue, Duration]
    | [Duration, TimingFunctionValue, Duration, 'none' | AnimatableProperty]
    | [Duration, TimingFunctionValue, 'none' | AnimatableProperty, Duration]

type SingleTransitionTuple =
    | SingleTransitionOneValueTupleSyntax
    | SingleTransitionTwoValuesSyntax
    | SingleTransitionThreeValuesSyntax
    | SingleTransitionFourValuesSyntax

/** @hide */
type TransitionPropertyValue = SingleTransitionTuple | SingleTransitionTuple[] | GlobalCssKeyword

const serializeAtomicValue = (value: 'none' | AnimatableProperty | Duration | TimingFunctionValue): string =>
    typeof value === 'string'
        ? toHyphenCase(value)
        : isDuration(value)
        ? value.serialize()
        : serializeTimingFunctionValue(value)

const isSingleTransition = (value: TransitionPropertyValue): value is SingleTransitionTuple =>
    !Array.isArray(value[0]) || (!!value[1] && !Array.isArray(value[1]))

const serializeSingleTransition = (value: SingleTransitionTuple): string =>
    (value as any[]).reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '').trim()

export const serializeTransition = (value: TransitionPropertyValue): { transition: string } => ({
    transition:
        typeof value === 'string'
            ? value
            : isSingleTransition(value)
            ? serializeSingleTransition(value)
            : (value as SingleTransitionTuple[])
                  .reduce(
                      (acc: any, item, idx) =>
                          acc + serializeSingleTransition(item) + (idx === value.length - 1 ? '' : ', '),
                      '',
                  )
                  .trim(),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionDeclaration = {
    /**
     * Maps to CSS's **`transition`** property
     * @initial see individual properties
     * @definition https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/#transition-shorthand-property
     * @specification {@link https://www.w3.org/TR/2018/WD-css-transitions-1-20181011/ CSS Transitions}.
     */
    transition: TransitionPropertyValue
}

export type TransitionDeclarationJSS = {
    transition: ValueOrFunc<TransitionPropertyValue>
}

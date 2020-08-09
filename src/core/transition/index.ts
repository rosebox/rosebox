import {
  AnimatableProperty,
  Time,
  GlobalCssKeyword,
  serializeTimingFunctionValue,
} from '../shared'
import { TimingFunctionValue } from '../shared'
import { isTime } from '../shared'
import { serializeTime } from '../shared'

const toHyphenCase = (x: string) =>
  x.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())

type SingleTransition = 'none' | AnimatableProperty | Time | TimingFunctionValue

type SingleTransitionOneValueTupleSyntax = [SingleTransition]

type SingleTransitionTwoValuesSyntax =
  | ['none' | AnimatableProperty, Time]
  | ['none' | AnimatableProperty, TimingFunctionValue]
  | [Time, 'none' | AnimatableProperty]
  | [Time, TimingFunctionValue]
  | [TimingFunctionValue, 'none' | AnimatableProperty]
  | [TimingFunctionValue, Time]

type SingleTransitionThreeValuesSyntax =
  | ['none' | AnimatableProperty, Time, TimingFunctionValue]
  | ['none' | AnimatableProperty, TimingFunctionValue, Time]
  | ['none' | AnimatableProperty, Time, Time]
  | [TimingFunctionValue, 'none' | AnimatableProperty, Time]
  | [TimingFunctionValue, Time, 'none' | AnimatableProperty]
  | [TimingFunctionValue, Time, Time]
  | [Time, 'none' | AnimatableProperty, TimingFunctionValue]
  | [Time, TimingFunctionValue, 'none' | AnimatableProperty]
  | [Time, 'none' | AnimatableProperty, Time]
  | [Time, Time, 'none' | AnimatableProperty]
  | [Time, TimingFunctionValue, Time]
  | [Time, Time, TimingFunctionValue]

type SingleTransitionFourValuesSyntax =
  | ['none' | AnimatableProperty, Time, Time, TimingFunctionValue]
  | ['none' | AnimatableProperty, Time, TimingFunctionValue, Time]
  | ['none' | AnimatableProperty, TimingFunctionValue, Time, Time]
  | [TimingFunctionValue, Time, Time, 'none' | AnimatableProperty]
  | [TimingFunctionValue, Time, 'none' | AnimatableProperty, Time]
  | [TimingFunctionValue, 'none' | AnimatableProperty, Time, Time]
  | [Time, Time, 'none' | AnimatableProperty, TimingFunctionValue]
  | [Time, Time, TimingFunctionValue, 'none' | AnimatableProperty]
  | [Time, 'none' | AnimatableProperty, Time, TimingFunctionValue]
  | [Time, 'none' | AnimatableProperty, TimingFunctionValue, Time]
  | [Time, TimingFunctionValue, Time, 'none' | AnimatableProperty]
  | [Time, TimingFunctionValue, 'none' | AnimatableProperty, Time]

type SingleTransitionTuple =
  | SingleTransitionOneValueTupleSyntax
  | SingleTransitionTwoValuesSyntax
  | SingleTransitionThreeValuesSyntax
  | SingleTransitionFourValuesSyntax

type TransitionPropertyValue =
  | SingleTransitionTuple
  | SingleTransitionTuple[]
  | GlobalCssKeyword

const serializeAtomicValue = (
  value: 'none' | AnimatableProperty | Time | TimingFunctionValue
): string =>
  typeof value === 'string'
    ? toHyphenCase(value)
    : isTime(value)
    ? serializeTime(value)
    : serializeTimingFunctionValue(value)

const isSingleTransition = (
  value: TransitionPropertyValue
): value is SingleTransitionTuple =>
  !Array.isArray(value[0]) || (!!value[1] && !Array.isArray(value[1]))

const serializeSingleTransition = (value: SingleTransitionTuple): string =>
  (value as any[])
    .reduce((acc: any, item) => acc + ' ' + serializeAtomicValue(item), '')
    .trim()

export const serializeTransition = (
  value: TransitionPropertyValue
): { transition: string } => ({
  transition:
    typeof value === 'string'
      ? value
      : isSingleTransition(value)
      ? serializeSingleTransition(value)
      : (value as SingleTransitionTuple[])
          .reduce(
            (acc: any, item, idx) =>
              acc +
              serializeSingleTransition(item) +
              (idx === value.length - 1 ? '' : ', '),
            ''
          )
          .trim(),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type TransitionDeclaration = {
  /**
   * Maps to CSS's **`transition`** property
   * @category RBProperty
   */
  transition: TransitionPropertyValue
}

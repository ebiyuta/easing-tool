import {
  EASE_IN_BACK_END_POINT,
  EASE_IN_BACK_START_POINT,
  EASE_IN_CUBIC_END_POINT,
  EASE_IN_CUBIC_START_POINT,
  EASE_IN_END_POINT,
  EASE_IN_OUT_END_POINT,
  EASE_IN_OUT_START_POINT,
  EASE_IN_QUADRATIC_END_POINT,
  EASE_IN_QUADRATIC_START_POINT,
  EASE_IN_SINE_END_POINT,
  EASE_IN_SINE_START_POINT,
  EASE_IN_START_POINT,
  EASE_OUT_END_POINT,
  EASE_OUT_START_POINT,
  FAST_OUT_LINEAR_IN_END_POINT,
  FAST_OUT_LINEAR_IN_START_POINT,
  FAST_OUT_SLOW_IN_END_POINT,
  FAST_OUT_SLOW_IN_START_POINT,
  IN_OUT_BACK_END_POINT,
  IN_OUT_BACK_START_POINT,
  IN_OUT_CUBIC_END_POINT,
  IN_OUT_CUBIC_START_POINT,
  IN_OUT_QUADRATIC_END_POINT,
  IN_OUT_QUADRATIC_START_POINT,
  IN_OUT_SINE_END_POINT,
  IN_OUT_SINE_START_POINT,
  LINEAR_END_POINT,
  LINEAR_START_POINT
} from '@/consts/EasingPreset'

/**
 * プリセットの管理に必要な配列
 * TODO: linearの並びが特殊な実装が必要そうなので、確認する
 * TODO: 並び順が担保されていないですが、一旦保留
 */
export const PresetList = [
  {
    id: 'linear',
    category: 'linear',
    displayName: 'linear',
    startHandle: LINEAR_START_POINT,
    endHandle: LINEAR_END_POINT
  },
  // カテゴリー「ease-in-out」
  {
    id: 'ease-in-out',
    category: 'ease-in-out',
    displayName: 'ease-in-out',
    startHandle: EASE_IN_OUT_START_POINT,
    endHandle: EASE_IN_OUT_END_POINT
  },
  {
    id: 'in-out-sine',
    category: 'ease-in-out',
    displayName: 'In Out · Sine',
    startHandle: IN_OUT_SINE_START_POINT,
    endHandle: IN_OUT_SINE_END_POINT
  },
  {
    id: 'in-out-quadratic',
    category: 'ease-in-out',
    displayName: 'In Out · Quadratic',
    startHandle: IN_OUT_QUADRATIC_START_POINT,
    endHandle: IN_OUT_QUADRATIC_END_POINT
  },
  {
    id: 'in-out-cubic',
    category: 'ease-in-out',
    displayName: 'In Out · Cubic',
    startHandle: IN_OUT_CUBIC_START_POINT,
    endHandle: IN_OUT_CUBIC_END_POINT
  },
  {
    id: 'fast-out-slow-in',
    category: 'ease-in-out',
    displayName: 'Fast Out, Slow In',
    startHandle: FAST_OUT_SLOW_IN_START_POINT,
    endHandle: FAST_OUT_SLOW_IN_END_POINT
  },
  {
    id: 'in-out-back',
    category: 'ease-in-out',
    displayName: 'In Out · Back',
    startHandle: IN_OUT_BACK_START_POINT,
    endHandle: IN_OUT_BACK_END_POINT
  },
  // カテゴリー「ease-in」
  {
    id: 'ease-in',
    category: 'ease-in',
    displayName: 'ease-in',
    startHandle: EASE_IN_START_POINT,
    endHandle: EASE_IN_END_POINT
  },
  {
    id: 'in-sine',
    category: 'ease-in',
    displayName: 'In · Sine',
    startHandle: EASE_IN_SINE_START_POINT,
    endHandle: EASE_IN_SINE_END_POINT
  },
  {
    id: 'in-quadratic',
    category: 'ease-in',
    displayName: 'In · Quadratic',
    startHandle: EASE_IN_QUADRATIC_START_POINT,
    endHandle: EASE_IN_QUADRATIC_END_POINT
  },
  {
    id: 'in-cubic',
    category: 'ease-in',
    displayName: 'In · Cubic',
    startHandle: EASE_IN_CUBIC_START_POINT,
    endHandle: EASE_IN_CUBIC_END_POINT
  },
  {
    id: 'in-back',
    category: 'ease-in',
    displayName: 'In · Back',
    startHandle: EASE_IN_BACK_START_POINT,
    endHandle: EASE_IN_BACK_END_POINT
  },
  {
    id: 'fast-out-linear-in',
    category: 'ease-in',
    displayName: 'Fast Out, Linear In',
    startHandle: FAST_OUT_LINEAR_IN_START_POINT,
    endHandle: FAST_OUT_LINEAR_IN_END_POINT
  },
  // カテゴリー「ease-out」
  {
    id: 'ease-out',
    category: 'ease-out',
    displayName: 'ease-out',
    startHandle: EASE_OUT_START_POINT,
    endHandle: EASE_OUT_END_POINT
  }
]

import {
  EASE_IN_OUT_END_POINT,
  EASE_IN_OUT_START_POINT,
  FAST_OUT_SLOW_IN_END_POINT,
  FAST_OUT_SLOW_IN_START_POINT,
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
 */
export const PresetList = [
  {
    id: 'linear',
    category: 'linear',
    displayName: 'linear',
    startHandle: LINEAR_START_POINT,
    endHandle: LINEAR_END_POINT
  },
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
  }
]

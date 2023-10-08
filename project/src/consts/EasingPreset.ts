// イージングをまとめたファイル

import { percentToPointPixel } from '@/utils/PercentToPointPixel'

/**
 * ベジェ曲線がlinearの時の座標
 * 0.0, 0.0, 1.0, 1.0
 */
export const LINEAR_START_POINT = {
  x: percentToPointPixel(0, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const LINEAR_END_POINT = {
  x: percentToPointPixel(1, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線がease-in-outの時の座標
 * 0.42, 0, 0.58, 1.0
 */
export const EASE_IN_OUT_START_POINT = {
  x: percentToPointPixel(0.42, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const EASE_IN_OUT_END_POINT = {
  x: percentToPointPixel(0.58, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線が In Out · Sine の時の座標
 * 0.37, 0, 0.63, 1
 */
export const IN_OUT_SINE_START_POINT = {
  x: percentToPointPixel(0.37, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const IN_OUT_SINE_END_POINT = {
  x: percentToPointPixel(0.63, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線が In Out · Quadratic の時の座標
 * 0.11, 0, 0.5, 0
 */
export const IN_OUT_QUADRATIC_START_POINT = {
  x: percentToPointPixel(0.11, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const IN_OUT_QUADRATIC_END_POINT = {
  x: percentToPointPixel(0.5, 'x'),
  y: percentToPointPixel(0, 'y')
}

/**
 * ベジェ曲線が In Out · Cubic の時の座標
 * 0.32, 0, 0.67, 0
 */
export const IN_OUT_CUBIC_START_POINT = {
  x: percentToPointPixel(0.32, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const IN_OUT_CUBIC_END_POINT = {
  x: percentToPointPixel(0.67, 'x'),
  y: percentToPointPixel(0, 'y')
}

/**
 * ベジェ曲線が Fast Out, Slow In の時の座標
 * 0, 0.45, 0.45, 1
 */
export const FAST_OUT_SLOW_IN_START_POINT = {
  x: percentToPointPixel(0, 'x'),
  y: percentToPointPixel(0.45, 'y')
}
export const FAST_OUT_SLOW_IN_END_POINT = {
  x: percentToPointPixel(0.45, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線がfast-out-linear-inの時の座標
 * 0.4, 0, 1, 1
 */
export const FAST_OUT_LINEAR_IN_START_POINT = {
  x: percentToPointPixel(0.4, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const FAST_OUT_LINEAR_IN_END_POINT = {
  x: percentToPointPixel(1, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線がease-outの時の座標
 * 0, 0, 0.58, 1.0
 */
export const EASE_OUT_START_POINT = {
  x: percentToPointPixel(0, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const EASE_OUT_END_POINT = {
  x: percentToPointPixel(0.58, 'x'),
  y: percentToPointPixel(1, 'y')
}

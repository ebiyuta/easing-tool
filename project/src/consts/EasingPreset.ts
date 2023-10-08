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
 * 0.45, 0, 0.55, 1
 */
export const IN_OUT_QUADRATIC_START_POINT = {
  x: percentToPointPixel(0.45, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const IN_OUT_QUADRATIC_END_POINT = {
  x: percentToPointPixel(0.55, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線が In Out · Cubic の時の座標
 * 0.65, 0, 0.35, 1
 */
export const IN_OUT_CUBIC_START_POINT = {
  x: percentToPointPixel(0.65, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const IN_OUT_CUBIC_END_POINT = {
  x: percentToPointPixel(0.35, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線が Fast Out, Slow In の時の座標
 * 0.42, 0, 0.55, 1
 * TODO: こちらは一般的に使われている用語ではないので、感覚で合わせています
 */
export const FAST_OUT_SLOW_IN_START_POINT = {
  x: percentToPointPixel(0.42, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const FAST_OUT_SLOW_IN_END_POINT = {
  x: percentToPointPixel(0.25, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線が In Out · Back の時の座標
 * 0.68, -0.6, 0.32, 1.6
 */
export const IN_OUT_BACK_START_POINT = {
  x: percentToPointPixel(0.68, 'x'),
  y: percentToPointPixel(-0.6, 'y')
}
export const IN_OUT_BACK_END_POINT = {
  x: percentToPointPixel(0.32, 'x'),
  y: percentToPointPixel(1.6, 'y')
}

/**
 * ベジェ曲線がease-inの時の座標
 * 0.42, 0, 1.0, 1.0
 */
export const EASE_IN_START_POINT = {
  x: percentToPointPixel(0.42, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const EASE_IN_END_POINT = {
  x: percentToPointPixel(1, 'x'),
  y: percentToPointPixel(1, 'y')
}

/**
 * ベジェ曲線がIn · Sineの時の座標
 * 0.12, 0, 0.39, 0
 */
export const EASE_IN_SINE_START_POINT = {
  x: percentToPointPixel(0.12, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const EASE_IN_SINE_END_POINT = {
  x: percentToPointPixel(0.39, 'x'),
  y: percentToPointPixel(0, 'y')
}

/**
 * ベジェ曲線がIn · Quadraticの時の座標
 * 0.11, 0, 0.5, 0
 */
export const EASE_IN_QUADRATIC_START_POINT = {
  x: percentToPointPixel(0.11, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const EASE_IN_QUADRATIC_END_POINT = {
  x: percentToPointPixel(0.5, 'x'),
  y: percentToPointPixel(0, 'y')
}

/**
 * ベジェ曲線がIn · Cubicの時の座標
 * 0.32, 0, 0.67, 0
 */
export const EASE_IN_CUBIC_START_POINT = {
  x: percentToPointPixel(0.32, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const EASE_IN_CUBIC_END_POINT = {
  x: percentToPointPixel(0.67, 'x'),
  y: percentToPointPixel(0, 'y')
}

/**
 * ベジェ曲線がIn · Backの時の座標
 * 0.36, 0, 0.66, -0.56
 */
export const EASE_IN_BACK_START_POINT = {
  x: percentToPointPixel(0.36, 'x'),
  y: percentToPointPixel(0, 'y')
}
export const EASE_IN_BACK_END_POINT = {
  x: percentToPointPixel(0.66, 'x'),
  y: percentToPointPixel(-0.56, 'y')
}

/**
 * ベジェ曲線がFast Out, Linear Inの時の座標
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

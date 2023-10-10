import { END_POINT, START_POINT } from '@/consts/Coordinate'

/**
 * ピクセル座標で受け取った値を0.0~1.0に変換する
 * @param pixel
 * @param direction
 */
export const PointPixelToPercent = (pixel: number, direction: 'x' | 'y') => {
  let range
  if (direction === 'x') {
    range = END_POINT.x - START_POINT.x
  } else {
    range = END_POINT.y - START_POINT.y
  }
  const scaledValue = Number(
    `${direction === 'x' ? (pixel - START_POINT.x) / range : (pixel - START_POINT.y) / range}`
  )

  return Math.floor(scaledValue * 100) / 100
}

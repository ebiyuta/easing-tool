import { END_POINT, START_POINT } from '@/consts/Coordinate'

/**
 * 0.0~1.0で受け取った値をピクセル座標に変換する
 * @param percent
 * @param direction
 */
export const percentToPointPixel = (percent: number, direction: 'x' | 'y') => {
  let range
  if (direction === 'x') {
    range = END_POINT.x - START_POINT.x
  } else {
    range = END_POINT.y - START_POINT.y
  }
  const scaledValue = percent * range
  const result = `${direction === 'x' ? START_POINT.x + scaledValue : START_POINT.y + scaledValue}`

  return Number(result)
}

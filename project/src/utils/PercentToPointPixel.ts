import { START_POINT } from '@/consts/Coordinate'

/**
 * 0.0~1.0で受け取った値を10~137に変換する
 * @param percent
 * @param direction
 */
export const percentToPointPixel = (percent: number, direction: 'x' | 'y') => {
  percent = Math.min(Math.max(percent, 0.0), 1.0)

  let range
  if (direction === 'x') {
    range = 137 - 10
  } else {
    range = 50 - 185
  }
  const scaledValue = percent * range
  const result = `${direction === 'x' ? 10 + scaledValue : 185 + scaledValue}`

  return Number(result)
}

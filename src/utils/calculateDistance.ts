/**
 * 二点間の距離を求める関数です。
 * @param point1
 * @param point2
 * @see https://lab.syncer.jp/Web/JavaScript/Snippet/34/
 */
export const calculateDistance = (
  point1: { x: number; y: number },
  point2: { x: number; y: number }
) => {
  const dx = point2.x - point1.x
  const dy = point2.y - point1.y
  const distance = Math.sqrt(dx * dx + dy * dy)
  return distance
}

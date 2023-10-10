/**
 * 座標プリセットの型定義
 */
export interface currentPresetType {
  id: string
  category: string
  displayName: string
  startHandle: {
    x: number
    y: number
  }
  endHandle: {
    x: number
    y: number
  }
}

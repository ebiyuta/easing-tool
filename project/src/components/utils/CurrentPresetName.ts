import {
  EASE_IN_OUT_END_POINT,
  EASE_IN_OUT_START_POINT,
  EASE_OUT_END_POINT,
  EASE_OUT_START_POINT,
  FAST_OUT_LINEAR_IN_END_POINT,
  FAST_OUT_LINEAR_IN_START_POINT,
  LINEAR_END_POINT,
  LINEAR_START_POINT
} from '@/consts/EasingPreset'

export const CurrentPresetName = (startHandle, endHandle) => {
  // TODO: オブジェクトの比較を容易にするためにlodashなどの導入検討
  if (
    startHandle.x === LINEAR_START_POINT.x &&
    startHandle.y === LINEAR_START_POINT.y &&
    endHandle.x === LINEAR_END_POINT.x &&
    endHandle.y === LINEAR_END_POINT.y
  ) {
    return 'linear'
  }
  if (
    startHandle.x === EASE_IN_OUT_START_POINT.x &&
    startHandle.y === EASE_IN_OUT_START_POINT.y &&
    endHandle.x === EASE_IN_OUT_END_POINT.x &&
    endHandle.y === EASE_IN_OUT_END_POINT.y
  ) {
    return 'ease-in-out'
  }
  if (
    startHandle.x === FAST_OUT_LINEAR_IN_START_POINT.x &&
    startHandle.y === FAST_OUT_LINEAR_IN_START_POINT.y &&
    endHandle.x === FAST_OUT_LINEAR_IN_END_POINT.x &&
    endHandle.y === FAST_OUT_LINEAR_IN_END_POINT.y
  ) {
    return 'fast-out-linear-in'
  }
  if (
    startHandle.x === EASE_OUT_START_POINT.x &&
    startHandle.y === EASE_OUT_START_POINT.y &&
    endHandle.x === EASE_OUT_END_POINT.x &&
    endHandle.y === EASE_OUT_END_POINT.y
  ) {
    return 'ease-out'
  }
}

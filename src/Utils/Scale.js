import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width]
console.log('scale h w', height, width)
//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = width >= 768 ? 450 : 320
const guidelineBaseHeight = height >= 1024 ? 700 : 568

export const scale = size => (shortDimension / guidelineBaseWidth) * size
export const verticalScale = size =>
  (longDimension / guidelineBaseHeight) * size
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor
export const moderateVerticalScale = (size, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor
export const screenHeight = height
export const screenWidth = width
export const s = scale
export const vs = verticalScale
export const ms = moderateScale
export const mvs = moderateVerticalScale

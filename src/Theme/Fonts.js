/**
 * This file contains all application's style relative to fonts
 */
import { Platform, StyleSheet } from '@/AppComponents'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */

let regular = 'Gayathri-Regular',
  semiBold = 'Gayathri-Semi-Bold',
  medium = 'Gayathri-Medium',
  italic = 'Gayathri-Italic',
  bold = 'Gayathri-Bold'

if (Platform.OS === 'android') {
  regular = 'Gayathri-Regular'
  semiBold = 'Gayathri-Semi-Bold'
  medium = 'Gayathri-Medium'
  italic = 'Gayathri-Italic'
  bold = 'Gayathri-Bold'
}

// =======================Regular========================================

export const h10_Regular = { fontFamily: regular, fontSize: 10 }
export const h11_Regular = { fontFamily: regular, fontSize: 11 }
export const h12_Regular = { fontFamily: regular, fontSize: 12 }
export const h13_Regular = { fontFamily: regular, fontSize: 13 }
export const h14_Regular = { fontFamily: regular, fontSize: 14 }
export const h15_Regular = { fontFamily: regular, fontSize: 15 }
export const h16_Regular = { fontFamily: regular, fontSize: 16 }
export const h17_Regular = { fontFamily: regular, fontSize: 17 }
export const h18_Regular = { fontFamily: regular, fontSize: 18 }
export const h19_Regular = { fontFamily: regular, fontSize: 19 }
export const h20_Regular = { fontFamily: regular, fontSize: 20 }
export const h21_Regular = { fontFamily: regular, fontSize: 21 }
export const h22_Regular = { fontFamily: regular, fontSize: 22 }
export const h23_Regular = { fontFamily: regular, fontSize: 23 }
export const h24_Regular = { fontFamily: regular, fontSize: 24 }
export const h25_Regular = { fontFamily: regular, fontSize: 25 }
export const h26_Regular = { fontFamily: regular, fontSize: 26 }
export const h27_Regular = { fontFamily: regular, fontSize: 27 }
export const h28_Regular = { fontFamily: regular, fontSize: 28 }
export const h29_Regular = { fontFamily: regular, fontSize: 29 }
export const h30_Regular = { fontFamily: regular, fontSize: 30 }
export const h31_Regular = { fontFamily: regular, fontSize: 31 }
export const h32_Regular = { fontFamily: regular, fontSize: 32 }
export const h33_Regular = { fontFamily: regular, fontSize: 33 }

// ==================================Bold======================================

export const h10_Bold = { fontFamily: bold, fontSize: 10 }
export const h11_Bold = { fontFamily: bold, fontSize: 11 }
export const h12_Bold = { fontFamily: bold, fontSize: 12 }
export const h13_Bold = { fontFamily: bold, fontSize: 13 }
export const h14_Bold = { fontFamily: bold, fontSize: 14 }
export const h15_Bold = { fontFamily: bold, fontSize: 15 }
export const h16_Bold = { fontFamily: bold, fontSize: 16 }
export const h17_Bold = { fontFamily: bold, fontSize: 17 }
export const h18_Bold = { fontFamily: bold, fontSize: 18 }
export const h19_Bold = { fontFamily: bold, fontSize: 19 }
export const h20_Bold = { fontFamily: bold, fontSize: 20 }
export const h21_Bold = { fontFamily: bold, fontSize: 21 }
export const h22_Bold = { fontFamily: bold, fontSize: 22 }
export const h23_Bold = { fontFamily: bold, fontSize: 23 }
export const h24_Bold = { fontFamily: bold, fontSize: 24 }
export const h25_Bold = { fontFamily: bold, fontSize: 25 }
export const h26_Bold = { fontFamily: bold, fontSize: 26 }
export const h27_Bold = { fontFamily: bold, fontSize: 27 }
export const h28_Bold = { fontFamily: bold, fontSize: 28 }
export const h29_Bold = { fontFamily: bold, fontSize: 29 }
export const h30_Bold = { fontFamily: bold, fontSize: 30 }
export const h31_Bold = { fontFamily: bold, fontSize: 31 }
export const h32_Bold = { fontFamily: bold, fontSize: 32 }
export const h33_Bold = { fontFamily: bold, fontSize: 33 }

// ================================SemiBold=====================================

export const h8_SemiBold = { fontFamily: semiBold, fontSize: 8 }
export const h9_SemiBold = { fontFamily: semiBold, fontSize: 9 }
export const h10_SemiBold = { fontFamily: semiBold, fontSize: 10 }
export const h11_SemiBold = { fontFamily: semiBold, fontSize: 11 }
export const h12_SemiBold = { fontFamily: semiBold, fontSize: 12 }
export const h13_SemiBold = { fontFamily: semiBold, fontSize: 13 }
export const h14_SemiBold = { fontFamily: semiBold, fontSize: 14 }
export const h15_SemiBold = { fontFamily: semiBold, fontSize: 15 }
export const h16_SemiBold = { fontFamily: semiBold, fontSize: 16 }
export const h17_SemiBold = { fontFamily: semiBold, fontSize: 17 }
export const h18_SemiBold = { fontFamily: semiBold, fontSize: 18 }
export const h19_SemiBold = { fontFamily: semiBold, fontSize: 19 }
export const h20_SemiBold = { fontFamily: semiBold, fontSize: 20 }
export const h21_SemiBold = { fontFamily: semiBold, fontSize: 21 }
export const h22_SemiBold = { fontFamily: semiBold, fontSize: 22 }
export const h23_SemiBold = { fontFamily: semiBold, fontSize: 23 }
export const h24_SemiBold = { fontFamily: semiBold, fontSize: 24 }
export const h25_SemiBold = { fontFamily: semiBold, fontSize: 25 }
export const h26_SemiBold = { fontFamily: semiBold, fontSize: 26 }
export const h27_SemiBold = { fontFamily: semiBold, fontSize: 27 }
export const h28_SemiBold = { fontFamily: semiBold, fontSize: 28 }
export const h29_SemiBold = { fontFamily: semiBold, fontSize: 29 }
export const h30_SemiBold = { fontFamily: semiBold, fontSize: 30 }
export const h31_SemiBold = { fontFamily: semiBold, fontSize: 31 }
export const h32_SemiBold = { fontFamily: semiBold, fontSize: 32 }
export const h33_SemiBold = { fontFamily: semiBold, fontSize: 33 }

// ==============================Medium====================================

export const h10_Medium = { fontFamily: medium, fontSize: 10 }
export const h11_Medium = { fontFamily: medium, fontSize: 11 }
export const h12_Medium = { fontFamily: medium, fontSize: 12 }
export const h13_Medium = { fontFamily: medium, fontSize: 13 }
export const h14_Medium = { fontFamily: medium, fontSize: 14 }
export const h15_Medium = { fontFamily: medium, fontSize: 15 }
export const h16_Medium = { fontFamily: medium, fontSize: 16 }
export const h17_Medium = { fontFamily: medium, fontSize: 17 }
export const h18_Medium = { fontFamily: medium, fontSize: 18 }
export const h19_Medium = { fontFamily: medium, fontSize: 19 }
export const h20_Medium = { fontFamily: medium, fontSize: 20 }
export const h21_Medium = { fontFamily: medium, fontSize: 21 }
export const h22_Medium = { fontFamily: medium, fontSize: 22 }
export const h23_Medium = { fontFamily: medium, fontSize: 23 }
export const h24_Medium = { fontFamily: medium, fontSize: 24 }
export const h25_Medium = { fontFamily: medium, fontSize: 25 }
export const h26_Medium = { fontFamily: medium, fontSize: 26 }
export const h27_Medium = { fontFamily: medium, fontSize: 27 }
export const h28_Medium = { fontFamily: medium, fontSize: 28 }
export const h29_Medium = { fontFamily: medium, fontSize: 29 }
export const h30_Medium = { fontFamily: medium, fontSize: 30 }
export const h31_Medium = { fontFamily: medium, fontSize: 31 }
export const h32_Medium = { fontFamily: medium, fontSize: 32 }
export const h33_Medium = { fontFamily: medium, fontSize: 33 }

// ===========================Italic=========================================

export const h10_Italic = { fontFamily: italic, fontSize: 10 }
export const h11_Italic = { fontFamily: italic, fontSize: 11 }
export const h12_Italic = { fontFamily: italic, fontSize: 12 }
export const h13_Italic = { fontFamily: italic, fontSize: 13 }
export const h14_Italic = { fontFamily: italic, fontSize: 14 }
export const h15_Italic = { fontFamily: italic, fontSize: 15 }
export const h16_Italic = { fontFamily: italic, fontSize: 16 }
export const h17_Italic = { fontFamily: italic, fontSize: 17 }
export const h18_Italic = { fontFamily: italic, fontSize: 18 }
export const h19_Italic = { fontFamily: italic, fontSize: 19 }
export const h20_Italic = { fontFamily: italic, fontSize: 20 }
export const h21_Italic = { fontFamily: italic, fontSize: 21 }
export const h22_Italic = { fontFamily: italic, fontSize: 22 }
export const h23_Italic = { fontFamily: italic, fontSize: 23 }
export const h24_Italic = { fontFamily: italic, fontSize: 24 }
export const h25_Italic = { fontFamily: italic, fontSize: 25 }
export const h26_Italic = { fontFamily: italic, fontSize: 26 }
export const h27_Italic = { fontFamily: italic, fontSize: 27 }
export const h28_Italic = { fontFamily: italic, fontSize: 28 }
export const h29_Italic = { fontFamily: italic, fontSize: 29 }
export const h30_Italic = { fontFamily: italic, fontSize: 30 }
export const h31_Italic = { fontFamily: italic, fontSize: 31 }
export const h32_Italic = { fontFamily: italic, fontSize: 32 }
export const h33_Italic = { fontFamily: italic, fontSize: 33 }

// let a=Array(24).fill(0).map((item,index)=>{
//   return `export const h${index+10}_Regular={fontFamily:regular,fontSize:${index+10}}`
// })

// console.log(a)

export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}

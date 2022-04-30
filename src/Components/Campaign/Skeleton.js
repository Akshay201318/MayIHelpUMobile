import React from 'react'
import { View } from '@/AppComponents'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { screenWidth } from '@/Lib/utils'
import { s } from '@/Lib/scale'

const Skeleton = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(240, 246, 253, 0.5)',
        paddingHorizontal: 15,
        paddingVertical: 20,
      }}
    >
      <View style={{ paddingHorizontal: 15, paddingBottom: 10 }}>
        <SkeletonPlaceholder>
          <View
            style={{
              height: 20,
              width: screenWidth / 1.5,
              borderRadius: 8,
            }}
          />
        </SkeletonPlaceholder>
      </View>
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
          }}
        >
          <View
            style={{
              width: screenWidth / 2 - 40,
              height: 230,
              borderRadius: 20,
              marginRight: s(16),
            }}
          />
          <View
            style={{
              width: screenWidth / 2 - 40,
              height: 230,
              borderRadius: 20,
            }}
          />
        </View>
      </SkeletonPlaceholder>
    </View>
  )
}
export { Skeleton }

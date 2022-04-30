import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from '../../AppComponents'
import { useTheme } from '@/Hooks'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

const CommentSkeleton = () => {
  return (
    <View>
      <View style={{ paddingHorizontal: 5 }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: 'rgba(240, 246, 253, 0.5)',
            width: '100%',
            padding: 10,
          }}
        >
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item padding={10} width={'100%'}>
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                <SkeletonPlaceholder.Item
                  width={40}
                  height={40}
                  borderRadius={50}
                />
                <SkeletonPlaceholder.Item marginLeft={10}>
                  <SkeletonPlaceholder.Item
                    width={120}
                    height={12}
                    borderRadius={4}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>

              <SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={10}
                  marginTop={10}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={10}
                  marginTop={5}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={10}
                  marginTop={5}
                  borderRadius={4}
                />
              </SkeletonPlaceholder.Item>

              <SkeletonPlaceholder.Item marginTop={20} flexDirection={'row'}>
                <SkeletonPlaceholder.Item
                  width={30}
                  height={8}
                  marginHorizontal={5}
                />
                <SkeletonPlaceholder.Item
                  width={30}
                  height={8}
                  marginHorizontal={5}
                />
                <SkeletonPlaceholder.Item
                  width={30}
                  height={8}
                  marginHorizontal={5}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
      </View>

      <View style={{ paddingHorizontal: 5, paddingLeft: 25, marginTop: 10 }}>
        <View
          style={{
            borderRadius: 20,
            backgroundColor: 'rgba(240, 246, 253, 0.5)',
            width: '100%',
            padding: 10,
          }}
        >
          <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item padding={10} width={'100%'}>
              <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                <SkeletonPlaceholder.Item
                  width={40}
                  height={40}
                  borderRadius={50}
                />
                <SkeletonPlaceholder.Item marginLeft={10}>
                  <SkeletonPlaceholder.Item
                    width={120}
                    height={12}
                    borderRadius={4}
                  />
                </SkeletonPlaceholder.Item>
              </SkeletonPlaceholder.Item>

              <SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={10}
                  marginTop={10}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={10}
                  marginTop={5}
                  borderRadius={4}
                />
                <SkeletonPlaceholder.Item
                  width={'100%'}
                  height={10}
                  marginTop={5}
                  borderRadius={4}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder>
        </View>
      </View>
    </View>
  )
}
export { CommentSkeleton }

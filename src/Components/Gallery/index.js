import React, { useEffect, useState, useCallback } from 'react'
import {
  View,
  PermissionsAndroid,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
  Text,
  FlatList,
} from '@/AppComponents'
import CameraRoll from '@react-native-community/cameraroll'
import { checkPermission, gallery_permission } from '@/Lib/utils'
import { ActionButton } from '@/Components/ActionButton'
import { s, vs } from '@/Lib/scale'
import CustomHeader from '@/Components/CustomHeader'
import { useTheme } from '@/Hooks'
import Colors from '@/Theme/Colors'
import { h18_Regular } from '@/Theme/Fonts'
import { upload } from '@/Services/AppServices'

const Gallery = props => {
  const { navigation, route } = props
  const { params: { selectedImages = [], setSelectedImages = () => {} } = {} } =
    route

  const [photos, setPhotos] = useState([])
  const [filter, setFilter] = useState('')
  const [node, setNode] = useState([])
  const [selected, setSelected] = useState([])
  console.log('🚀######### ~ file: index.js ~ line 34 ~ selected', selected)

  const [showFilter, setShowFilter] = useState(false)
  const [fetchJson, setFecthJson] = useState({
    end_cursor: '0',
    has_next_page: false,
  })
  const [endReach, setEndReach] = useState(false)

  const { Images, Layout } = useTheme()

  useEffect(() => {
    setSelected(selectedImages)
  }, [])

  useEffect(() => {
    getAccessAndPhotos()
  }, [endReach])

  const ITEM_HEIGHT = vs(100)

  async function getAccessAndPhotos() {
    const result = await checkPermission(gallery_permission)
    if (result && photos.length == fetchJson.end_cursor) {
      CameraRoll.getAlbums({
        assetType: 'Photos',
      }).then(res => setNode(res))
      getPhotos({ filter, reset: false })
    }
  }

  const getPhotos = async ({
    filter = '',
    reset = true,
    imageCaptured = false,
  }) => {
    const result = await checkPermission(gallery_permission)
    if (!result) {
      return
    }
    const params = {
      first: 51,
      assetType: 'Photos',
      include: ['filename', 'fileSize', 'mimeTypes', 'imageSize'],
    }

    if (filter !== '') {
      params['groupName'] = filter
    }

    if (
      !reset &&
      fetchJson.has_next_page &&
      fetchJson.end_cursor &&
      photos.length == fetchJson.end_cursor
    ) {
      {
        params['after'] = fetchJson.end_cursor
      }
    }
    CameraRoll.getPhotos(params)
      .then(r => {
        if (reset) {
          setPhotos(margeData({ data: r.edges, imageCaptured }))
        } else {
          setPhotos(pre => [
            ...pre,
            ...margeData({ data: r.edges, imageCaptured }),
          ])
        }
        setFecthJson({
          end_cursor: r.page_info.end_cursor,
          has_next_page: r.page_info.has_next_page,
        })
      })
      .catch(err => {
        console.log(
          '🚀######### ~ file: index.js ~ line 16 ~ useEffect ~ err',
          err,
        )
        //Error Loading Images
      })
  }

  const margeData = ({ data, imageCaptured = false }) => {
    var filteredPhotos = []
    data.forEach(item => {
      filteredPhotos.push(item.node)
    })
    console.log(
      '🚀######### ~ file: index.js ~ line 102 ~ imageCaptured',
      imageCaptured,
    )
    if (imageCaptured && filteredPhotos.length > 0) {
      setSelected(pre => [filteredPhotos[0], ...pre])
    }
    return filteredPhotos
  }

  const isImageSelected = image => {
    let output = false
    selected.forEach(item => {
      if (item.image.uri === image.image.uri) {
        output = true
      }
    })
    return output
  }

  const handlePick = image => {
    setShowFilter(false)
    if (isImageSelected(image)) {
      console.log('Filtering')
      let temp = selected.filter(item => item.image.uri !== image.image.uri)
      setSelected(temp)
    } else {
      setSelected(pre => [image, ...pre])
    }
  }

  const handleFilterPress = item => {
    setShowFilter(false)
    setFilter(item.title)
    getPhotos({ filter: item.title })
  }

  const handleCameraResponse = data => {
    setFilter('')
    getPhotos({ imageCaptured: true })
  }

  const fetchNext = () => {
    setEndReach(pre => !pre)
  }

  const getItemLayout = useCallback((data, index) => ({
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  }))

  const renderItem = useCallback(({ item, index }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handlePick(item)}
        style={{
          width: '32.2%',
          marginHorizontal: 2,
          marginVertical: 2,
        }}
      >
        {isImageSelected(item) && (
          <Image
            source={Images.selectedIcon}
            style={{
              position: 'absolute',
              zIndex: 9,
              right: 5,
              top: 5,
            }}
          />
        )}
        <Image
          key={index}
          style={{
            width: '100%',
            height: ITEM_HEIGHT,
            ...(isImageSelected(item)
              ? { borderColor: '#7FD6CB', borderWidth: 2 }
              : {}),
          }}
          resizeMode={"cover"}
          source={{ uri: item.image.uri }}
        />
      </TouchableOpacity>
    )
  })

  return (
    <Pressable
      onPress={() => {
        console.log('pressssssssssss')
      }}
      style={{ ...Layout.backgroundColor, flex: 1 }}
    >
      <CustomHeader
        title="Create Post"
        cameraFunc={data => handleCameraResponse(data)}
        backIcon={Images.crossIcon}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: s(20),
          paddingVertical: vs(10),
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => setShowFilter(pre => !pre)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                color: '#000',
                alignSelf: 'center',
                marginRight: s(6),
                ...h18_Regular,
              }}
            >
              {filter !== '' ? filter : 'Gallery'}
            </Text>
            <Image source={Images.arrowDown} />
          </TouchableOpacity>

          {node && showFilter && (
            <View
              style={{
                position: 'absolute',
                backgroundColor: '#fff',
                zIndex: 999,
                top: s(20),
                width: '100%',
                width: 200,
                padding: 10,
                left: -10,
              }}
            >
              {
                <>
                  <TouchableOpacity
                    style={{ padding: 10 }}
                    onPress={() => {
                      setShowFilter(false)
                      setFilter('')
                      getPhotos({})
                      // setFecthJson({end_cursor:"0",has_next_page:false})
                    }}
                  >
                    <Text style={{ color: '#000' }}>Gallery</Text>
                  </TouchableOpacity>
                  {node.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={{ padding: 10 }}
                        onPress={() => handleFilterPress(item)}
                        key={index}
                      >
                        <Text style={{ color: '#000' }}>{item.title}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </>
              }
            </View>
          )}
        </View>
        <ActionButton
          text={'save'}
          onPress={() => {
            setSelectedImages(selected)
            navigation.goBack()
          }}
          buttonStyle={selected.length ? { ...Colors.buttonActive } : {}}
          textStyle={selected.length ? { color: Colors.color.primary } : {}}
        />
      </View>

      {/* Listing of Photos */}

      <View>
        <FlatList
          data={photos}
          contentContainerStyle={{
            flexDirection: 'column',
            marginLeft: 3,
          }}
          numColumns={3}
          viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 95,
          }}
          renderItem={({ item, index }) => renderItem({ item, index })}
          onEndReached={fetchNext}
          keyExtractor={(item, index) => item.image.uri + index}
          onEndReachedThreshold={0.1}
          initialNumToRender={10}
          windowSize={5}
          maxToRenderPerBatch={5}
          updateCellsBatchingPeriod={30}
          removeClippedSubviews={false}
          getItemLayout={getItemLayout}
        />
      </View>
    </Pressable>
  )
}

export default Gallery

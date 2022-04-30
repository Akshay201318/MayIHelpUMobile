import React from 'react'
import { View, TextInput, Image, StyleSheet, Text } from '@/AppComponents'
import { h14_Bold, h14_Medium } from '@/Theme/Fonts'
import { useTheme } from '@/Hooks'
import { s, vs } from '@/Lib/scale'
import Colors from '@/Theme/Colors'

export const filter = (searchText, setSearch, searchList, setSearchList) => {
  setSearch(searchText)
  if (searchText != '') {
    const filteredData = searchList.filter(
      item => item.name && item.name.startsWith(searchText.toLowerCase()),
    )
    setSearchList(filteredData)
  } else {
    setSearchList(searchList)
  }
}

const SearchFilter = ({ value, setSearch, searchList, setSearchList }) => {
  const { Images } = useTheme()
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputOverlay}></View>
      <View style={styles.searchInput}>
        <TextInput
          style={styles.searchText}
          value={value}
          onChangeText={search =>
            filter(search, setSearch, searchList, setSearchList)
          }
          placeholder={'search group'}
          placeholderTextColor={Colors.color.grey}
        />
        <Image
          source={Images.search}
          style={{ ...styles.icon, ...styles.searchIcon }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: s(15),
  },
  searchInput: {
    flexDirection: 'row',
    position: 'absolute',
    numberOfLines: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#001A21',
    borderRadius: 50,
    right: s(2),
    bottom: vs(4),
    backgroundColor: Colors.backGroundColor.white,
    minHeight: vs(45),
    minWidth: s(60),
  },
  searchInputOverlay: {
    minWidth: s(60),
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 50,
    borderStyle: 'dashed',
    position: 'relative',
    left: s(1),
    minHeight: vs(45),
  },
  searchText: {
    width: '80%',
    ...h14_Bold,
    paddingLeft: 20,
    color: Colors.color.black,
    justifyContent: 'center',
  },
  searchIcon: {
    height: s(22),
    width: '20%',
    alignSelf: 'center',
  },
  icon: {
    height: vs(25),
    width: s(25),
    resizeMode: 'contain',
  },
})

export default SearchFilter

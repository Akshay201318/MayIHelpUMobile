import React from 'react'
import { WebView } from 'react-native-webview';
import { View, Text } from 'react-native'


 const mywebView = ({html, navigation}) => {
    return (
        <View style={{position: "absolute", zIndex: 20, width: "70%", height: "60%", display: "flex", justifyContent: "center" }}>
        <View style = {{ width: "100%", backgroundColor: "#FFF", justifyContent: "flex-end", alignItems:"flex-end"}}><Text style={{fontSize: 25, paddingRight: 15}} onPress = {() => navigation.goBack()}>x</Text></View>
        <WebView
            originWhitelist={['*']}
            source={{ html: html }}
            scalesPageToFit={false}
            style = {{height: "100%", width:"100%"}}
        />
        </View>
    )
}

export default mywebView;
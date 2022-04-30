import React from 'react'
import { View, Image, Text } from '@/AppComponents';
import { h18_Regular, h30_Bold } from '@/Theme/Fonts';
import { useTheme } from '@/Hooks';
import { ActionButton } from '@/Components/ActionButton';
import { s, vs } from '@/Lib/scale';
import { useDispatch } from 'react-redux';
import { setNetworkError } from '@/Store/Network';

const NetworkError=()=> {
    const dispatch = useDispatch()
    const handleRefresh=()=>{
        dispatch(setNetworkError({status:false}))
    }
    const {Images}=useTheme();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#fff" }}>
            <View style={{ alignItems: 'center', paddingHorizontal: 50 }}>
                <Image style={{ width: 200, height: 200 }} source={Images.newtorkError} resizeMode={"cover"} />
                <Text style={{ color: "#000", ...h30_Bold }}>Connection Error</Text>
                <Text style={{ color: "#000", ...h18_Regular, textAlign: "center" }} >Please check your netwrk connectivity and try again</Text>
                <View style={{marginVertical:vs(20)}}>
                <ActionButton text="Refresh" buttonStyle={{borderRadius:20,paddingHorizontal:s(30),backgroundColor:"#2A96B6",borderColor:"#2A96B6"}} textStyle={{color:"#fff"}}
                onPress={handleRefresh}
                
                
                />
                </View>
            </View>
        </View>
    )
}

export default NetworkError
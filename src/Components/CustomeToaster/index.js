import React, { useEffect } from 'react'
import Toast from 'react-native-root-toast';
import { View, Text } from '@/AppComponents';
import { screenHeight } from '@/Lib/utils';
import { h20_Bold } from '@/Theme/Fonts';
import { useDispatch, useSelector } from 'react-redux';
import { setToaster } from '@/Store/Toaster';

const CustomeToaster = () => {
    const toaster = useSelector(state => state.toaster);
    return (
        <Toast
            // visible={true}
            position={screenHeight / 2 + (100)}
            shadow={false}
            animation={false}
            hideOnPress={false}
            backgroundColor={"transparent"}
            opacity={1}
            duration={100}
            textColor={"red"}
        />

    )
}

export default CustomeToaster
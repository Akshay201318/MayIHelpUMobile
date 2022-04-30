import { h18_Bold } from "./Theme/Fonts";
import  Toast  from 'react-native-root-toast';
import { screenHeight } from "./Lib/utils";

export const ToastConfig={
    duration: Toast.durations.LONG,
    position: (screenHeight/2)+100,
    shadow: true,
    animation: true,
    hideOnPress: false,
    delay: 0,
    opacity:1,
    textStyle:{...h18_Bold},
    containerStyle:{borderRadius:20,backgroundColor:'#0E0D25',padding:20}
}

export const ShowToast=(msg,config)=>{
    Toast.show(msg, {...ToastConfig,...config});
}

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import { showMessage, hideMessage } from "react-native-flash-message";
// // import { AddUser, IsLoading, RemoveUser } from '../../redux/action/userActions/index';
// import GetLocation from 'react-native-get-location'

// let baseUrl = 'https://mayihelpu.herokuapp.com';
// // baseUrl = 'http://192.168.42.207:5000';


// const storeToken = async (token) => {
//     try {
//         if (token) {
//             const jsonValue = JSON.stringify(token)
//             AsyncStorage.setItem("MayIHelpU", jsonValue);
//         }
//     } catch (error) {
//         console.log("error in storing the token", error);
//     }
// }


// const getToken = async (setToken) => {
//     try {
//         let token = await AsyncStorage.getItem('MayIHelpU');
//         setToken(JSON.parse(token));
//     } catch (error) {
//         console.log("error in storing the token", error);
//     }
// }

// const removeToken = async ({navigation, dispatch}) => {
//     try {
//         // dispatch(IsLoading());     
//         await AsyncStorage.removeItem('MayIHelpU');
//             // dispatch(RemoveUser());
//             showMessage({
//                 message: "Logged out successfully!",
//                 type: "success",
//             });
//             navigation.navigate('SignIn');
//     }catch (error) {
//         showMessage({
//             message: "Something went wrong",
//             type: "danger",
//         });
//         console.log("error in deleting the token>>>>>>>>>>", error);
//     }
// }


// const signIn = async ({ formData, setUsername, setPassword, dispatch }) => {
//     delete formData.rememberMe
//     axios.post(`${baseUrl}/auth/login`, {...formData })
//         .then(function (response) {
//             const { data } = response;
//             const { tokens } = data;
//             const { access } = tokens;
//             let token = access.token;
//             if (token) {
//                 storeToken(token);
//                 getUserData(token, dispatch)
//             }
//             showMessage({
//                 message: "Logged in successfully!",
//                 type: "success",
//             });
//             setUsername('');
//             setPassword('');
//         })
//         .catch(function (error) {
//             showMessage({
//                 message: "Email or password is incorrect!",
//                 type: "danger",
//             });
//             console.log(error);
//         });
// }



// const signUp = (formData, navigation, setUsername, setEmail, setPassword) => {
//     axios.post(`${baseUrl}/users/signup`, { data: formData })
//         .then(function (response) {
//             console.log(response);
//             showMessage({
//                 message: "Signed up successfully!",
//                 type: "success",
//             });
//             navigation.navigate('SignIn');
//             setUsername('');
//             setEmail('');
//             setPassword('');
//         })
//         .catch(function (error) {
//             showMessage({
//                 message: "Something went wrong!",
//                 type: "danger",
//             });
//             console.log(error);
//         });
// }


// const googleAuth = ({ setShowWebView }) => {
//     return axios.get(`${baseUrl}/auth/google`)
//         .then(function (response) {
//             setShowWebView(response.data);
//             navigation.navigate('Home');
//             showMessage({
//                 message: "Logged in successfully!",
//                 type: "success",
//             });
//         })
//         .catch(function (error) {
//             showMessage({
//                 message: "Something went wrong!",
//                 type: "danger",
//             });
//             console.log(error);
//         });
// };


// const getUserData = (token, dispatch) => {
//     authAxios.get(`/users/getUserData`)
//         .then(function (response) {
//             // dispatch(AddUser(response.data));
//         })
//         .catch(function (error) {
//             showMessage({
//                 message: "Invalid Token Please Login Again!",
//                 type: "danger",
//             });
//         });
// }

// const loadLocation = async (setLocation, setErrorMsg) => {
//     setLocation(null);
//     setErrorMsg(null);

//     try {

//         GetLocation.getCurrentPosition({
//             enableHighAccuracy: true,
//             timeout: 15000,
//         })
//             .then(location => {
//                 console.log(location);
//                 const { latitude, longitude } = location;
//                 const ApiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBFmg_pT9dAW5bwMGch5bLmSA0S2KJFnDE`;

//                 fetch(ApiUrl).then(response => {
//                     const result = response.json();
//                     if (response.ok) {
//                         result.then(location =>{
//                             setLocation(location.results);
//                         })
//                     } else {
//                         setErrorMsg(result.message);
//                     }
//                 }).catch(err => {
//                     setErrorMsg(err);
//                 });
//             })
//             .catch(error => {
//                 const { code, message } = error;
//                 setErrorMsg(message);
//                 console.warn(code, message);
//             })

//     } catch (err) {
//         setErrorMsg(err.message);
//     }

// }

// const forgotPassword = async ({navigation, email}) => {
//     axios.post(`${baseUrl}/auth/forgot-password`, {email})
//         .then(function (response) {
//             const { data } = response;
//             const { otp, resetPasswordToken } = data;
//             showMessage({
//                 message: "OTP sent successfully!",
//                 type: "success",
//             });
//             navigation.navigate('ForgotPasswordOtp', {otp, resetPasswordToken});
//         })
//         .catch(function (error) {
//             showMessage({
//                 message: "Email or password is incorrect!",
//                 type: "danger",
//             });
//             console.log(error);
//         });
// }

// const verifyOtp = ({otp, userOtp, resetPasswordToken, navigation}) =>{
//     if(otp == userOtp ){
//         showMessage({
//             message: "OTP verified successfully!",
//             type: "success",
//         });
//         navigation.navigate('ChangePassword', {resetPasswordToken});
//     }else{
//         showMessage({
//             message: "OTP you have entered is incorrect!",
//             type: "danger",
//         });
//     }
// }

// const changePassword = async ({navigation, password, confirmPassword, resetPasswordToken}) => {
//   if(password == confirmPassword){
//     axios.post(`${baseUrl}/auth/reset-password`, {token:resetPasswordToken, password})
//         .then(function (response) {
//             showMessage({
//                 message: "Password changed successfully!",
//                 type: "success",
//             });
//             navigation.navigate('SignIn');
//         })
//         .catch(function (error) {
//             showMessage({
//                 message: "Something went wrong!",
//                 type: "danger",
//             });
//             console.log(error);
//         });
//   }else{
//     showMessage({
//         message: "Password and confirm password are not same!",
//         type: "danger",
//     });
//   }
// }


// export {
//     signUp,
//     signIn,
//     googleAuth,
//     removeToken,
//     getToken,
//     storeToken,
//     getUserData,
//     loadLocation,
//     forgotPassword,
//     verifyOtp,
//     changePassword
// };
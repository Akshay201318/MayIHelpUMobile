import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { forgotPassword, verifyOtp, changePassword } from './userMethods';

const Header = ({ navigation, text }) => {

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <Image
                    style={styles.backButton}
                    source={require('../../public/images/ic_back.png')}
                />
            </TouchableOpacity>
            <Text style={styles.headerText}>{text}</Text>
        </View>
    )
}

const ChangePassword = ({ route, navigation }) => {
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const {resetPasswordToken} = route.params;

    const submit = ()=>{
        changePassword({navigation, password, confirmPassword, resetPasswordToken});
    }
    return (
        <View>
            <Header navigation={navigation} text={"Change Password"} />
            <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Please enter your new password!</Text>
            <View>
                <TextInput
                    style={styles.inputBoxStyle}
                    secureTextEntry={true}
                    placeholder="New Password..."
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={styles.inputBoxStyle}
                    placeholder="Confirm Password..."
                    secureTextEntry={true}
                    onChangeText={text => setConfirmPassword(text)}
                    value={confirmPassword}
                />
                <TouchableOpacity style={styles.searchButton} onPress={()=> submit()}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Submit</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}


const EnterOtp = ({route, navigation }) => {
    const [otp, setOtp] = useState('');
    const {otp: userOtp, resetPasswordToken} = route.params;
    const verify = ()=>{
        verifyOtp({otp, userOtp, resetPasswordToken, navigation});
    }
    return (
        <View>
        <Header navigation={navigation} text={"Enter Otp"} />
        <View style={{padding: 30}}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Check your email!</Text>
            <View>
                <Text style={{ color: "grey", marginTop: 20 }}>You'll recieve an OTP to
                verify here so you can reset your account password
                 </Text>
                <TextInput
                    style={styles.inputBoxStyle}
                    placeholder="Enter OTP....."
                    onChangeText={text => setOtp(text)}
                    value={otp}
                />
                <TouchableOpacity style={styles.searchButton} onPress={()=> verify() }>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Verify</Text>
                </TouchableOpacity>
                <Text style={{ color: "grey", marginTop: 20 }}>If you don't see the email in your inbox
                check other places.It might be in junk, spam, social or other folders.
                </Text>
                <Text style={{ color: "blue", marginTop: 20, fontWeight: "bold" }}>Don't recieved an OTP? Resend OTP</Text>
            </View>
        </View>
        </View>
    )
}


const ResetPassword = ({ navigation }) => {
    const [email, setEmail] = useState("");

    const sendVerificationMail = ()=>{
        forgotPassword({navigation, email});
    }

    return (
        <View style={styles.container}>
            <Header navigation={navigation} text={"Forgot Password"} />
            <View style={{ padding: 30 }}>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Please enter your registered email!</Text>
            <View>
                <TextInput
                    style={styles.inputBoxStyle}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TouchableOpacity style={styles.searchButton} onPress = {()=> sendVerificationMail()}>
                    <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export {
     ResetPassword,
     EnterOtp,
     ChangePassword
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButtonContainer: {
        height: 10,
        width: 50
    },
    backButton: {
        width: 40,
        height: 40,
        flex: 0.8
    },
    header: {
        backgroundColor: "#17ffc6",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        paddingLeft: 5,
        justifyContent: "space-between"
    },
    headerText: {
        color: "white",
        fontSize: 25,
        flex: 3,
        paddingLeft: 50
    },
    inputBoxStyle: {
        width: "80%",
        minHeight: 45,
        backgroundColor: "white",
        borderColor: "#17ffc6",
        borderWidth: 1,
        color: "black",
        padding: 10,
        paddingLeft: 20,
        fontSize: 14,
        borderRadius: 50,
        marginTop: 20,
        zIndex: 2
    },
    searchButton: {
        backgroundColor: "#17ffc6",
        width: "40%",
        alignItems: "center",
        height: 40,
        justifyContent: "center",
        borderRadius: 50,
        marginTop: 20
    }
});
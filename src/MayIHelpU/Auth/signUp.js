import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import mywebView from './mywebView';
import { validateUserDetailsInSignUp, signUp } from "./ValidateUserDetals";
import { useTheme } from '@/Hooks';
// import { googleAuth } from './userMethods';

 const SignUp =({ navigation }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameErr, setUsernameErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
     const [showWebView, setShowWebView] = useState(false);
     const { Images } = useTheme();

    const submit = () => {
        if (validateUserDetailsInSignUp(username, email, password, setUsernameErr, setEmailErr, setPasswordErr)) {
            let formData = {
                name: username,
                email: email,
                password: password
            }
            signUp(formData, navigation, setUsername, setEmail, setPassword);
        }
    }
    return (
        <LinearGradient colors={['#17ffc6', '#03448c',]} style= {styles.container}>
            <KeyboardAwareScrollView  >
            {showWebView && mywebView({ html: showWebView, navigation })}
            <View style={styles.iconContainer}>
                    <Image
                        style={styles.stretch}
                        source={Images.logo}
                    />
                </View>

                <View style={styles.formContainer}>
                    <Text style={{ textAlign: "left", color: "white", fontSize: 30 }}> Sign Up </Text>
                    <TextInput
                        style={styles.inputBoxStyle}
                        placeholder="Username"
                        onChangeText={text => setUsername(text)}
                        value={username}
                    />
                    {usernameErr ? <Text style={{ color: "red", fontSize: 15, marginTop: 5 }}>{usernameErr}</Text> : null}
                    <TextInput
                        style={styles.inputBoxStyle}
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        value={email}
                    />

                    {emailErr ? <Text style={{ color: "red", fontSize: 15, marginTop: 5 }}>{emailErr}</Text> : null}
                    <TextInput
                        style={styles.inputBoxStyle}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={text => setPassword(text)}
                        value={password}
                    />
                    {passwordErr ? <Text style={{ color: "red", fontSize: 15, marginTop: 5 }}>{passwordErr}</Text> : null}
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => submit()}
                    >
                        <Text style={{ color: '#ffffff', fontSize: 20 }}>Sign Up</Text>
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontSize: 20, marginTop: 25 }}> Or Sign Up With</Text>
                    <View style={{ width: "70%", flexDirection: "row", justifyContent: "space-around", padding: 25 }}>
                        <TouchableOpacity>
                            <Image
                                style={styles.socialAuthLogo}
                                source={Images.google}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.socialAuthLogo}
                                source={Images.facebook}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <Text style={{ color: "white", fontSize: 20, paddingTop: 10,  }}>
                            Already have an account?
                     </Text>
                        <TouchableOpacity style={{ paddingTop: 10, }} onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: "white", fontSize: 20 }}>
                                Sign In
                      </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    );
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    stretch: {
        width: 100,
        height: 100,
        borderRadius: 30
    },
    iconContainer: {
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop: 50
    },
    formContainer: {
        paddingTop:10,
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        width: '100%'
    },
    inputBoxStyle: {
        width: "80%",
        minHeight: 45,
        backgroundColor: "white",
        color: "black",
        padding: 10,
        fontSize: 14,
        borderRadius: 50,
        marginTop: 20,
        zIndex: 2,
        paddingLeft: 20,
    },
    signUpButton: {
        width: "80%",
        marginTop: 20,
        minHeight: 45,
        padding: 10,
        borderRadius: 50,
        backgroundColor: "#17ffc6",
        alignItems: "center",
        justifyContent: "center"
    },
    socialAuthLogo: {
        height: 50,
        width: 50,
        borderRadius: 100,
    }
});


import { useTheme } from '@/Hooks';
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch } from 'react-redux';

import { Text, StyleSheet, View, TextInput, Image, TouchableOpacity, ScrollView, Switch } from '@/AppComponents';
import { validateUserDetailsInSignIn } from './ValidateUserDetals';
import { loginUser } from '@/Services/user';

const SignIn = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [emailErr, setEmailErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { Images } = useTheme();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     return () => {
    //         setUsername(''); 0
    //         setPassword('');
    //         setRememberMe('');
    //         setEmailErr('');
    //         setPasswordErr('');
    //     }
    // }, []);

    const submit = () => {
        if (validateUserDetailsInSignIn(username, password, setEmailErr, setPasswordErr)) {
            let formData = {
                email: username,
                password: password,
                rememberMe: rememberMe
            }
            dispatch(loginUser({ formData })).then(res => {
               setEmailErr('');
               setPasswordErr('');
              });
        }
    }

    return (
            <LinearGradient colors={['#17ffc6', '#03448c',]} style={styles.container}>
                <ScrollView>
                    <View>
                        <View style={styles.iconContainer}>
                        <Image
                                style={styles.appIcon}
                                source={Images.logo}
                            />
                        </View>

                        <View style={styles.formContainer}>
                        <Text style={{ textAlign: "left", color: "white", fontSize: 30, paddingTop: 5 }}> Sign In </Text>
                        <View style={styles.inputBoxStyle}>
                            <TextInput
                                placeholder="Username"
                                onChangeText={text => setUsername(text)}
                                value={username}
                            />
                            </View>
                        {emailErr ? <Text style={{ color: "red", fontSize: 15, paddingTop: 5 }}>{emailErr}</Text> : null}
                        <View style={styles.inputBoxStyle}>
                            <TextInput
                                secureTextEntry={!showPassword}
                                placeholder="Password"
                                onChangeText={text => setPassword(text)}
                                value={password}
                            />
                            <TouchableOpacity
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress = {() => setShowPassword(!showPassword)}
                            >
                                { !showPassword && <Image source={Images.viewIcon} style={{ height: 24, width: 24 }} />}
                                { showPassword && <Image source={Images.hideIcon} style={{ height: 22, width: 22 }} />}
                            </TouchableOpacity>
                            </View>
                            {passwordErr ? <Text style={{ color: "red", fontSize: 15, marginTop: 5 }}>{passwordErr}</Text> : null}
                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%", paddingTop: 20 }}>
                                <View style={{ flexDirection: "row" }} >
                                    <Switch
                                        trackColor={{ false: "#767577", true: "#03448c" }}
                                        thumbColor={rememberMe ? "#17ffc6" : "#f4f3f4"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={() => setRememberMe(!rememberMe)}
                                        value={rememberMe}
                                    />
                                    <Text style={{ color: '#ffffff', fontSize: 15 }}>Remember Me</Text>
                                </View>
                                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} >
                                    <Text style={{ color: '#ffffff', fontSize: 15 }}>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.signUpButton}
                                onPress={() => submit()}
                            >
                                <Text style={{ color: '#ffffff', fontSize: 20, textAlign: 'center' }}>Sign In</Text>
                            </TouchableOpacity>
                            <Text style={{ color: "white", fontSize: 20, paddingTop: 30 }}> Or Sign In With</Text>
                            <View style={{ width: "70%", flexDirection: "row", justifyContent: "space-around", padding: 30 }}>
                                <TouchableOpacity>
                                <Image
                                    resizeMode={'cover'}
                                        style={styles.socialAuthLogo}
                                        source={Images.google}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                <Image
                                    resizeMode={'cover'}
                                        style={styles.socialAuthLogo}
                                        source={Images.facebook}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <Text style={{ color: "white", fontSize: 20 }}>
                                    Don't have an account?
                     </Text>
                                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={{ color: "white", fontSize: 20 }}>
                                        Sign Up
                      </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </LinearGradient>

    );
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    appIcon: {
        width: 100,
        height: 100,
        borderRadius: 30,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    formContainer: {
        paddingTop: "5.6%",
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
        fontSize: 14,
        borderRadius: 50,
        marginTop: 20,
        zIndex: 2,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    signUpButton: {
        width: "80%",
        marginTop: 20,
        minHeight: 45,
        padding: 10,
        borderRadius: 50,
        backgroundColor: "#17ffc6",
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center'
    },
    socialAuthLogo: {
        height: 40,
        width: 40,
        borderRadius: 100,
    }
});


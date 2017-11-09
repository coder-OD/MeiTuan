import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    BackAndroid,
    Image,
    TextInput,
    TouchableOpacity,
    ToastAndroid,
    Alert
} from 'react-native';

import OrderBar from "../components/OrderBar";
import Screen from "../utils/Screen";
export default class LoginPage extends Component{

    static defaultProps={
        url:'http://47.93.30.78:8080/MeiTuan/login'
    }

    state = {
        username : "",
        password : "",
    }


    /**
     * 函数
     * @returns {boolean}
     */
    onBackAndroid =  () =>  {
        const navigator  = this.props.navigator;
        /*拿到当前已经跳转了多少个页面*/
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：'+routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        }
        return false;//默认行为
    };

    /***
     * 界面渲染之前调用
     */
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    render(){
        return(

            <View style={styles.viewStyle}>
                {/*顶部的导航条*/}
                <OrderBar leftName="登录" hasArrow={true} navigator={this.props.navigator} ></OrderBar>

                {/*内容部分*/}
                <View style={styles.container}>
                    {/*logo*/}
                    <Image source={{uri:'header_icon'}} style={styles.ImageStyle}></Image>
                    {/*输入用户名和密码*/}
                    <View style={{marginTop:20}}>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入用户名'
                            style={styles.text1Input}
                            onChangeText={(username)=>this.setState({
                                username:username,
                            })}
                        >
                        </TextInput>
                        <TextInput
                            underlineColorAndroid={'transparent'}
                            placeholder='输入密码'
                            secureTextEntry={true}
                            style={styles.text1Input}
                            onChangeText={(password)=>this.setState({
                                password:password,
                            })}
                        ></TextInput>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={()=> this.onClickLogin()}
                    >
                        <Text style={styles.loginStyle}>登录</Text>
                    </TouchableOpacity>

                    {/*设计*/}
                    <View style={styles.viewSettingStyle}>
                        <Text style={styles.textOutLogin} >无法登录</Text>
                        <Text style={[styles.textOutLogin,{textAlign:'right'}]} >新用户</Text>
                    </View>

                    {/*其它登录方式*/}
                    <View style={styles.viewOtherStyle}>
                        <Text>其他登录方式</Text>
                        <Image source={{uri:'share_ic_base_share_qq'}} style={styles.loginImage}></Image>
                        <Image source={{uri:'share_ic_base_share_sina_weibo'}} style={styles.loginImage}></Image>
                        <Image source={{uri:'share_ic_base_share_weixin'}} style={styles.loginImage}></Image>
                    </View>
                </View>

            </View>


        )
    }

    /*点击登录，验证密码*/
    onClickLogin(){
        var username = this.state.username;
        var password = this.state.password;
        if(username == "" || password == ""){
            // ToastAndroid.showWithGravity(
            //     '帐号密码不能为空',
            //     ToastAndroid.SHORT,
            //     ToastAndroid.CENTER,
            // )
            Alert.alert(
                '提示',
                '用户名和密码不能为空',
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed!')},
                ]
            )

        }else {
            fetch(this.props.url,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body:"username="+username+"&password="+password
            })
            //拿到请求结果
                .then((response)=>response.json())
                .then((responseJson)=>{
                    if(responseJson.state == 200){

                        //返回上一个界面  navigator
                        this.props.navigator.pop();
                        if(this.props.getUser){
                            this.props.getUser(responseJson);
                        }
                    }

                        ToastAndroid.showWithGravity(
                            responseJson.result,
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                        )

                })
        }
    }

}

const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'#dddddd'
    },

    container: {
        flex:1,
        flexDirection:'column',
        alignItems: 'center'
    },
    ImageStyle: {
        width: 90,
        height: 90,
        marginTop:40,
        borderRadius:50,
    },
    text1Input: {
        borderWidth: 0,
        borderColor: 'gray',
        width: Screen.w - 20,
        height: 30,
        padding: 0,
        marginTop: 10,
        paddingLeft: 10,
        backgroundColor: 'white',
        borderRadius:6,
    },
    loginStyle: {
        width: Screen.w - 20,
        height: 30,
        borderWidth: 0,
        backgroundColor: '#49A0F8',
        marginTop:20,
        borderRadius:5,
        color:'white',
        fontSize:14,
        textAlign:'center',
        paddingTop:6,
    },
    viewSettingStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        width:Screen.w-20
    },
    textOutLogin:{
        color:'#49A0F8',
        flex:1,
    },
    viewOtherStyle:{
        width:Screen.w-20,
        height:40,

        position:'relative',
        top:100,
        //主轴方向为水平
        flexDirection:'row',
        //它里面的内容垂直居中
        alignItems:'center'
    },
    loginImage: {
        width: 35,
        height: 35,
        marginLeft: 8,
    },

})


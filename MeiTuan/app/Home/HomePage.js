import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import TopBar from "../components/TopBar";
import HomeTop from "./HomeTop";
import HomeCenter from "./HomeCenter";
import HomeBottom from "./HomeBottom";
import DividingLine from "../components/DividingLine";
export default class HomePage extends Component{

    constructor(props){
        super(props)

            /*1.状态机*/
            this.state={
                categorys:[],
                thridItems:[],
                fourItems:[],
                goods:[],
            }

    }

    render(){
        return(
            <View style={styles.viewStyle}>
                {/*顶部的导航条*/}
                <TopBar></TopBar>
                {/*滚动视图*/}
                <ScrollView style={styles.scrollview}>
                    {/*顶部商品*/}
                    <HomeTop categorys={this.state.categorys}></HomeTop>
                    <DividingLine/>
                    {/*中间三个item的组件*/}
                    <HomeCenter itemdatas={this.state.thridItems}></HomeCenter>
                    {/*中间四个item的组件*/}
                    <HomeCenter itemdatas={this.state.fourItems}></HomeCenter>
                    <DividingLine/>
                    {/*猜你喜欢*/}
                    <Text style={{
                        textAlign:"center",
                        marginTop:10,
                        marginBottom:10,
                    }}>猜你喜欢</Text>
                    {/*底部商品列表*/}
                    <HomeBottom goods={this.state.goods}></HomeBottom>

                </ScrollView>

            </View>
        )
    }

    /*界面渲染完毕后调用*/
    componentDidMount() {
        /*发起网络请求*/
        fetch("http://47.93.30.78:8080/MeiTuan/home",{
            method:"GET",
        })
        /*拿到返回结果*/
            .then((reponse)=>reponse.json() )
            .then((responseJson)=>{
                console.log(responseJson);
                this.setState({
                    categorys:responseJson.categorys,
                    thridItems:responseJson.thridItems,
                    fourItems:responseJson.fourItems,
                    goods:responseJson.goods,
                })
            })
            .catch((error)=>{
                alert(error);
            })
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        // backgroundColor:'royalblue'
    },
    scrollview:{
        flex:1,
    }
})

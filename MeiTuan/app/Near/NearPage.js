import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import NearBar from "../components/NearBar";
var option={
    leftName:'广州天河',
    playHolder:'商圈',
}
import All from "./TabPage/All";
import Food from "./TabPage/Food";
import Hotel from "./TabPage/Hotel";
import Play from "./TabPage/Play";
var ScrollableTabView = require("../../react-native-scrollable-tab-view");
export default class NearPage extends Component{

    static defaultProps = {
        url:"http://47.93.30.78:8080/MeiTuan/near",
    }

    state = {
        foodItem:{},
        hotelItem:{},
        playItem:{},
        allItem:{},
        hasData:false,
    }

    render(){
        if(!this.state.hasData){
            return(
                <View style={styles.viewStyle}>
                    {/*顶部的导航条*/}
                    <NearBar option={option}></NearBar>

                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>


                        <Text>正在拼命加载...</Text>
                    </View>

                </View>
            )
        }
        else {
            return(
                <View style={styles.viewStyle}>
                    {/*顶部的导航条*/}
                    <NearBar></NearBar>

                    <ScrollableTabView
                        tabBarBackgroundColor='#F5FCFF'
                        tabBarActiveTextColor='#FF4645'
                        tabBarInactiveTextColor='gray'
                        tabBarUnderlineStyle={{backgroundColor:'#FF4645',height:1}}
                    >
                        <Food tabLabel='享美食' foodItem={this.state.foodItem}></Food>
                        <Food tabLabel='住酒店' foodItem={this.state.hotelItem}></Food>
                        <Food tabLabel='爱玩' foodItem={this.state.playItem}></Food>
                        <Food tabLabel='全部' foodItem={this.state.allItem}></Food>

                    </ScrollableTabView>
                </View>
            )
        }

    }

    componentDidMount() {
        fetch(this.props.url,{
            method:"GET",
        })
            .then((response)=>response.json())
            .then((resposnJson)=>{
                // console.log(resposnJson);
                this.setState({
                    foodItem:resposnJson.foodItem,
                    hotelItem:resposnJson.hotelItem,
                    playItem:resposnJson.playItem,
                    allItem:resposnJson.allItem,
                    hasData:true,

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
        // backgroundColor:'pink'
    }
})

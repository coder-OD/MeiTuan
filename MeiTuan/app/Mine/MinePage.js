import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    ScrollView,
    TouchableOpacity,
    InteractionManager
} from 'react-native';

var MineBean = require("../localdata/MineBean2.json");

import MineBar from "../components/MineBar";
import DividingLine from "../components/DividingLine";
import MineItemView from "../components/MineItemView";
import DividingSmallLine from "../components/DividingSmallLine";
import LoginPage from "../Login/LoginPage"
export default class MinePage extends Component{

    constructor(props){
        super(props)
        /*状态机:为了界面更新*/
        this.state = {
            Icons:MineBean.TopBar,
            Items:MineBean.items,
            headerItem:MineBean.headerItem,
            userId:"",
        }
        that = this;
    }

    render(){
        return(
            <View>
                {/*顶部导航条*/}
                <MineBar Icons={this.state.Icons}></MineBar>

                {/*头部*/}
                {this.renderHeaderView()}

                {/*滚动的视图*/}
                <ScrollView>
                    {/*渲染每一个Item*/}
                    {this.renderItems()}
                </ScrollView>
            </View>
        )
    }

    /*渲染头部*/
    renderHeaderView(){
        /*拿到头部数据*/
        var headerData = this.state.headerItem;
        return(
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={ ()=>this.goToLogin() }
                style={styles.viewHeaderStyle}>
                {/*左边*/}
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image
                        source={{uri:headerData.headerImage}}
                        style={styles.headerImageStyle}
                    ></Image>
                </View>

                {/*右边*/}
                <View style={{justifyContent:"center"}}>
                {/*上*/}
                <View style={styles.levelStyle}>
                    <Text  style={styles.textHeader1Style}>{headerData.userName}</Text>
                    <Image
                        source={{uri:headerData.leveImage}}
                        style={styles.image1Style}
                    ></Image>
                </View>
                    {/*下*/}
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={styles.textHeader2Style}>{headerData.descrption}</Text>
                        <Image source={{uri:'daily_recomm_arrow'}}
                               style={{width:6,height:10,marginTop:1}}
                        ></Image>
                    </View>
                </View>

            </TouchableOpacity>
        )
    }
    
    /*跳转到登录界面*/
    goToLogin(){

        /**
         * 当任务/动画执行完之后执行里面的函数
         * */
        InteractionManager.runAfterInteractions(()=>{
            this.props.navigator.push({
                component:LoginPage,
                params:{
                    id:"124",
                    getUser(user){
                        // console.log(user);
                        //1.修改状态机中的变量
                        that.setState({
                            Icons:user.topBar,
                            Items:user.items,
                            headerItem:user.headerItem,
                            userId:user.id,
                        })

                    }
                }
            })
        })


    }

    /**
     * "items":[
     [
     {"icon":"user_main_wallet","titleLeft":"我的钱包","titleRight":"办信用卡"},
     {"icon":"user_main_balance","titleLeft":"余额","titleRight":"￥0.00"},
     {"icon":"order_ic_vector_unused_new","titleLeft":"抵用卷","titleRight":"0"}
     ],

     [
     {"icon":"takeout_ic_user_selected","titleLeft":"好友去哪","titleRight":""},
     {"icon":"order_ic_vector_uncomment_new","titleLeft":"我的评价","titleRight":""},
     {"icon":"user_main_collect","titleLeft":"我的收藏","titleRight":""}
     ],

     [
     {"icon":"user_main_point","titleLeft":"积分商城","titleRight":""},
     {"icon":"user_main_membercenter","titleLeft":"关于美团","titleRight":""}

     ]
     ]*/
    renderItems(){
        var MineItems = [];
        var Items = this.state.Items
        for (var i = 0; i < Items.length; i++) {
            var MineItem = Items[i];

            //添加大分界线
            MineItems.push(
                <DividingLine key={i}></DividingLine>
            )


            for (var j = 0; j < MineItem.length; j++) {
                var itemData = MineItem[j];
                if(j == MineItem.length - 1){
                    MineItems.push(
                        <View key={i+" "+j}>
                            <MineItemView itemData = {itemData}></MineItemView>
                        </View>
                    )
                }
                else{
                    MineItems.push(
                        <View key={i+" "+j}>
                            <MineItemView itemData = {itemData}></MineItemView>
                            <DividingSmallLine/>
                        </View>
                    )
                }

            }

        }

        //添加大分界线
        MineItems.push(
            <DividingLine key={'10000'}></DividingLine>
        )

        return MineItems;
    }


}

const styles=StyleSheet.create({
    viewHeaderStyle:{
        height:60,
        backgroundColor:"#06C1AE",
        flexDirection:"row"

    },
    headerImageStyle:{
        width:45,
        height:45,

        marginLeft:10,
        marginRight:10,
    },
    levelStyle:{
        flexDirection:"row",
        alignItems:"center",
    },
    image1Style:{
        width:14,
        height:14,

    },
    textHeader1Style:{
        color:'white',
        fontSize:16,
        marginRight:5
    },
    textHeader2Style:{
        color:'white',
        fontSize:12,
        marginRight:5
    }
})
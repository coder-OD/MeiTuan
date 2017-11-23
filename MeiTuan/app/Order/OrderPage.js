/**
 * Created by Administrator on 2017/11/7.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl
} from 'react-native';

import OrderItemView from './OrderItemView';
import OrderItemBar from './OrderItemBar';
import OrderBar from '../components/OrderBar';
var orderPageBean=require('../localdata/OrderPageBean.json');
import NearItem from '../components/NearItem';
import  DivdingLine from '../components/DividingLine';

var options=[
    {'leftName':'我的订单','rightName':'全部订单'},
    {'leftName':'最近浏览','rightName':'查看全部'},
]




export  default class OrdePage extends Component{


    /**
     * 状态机
     * @type {{}}
     */
    state={
        orderPageBean:orderPageBean,
        isRefreshing:false,
    }

    render(){

        return (
            <View style={styles.viewStyle}>
                <OrderBar leftName="订单"></OrderBar>
                {/*可滚动的视图*/}
                <ScrollView style={{flex:1}}

                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isRefreshing}
                                    onRefresh={()=>this._onRefresh()}

                                    tintColor="#ff0000"
                                    title="Loading..."
                                    titleColor="#00ff00"

                                    colors={['#06C1AE']}
                                    progressBackgroundColor="white"
                                />
                            }

                >
                    {/*标题OrderItemView*/}
                    <OrderItemView option={options[0]}></OrderItemView>

                    {/*订单的导航条OrderItemBar*/}
                    <OrderItemBar orderbars={this.state.orderPageBean.orderbars}></OrderItemBar>

                    {/*最近订单*/}
                    <Text style={{
                        backgroundColor:'#dddddd',
                        height:20,
                        fontSize:12,
                        paddingLeft:10,
                        paddingTop:1

                    }}>最近订单</Text>

                    {/*最近订单的列表*/}
                    {this.renderNearOrderItems(this.state.orderPageBean.nearOrder)}

                    {/*分界线*/}
                    <DivdingLine/>

                    {/*标题OrderItemView*/}
                    <OrderItemView option={options[1]}></OrderItemView>

                    {/*渲染最近浏览列表*/}
                    {this.renderNearOrderItems(this.state.orderPageBean.nearBeans)}


                </ScrollView>
            </View>
        )
    }


    /**
     * 下拉刷新的回调(当手指离开屏幕的时候回调)
     * @private
     */
    _onRefresh(){
        //1.继续显示下拉刷新的图标
        this.setState({
            isRefreshing:true,
        })
        //模拟下拉刷新
        //2.请求网络
        fetch('http://47.93.30.78:8080/MeiTuan/order')
            .then( (response)=>response.json() )
            .then( (responseJson)=>{
                //3.修改状态机中orderPageBean变量（刷新界面）
                this.setState({
                    orderPageBean:responseJson,
                    isRefreshing:false,
                })
            })
            .catch((error)=>{
                alert(error)
            })


    }

    /**
     * 渲染最近订单列表
     */
    renderNearOrderItems(nearOrders){
        //1.定义以组件的数组
        var NearOrderItems=[];
        //2.遍历
        for(var i=0;i<nearOrders.length;i++){
            //3.拿到nearOrders数组中的每一项内容
            var nearOrder=nearOrders[i];
            //4.给组件数组添加组件
            NearOrderItems.push(
                <View key={i}>
                    <NearItem rowData={nearOrder}></NearItem>
                </View>
            )
        }

        return NearOrderItems;

    }

}

const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'#F5FCFF'
    }
})


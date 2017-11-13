import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';

import OrderBar from "../components/OrderBar";
import OrderItemView from "./OrderItemView";
import OrderItemBar from "./OrderItemBar";
var orderPageBean = require("../localdata/OrderPageBean.json");
var options=[
    {'leftName':'我的订单','rightName':'全部订单'},
    {'leftName':'最近浏览','rightName':'查看全部'},
]
export default class OrderPage extends Component{

    state = {
        orderPageBean:orderPageBean,

    }

    render(){
        return(
            <View style={styles.viewStyle}>
                {/*顶部的导航条*/}
                <OrderBar leftName="订单"></OrderBar>

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

            </View>
        )
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        // backgroundColor:'lightgreen',
    }
})

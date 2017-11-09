import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import OrderBar from "../components/OrderBar";
export default class OrderPage extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                {/*顶部的导航条*/}
                <OrderBar leftName="订单"></OrderBar>

                <Text>Order</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'lightgreen',
    }
})

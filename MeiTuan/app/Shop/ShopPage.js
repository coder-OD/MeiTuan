import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import OrderBar from "../components/OrderBar";
export default class ShopPage extends Component{

    state = {
        url:'http://i.meituan.com/s/guangzhou-%E5%B9%BF%E4%B8%9C%E9%87%91%E8%9E%8D%E5%AD%A6%E9%99%A2?cid=1&cateType=poi'
    }

    render(){
        return (
            <View style={styles.viewStyle}>
                {/*顶部的导航条*/}
                <OrderBar leftName="逛一逛"
                          onPress={()=>this.props.navigator.pop()}
                ></OrderBar>

                {/*浏览器*/}
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{uri: this.state.url}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={this.state.scalesPageToFit}
                />
            </View>
        );
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        // backgroundColor:'lightgreen',
    },
    webView:{
        flex:1,
    }
})

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class DividingSmallLine extends Component{
    render(){
        return(

            <View style={styles.viewStyle}></View>

        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height:1,
        backgroundColor:"#ddd",
    }
})
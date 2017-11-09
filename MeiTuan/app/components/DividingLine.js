import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class DividingLine extends Component{
    render(){
        return(

            <View style={styles.viewStyle}></View>

        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height:10,
        backgroundColor:"#cccccc",
    }
})
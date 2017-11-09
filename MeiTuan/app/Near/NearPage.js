import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import NearBar from "../components/NearBar"
export default class NearPage extends Component{
    render(){
        return(
            <View style={styles.viewStyle}>
                {/*顶部的导航条*/}
                <NearBar></NearBar>

                <Text>Near</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        flex:1,
        backgroundColor:'pink'
    }
})

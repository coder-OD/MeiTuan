import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import Screen from "../utils/Screen";

export default class HomeCenter extends Component{

    static defaultProps = {
        itemdatas:[],

    }

    render(){

        return(
            <View style={styles.viewStyle}>
                {this.renderItems()}
            </View>
        )
    }

    renderItems(){
        var Items = [];
        var itemdatas = this.props.itemdatas;
        var nums = itemdatas.length;
        if(nums <= 0){
            return;
        }

        for (var i = 0; i < nums; i++) {
            var item = itemdatas[i];
            var bgColor=(nums-1)==i?'white':'#dddddd'
            Items.push(
                <TouchableOpacity key={i}
                                  style={[styles.itemStyle,
                                      {borderRightWidth:1,borderRightColor:bgColor}]}
                >
                    <Text style={styles.text1Style}>{item.title}</Text>
                    <Text style={[styles.text2Style,{color:item.deccrptionColor}]}>{item.descrption}</Text>
                    <Image
                        source={{uri:item.imageUrl}}
                        style={styles.imageStyle}
                    ></Image>
                </TouchableOpacity>
            )

        }
        return Items;

    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#dddddd'

    },
    itemStyle:{
      flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text1Style:{
        fontSize:16,
        marginTop:6
    },
    text2Style:{
        fontSize:12,
        marginTop:6,
        marginBottom:6
    },
    imageStyle:{
        width:50,
        height:50,
        marginBottom:10,
        borderRadius:50,
    }
})
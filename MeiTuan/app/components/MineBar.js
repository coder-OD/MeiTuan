import React, { Component } from 'react';
import {

    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class MineBar extends Component{

    static defaultProps = {
        Icons:null,
    }

    render(){
        return(
            <View style={styles.viewStyle}>
                {/*渲染多个items*/}
                {this.renderItems()}
            </View>
        )
    }

    /**
     * [
     {"icon":"mine_clothes","hasMsg":false,"msgNumber":"9+"},
     {"icon":"mine_setting","hasMsg":false,"msgNumber":"1"},
     {"icon":"mine_alarm","hasMsg":false,"msgNumber":"3"}
     ],
     */
    renderItems(){
        var Items = [];
        var Icons=this.props.Icons;
        for (var i = 0; i < Icons.length; i++) {
            var IconItem =Icons[i];


            if(IconItem.hasMsg){
                Items.push(
                    <View
                        key={i}
                        style={styles.viewItemStyle}
                    >
                        <Image
                            source={{uri:IconItem.icon}}
                            style={styles.imageStyle}
                        ></Image>
                        <Text
                            style={styles.textStyle}
                        >{IconItem.msgNumber}</Text>
                    </View>
                )
                }else{
                Items.push(
                    <View
                        key={i}
                        style={styles.viewItemStyle}
                    >
                        <Image
                            source={{uri:IconItem.icon}}
                            style={styles.imageStyle}
                        ></Image>
                    </View>
                )
                }

        }
        return Items;
    }

}

const styles=StyleSheet.create({

    viewStyle:{
        height:40,
        backgroundColor:'#06C1AE',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    viewItemStyle:{
        width:40,
        height:40,
        // backgroundColor:"royalblue",
        // marginRight:10,
        justifyContent:"center",
        alignItems:"center"
    },
    imageStyle:{
        width:22,
        height:22,

    },
    textStyle:{
        width:13,
        height:13,
        borderRadius:10,
        backgroundColor:"red",
        position:"absolute",
        top:3,
        right:5,
        textAlign:"center",
        color:"white",
        fontSize:10
    }


})
/**
 * Created by Administrator on 2017/11/10.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

export  default class OrderItemView extends Component{
    static defaultProps={
        option:null,
    }

    render(){
        return(
           <View style={styles.viewStyle}>
               {/*左*/}
               <View>
                   <Text>{this.props.option.leftName}</Text>

               </View>
               {/*右*/}
               <View style={styles.view2Style}>
                   <Text style={styles.textRightStyle}>{this.props.option.rightName}</Text>
                   <Image source={{uri:'trip_travel__lion_more_date_icon'}}
                          style={{width:9,height:14}}
                   ></Image>
               </View>
           </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height:35,
        // backgroundColor:'pink',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,

        borderBottomWidth:1,
        borderBottomColor:'#dddddd'
    },
    view2Style:{
        flexDirection:'row',
        alignItems:'center'
    },

    textRightStyle:{
        color:'#9d9d9d',
        fontSize:12,
        marginRight:6,
    }
})
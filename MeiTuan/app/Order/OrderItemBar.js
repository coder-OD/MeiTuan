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

export default class OrderItemBar extends Component{

    /**
     *
     * @type {{orderbars: null}}
     */
    static defaultProps={
        orderbars:null,
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
     * 渲染多个items
     */
    renderItems(){
        //1.定义一个组件数组
        var Items=[];
        var orderbars=this.props.orderbars;
        //2.遍历
        for(var i=0;i<orderbars.length;i++){
            //3.拿到每一个item的数据
            var orderbar=orderbars[i];//

            if(orderbar.hasMsg){
                //4.给组件数组添加组件
                Items.push(
                    <View style={styles.viewItemsStyle} key={i}>

                        <View style={styles.viewInnerItemStyle}>
                            <Image source={{uri:orderbar.icon}}
                                   style={{width:33,height:33}}
                            ></Image>
                            <Text style={styles.textStyle}>{orderbar.title}</Text>
                        </View>

                        {/*点*/}
                        <Text style={styles.textCirleStyle}>{orderbar.msgNumber}</Text>

                    </View>
                )
            }else{
                //4.给组件数组添加组件
                Items.push(
                    <View style={styles.viewItemsStyle} key={i}>

                        <View style={styles.viewInnerItemStyle}>
                            <Image source={{uri:orderbar.icon}}
                                   style={{width:33,height:33}}
                            ></Image>
                            <Text style={styles.textStyle}>{orderbar.title}</Text>
                        </View>

                    </View>
                )
            }

        }

        return Items;
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        height:55,

        flexDirection:'row',

    },

    viewItemsStyle:{
        flex:1,
        // borderRightWidth:1,
        // borderRightColor:'red'
    },
    viewInnerItemStyle:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        color:'gray',
        fontSize:12,
    },

    textCirleStyle:{
        width:13,
        height:13,
        backgroundColor:'red',
        borderRadius:10,

        position:'absolute',
        top:2,
        right:18,
        fontSize:9,
        color:'white',
        textAlign:'center'

    }
})
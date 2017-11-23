/**
 * Created by Administrator on 2017/11/7.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export  default class OrderBar extends Component{

    /**
     * 给组件设计属性 get （常量）
     * this.props
     leftName:'订单',
     * @type {{}}
     */
    static defaultProps={
        leftName:null,
        hasArrow:false,
    }


    render(){

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={ ()=>this.goToBack() }
                style={styles.viewStyle}>

                {/*渲染一个箭头*/}
                {this.renderArrowView()}

                {/*左*/}
                <View
                    style={styles.view1Style}>
                    <Text style={{color:'white',fontSize:14,marginLeft:5,marginRight:5}}
                    >{this.props.leftName}</Text>
                </View>

            </TouchableOpacity>
        )
    }

    /**
     * 返回上一个页面：navigator
     */
    goToBack(){
        if(this.props.navigator==null||this.props.navigator==undefined){
            return ;
        }
        this.props.navigator.pop();

    }

    /**
     * 渲染箭头
     */
    renderArrowView(){
        /*如果需要箭头，返回箭头*/
        if(this.props.hasArrow){
            return(
                <Image source={{uri:'trip_flight_ic_home_page_back_bt'}}
                       style={{width:9,height:14,marginLeft:5}}
                ></Image>
            )
        }
    }

}

const styles=StyleSheet.create({
    viewStyle:{
        height:40,
        backgroundColor:'#06C1AE',
        flexDirection:'row',
        alignItems:'center'

    },
    view1Style:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'

    },

})


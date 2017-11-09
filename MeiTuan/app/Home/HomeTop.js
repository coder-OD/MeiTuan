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

var cls=5;
var ViewWidth=50;
var MarginLeft=(Screen.w-ViewWidth*cls) / (cls+1);

export default class HomeTop extends Component{

    static defaultProps = {
        categorys : []
    }

    state={
        currentPage:0
    }

    render(){
        return(
            <View>
                <ScrollView
                    style={{height:160}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={ (e)=>this.pageEnd(e) }
                >
                    {/*左*/}
                    <View style={styles.viewItemStyle}>
                        {this.renderPage(1)}
                    </View>

                    {/*右*/}
                    <View style={styles.viewItemStyle}>
                        {this.renderPage(2)}
                    </View>
                </ScrollView>
                
                {/*分页器*/}
                <View style={styles.viewCirleStyle}>
                    {/*渲染点*/}
                    {this.renderDots(2)}
                </View>
            </View>
        )
    }

    /*渲染*/
    renderPage(number){
        var Items = [];
        var categorys = this.props.categorys;//categorys 长度20
        var nums = categorys.length;
        if(nums<=0){
            return;
        }
        if(number == 1){
            for (var i = 0; i < nums/2; i++) {
                var itemData = categorys[i];
                Items.push(
                   this.renderItem(i,itemData)
                )
            }
        }else if(number == 2) {
            for (var i = 10; i < nums; i++) {
                //3.拿到每一个icon信息
                var itemData = categorys[i];//{icon: "http://47.93.30.78:8080/MeiTuan/image/category/ic_category_0.png",title: "美食"}
                //4.给组件数组添加组件
                Items.push(
                    this.renderItem(i, itemData)
                )

            }
        }
        //5.返回组件数组
        return Items;
    }

    renderItem(i,itemData){
        return(
            <TouchableOpacity key = {i}
                              style={styles.viewIconStyle}
                              activeOpacity={0.8}
                              onPress={()=>{
                                  ToastAndroid.showWithGravity(
                                      itemData.title,
                                      ToastAndroid.SHORT,
                                      ToastAndroid.CENTER,
                                  )
                              }}
            >
                <Image
                    source={{uri:itemData.icon}}
                    style={styles.imageStyle}
                ></Image>
                <Text>{itemData.title}</Text>
            </TouchableOpacity>
        )
    }

    pageEnd(e){
        var currentX = e.nativeEvent.contentOffset.x;
        var currentPage = currentX / Screen.w;
        this.setState({
            currentPage:currentPage
        })
        
    }
    
    /*渲染分页器*/
    renderDots(number){
        var Dots = [];
        for (var i = 0; i < number; i++) {
            var bgColor=this.state.currentPage==i?'#06C1AE':'#dddddd';
           Dots.push(
               <Text style={[styles.textStyle,{backgroundColor:bgColor}]} key={i}></Text>
           );
        }
        return Dots;
    }
    
    
}

const styles = StyleSheet.create({
    viewItemStyle:{
        height:160,
        // backgroundColor:'pink',
        width:Screen.w,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    viewIconStyle:{
        width:ViewWidth,
        height:70,
        // backgroundColor:'green',
        marginTop:8,
        marginLeft:MarginLeft,
        alignItems:'center'
    },
    imageStyle:{
        width:ViewWidth,
        height:ViewWidth,
    },

    viewCirleStyle:{
        height:22,
        width:Screen.w,
        // backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    textStyle:{
        width:8,
        height:8,
        // backgroundColor:'gray',
        borderRadius:8,
        marginRight:6
    }

})

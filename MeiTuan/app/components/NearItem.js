import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image
} from 'react-native';

export default class NearItem extends Component{

    /**
     rowData:

     {
        starIcon: "http://47.93.30.78:8080/MeiTuan/image/near/trip_oversea_star50.png",
        tagIcons: [
        "http://47.93.30.78:8080/MeiTuan/image/near/beauty_ic_discount.png",
        "http://47.93.30.78:8080/MeiTuan/image/near/beauty_ic_tuan.png"
        ],
        icon: "http://47.93.30.78:8080/MeiTuan/image/category/pic1.png",
        storeName: "籽嘉饼屋（工业大道店）",
        descrption: "[新市]实惠双人餐，提供免费wifi",
        price: 13,
        marketPrice: 30,
        sales: 364,
        distance: "<10.7km"
      }

     * @type {{rowData: {}}}
     */

    static defaultProps = {
        rowData:{},
    }

    render(){
        var rowData = this.props.rowData;
        console.log(rowData);
        return(
            <View style={styles.viewStyle}>
                {/*左边*/}
                <View style={styles.viewLeftStyle}>
                <Image
                    source={{uri:rowData.icon}}
                    style={styles.leftImageStyle}
                ></Image>
                </View>
                {/*右边*/}
                <View style={styles.viewRightStyle}>
                    {/*上*/}
                <View style={styles.topRightStyle}>
                    <View style={{flexDirection:"row",alignItems:"center",maxWidth:110}}>
                        <Text numberOfLines={1}>{rowData.storeName}</Text>
                        {this.renderImages(rowData.tagIcons)}
                    </View>
                    <View style={{paddingRight:10,justifyContent:"center"}}>
                        <Text>{rowData.distance}</Text>
                    </View>
                </View>
                    {/*中*/}
                <View style={styles.centerRightStyle}>
                    <Image
                        source={{uri:rowData.starIcon}}
                        style={{width:60, height:12,marginRight:5}}
                        resizeMode={"contain"}
                    ></Image>
                    <Text style={styles.textStyle}>人均价：￥{rowData.price}</Text>
                </View>
                    {/*下*/}
                <View style={styles.bottomRightStyle}>
                    <Text style={styles.textStyle}>{rowData.descrption}</Text>
                </View>
                </View>

            </View>
        )
    }

    /*渲染小图片*/
    renderImages(IconArr){
        var nums = IconArr.length;
        var tagIcons = [];
        for (var i = 0; i <nums; i++) {
            var tagIcon = IconArr[i];
            tagIcons.push(
                <Image key={i}
                    source={{uri:tagIcon}}
                    style={{width:13,height:13}}
                ></Image>

            )
        }
        return tagIcons;
    }


}

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
        height:100,
        borderBottomWidth:1,
        borderBottomColor:'#dddddd',
    },
    viewLeftStyle:{
        flex:0.9,
        justifyContent:"center",
        alignItems:"center",
    },
    leftImageStyle:{
        width:90,
        height:90,

    },
    viewRightStyle:{
        flex:2,
        // backgroundColor:"royalblue",
    },
    topRightStyle:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    centerRightStyle:{
        flex:1,
        // backgroundColor:"lightgreen",
        flexDirection:"row",
        alignItems:"center",
    },
    bottomRightStyle:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
    },
    textStyle:{
        color:'#9d9d9d',
        fontSize:12,
    }

})
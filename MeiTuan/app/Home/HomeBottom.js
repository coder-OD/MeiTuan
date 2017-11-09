import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ListView,
    Image,
    ToastAndroid
} from 'react-native';

export default class HomeBottom extends Component{

    static defaultProps = {
        goods:[],
    }

    constructor(props){
        super(props)

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});

        /*状态机*/
        this.state = {
            dataSource:ds,
        }
    }

    render(){
        var goods = this.props.goods;
        if(goods.length<=0){
            return <View></View>
        }

        this.state = {
            dataSource:this.state.dataSource.cloneWithRows(goods),
        }

        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this.renderItems(rowData)}
                    scrollEnabled={false}
                >

                </ListView>
            </View>
        )
    }

    renderItems(rowData){
        return(
            <TouchableOpacity  style={styles.viewStyle}
                               activeOpacity={0.8}
                               onPress={() => {
                                   ToastAndroid.showWithGravity(
                                       rowData.storeName,
                                       ToastAndroid.SHORT,
                                       ToastAndroid.BOTTOM,
                                   )
                               }
                               }
            >
                {/*左边*/}
                <View style={styles.leftView}>
                    <Image
                        source={{uri:rowData.icon}}
                        style={styles.imageStyle}
                    ></Image>
                </View>
                {/*右边*/}
                <View style={styles.rightView}>
                    {/*上*/}
                    <View style={styles.viewTopStyle}>
                        <Text>{rowData.storeName}</Text>
                        <Text style={styles.textStyle}>{rowData.distance}</Text>
                    </View >
                    {/*中*/}
                    <View style={styles.viewCenterStyle}>
                        <Text>{rowData.descrption}</Text>

                    </View>
                    {/*下*/}
                    <View style={styles.viewBottomStyle}>
                        <Text
                            style={{
                                color:'#06C1AE',
                                fontSize:15,
                            }}
                        >￥{rowData.price}</Text>
                        <Text>门市价：￥{rowData.marketPrice}</Text>
                        <Text>已销售{rowData.sales}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    viewStyle:{

        height:100,
        borderTopWidth:1,
        borderTopColor:'#dddddd',
        flexDirection:'row'
    },
    leftView:{
        flex:0.8,
        // backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'

    },
    imageStyle:{
        width:80,
        height:80,
        borderRadius:2
    },
    rightView:{
        flex:2
    },
    viewTopStyle:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingRight:10
    },
    textStyle:{
        color:'#9d9d9d',
        fontSize:12,
    },
    viewCenterStyle:{
        flex:1,
        // backgroundColor:"royalblue",
        justifyContent:"center"
    },
    viewBottomStyle:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    }
})



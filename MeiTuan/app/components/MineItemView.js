import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class MineItemView extends Component{

    /* itemData:{"icon":"user_main_membercenter","titleLeft":"关于美团","titleRight":""}*/
    static defaultProps = {
        itemData:null,
    }

    render(){
        return(

            <View style={styles.viewStyle}>
                {/*左*/}
                <View style={styles.view1Style}>
                    <Image
                        source={{uri:this.props.itemData.icon}}
                        style={styles.imageLeftStyle}
                    ></Image>
                    <Text>{this.props.itemData.titleLeft}</Text>
                </View>
                {/*右*/}
                <View style={styles.view2Style}>
                    <Text style={styles.textRightStyle}>{this.props.itemData.titleRight}</Text>
                    <Image source={{uri:"trip_travel__lion_more_date_icon"}}
                           style={styles.imageRightStyle}
                    ></Image>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height:35,
        backgroundColor:'white',
        flexDirection:'row',
    },
    view1Style:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'

    },
    imageLeftStyle:{
        width:18,
        height:18,
        marginLeft:10,
        marginRight:5
    },
    textLeftStyle:{
        fontSize:14,
        color:'#4E4E4E'
    },
    view2Style:{
        flex:1,
        // backgroundColor:'pink',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'

    },
    textRightStyle:{
        color:'#9F9F9F',
        fontSize:12,
    },
    imageRightStyle:{
        width:9,
        height:13,
        marginRight:10,
        marginLeft:5,
    }
})
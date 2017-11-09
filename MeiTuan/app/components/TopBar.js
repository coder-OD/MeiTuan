import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export  default class TopBar extends Component{

    render(){
        return(
            <View style={styles.viewStyle}>
                {/*左*/}
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>{
                        alert("广州");
                    }}
                >
                    <View style={styles.view1Style}>
                        <Text style={{color:"white",fontSize:14}}>广州</Text>
                        <Image source={{uri:'trip_train_vector_submit_order_head_arrow'}} style={{width:16,height:9}}
                        ></Image>
                    </View>
                </TouchableOpacity>

                {/*中*/}
                <View style={styles.view2Style}>
                    <TextInput
                        underlineColorAndroid={'transparent'}
                        style={styles.textInputStyle}
                        placeholder={'商圈 糕点'}
                    >
                    </TextInput>


                    <Image source={{uri:'search_ic_suggestion_default'}}
                           style={styles.searchStyle}
                    ></Image>
                </View>
                {/*右*/}
                <View style={styles.view3Style}>
                    <Image
                        source={{uri:'scan'}}
                        style={{width:19, height:19,}}
                    ></Image>
                    <Text style={{color:"white",fontSize:14}}>描述</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        height:40,
        backgroundColor:"#06C1AE",
        flexDirection:"row",
        alignItems:"center",
    },
    view1Style:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginRight:5,
        marginLeft:5,
    },
    view2Style:{
        flex:3,
        // backgroundColor:"pink",
        backgroundColor:"white",
        height:28,
        borderRadius:20,

    },
    view3Style:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginRight:5,
    },
    textInputStyle:{
        padding:0,
        fontSize:12,
        color:"gray",
        paddingLeft:30,

    },
    searchStyle:{
        width:18,
        height:18,
        position:"absolute",
        left:8,
        top:5
    }
})
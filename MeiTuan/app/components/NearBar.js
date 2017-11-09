import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

export  default class NearBar extends Component{

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
                        <Text style={{color:"white",fontSize:14}}>大地工业区</Text>
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

        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginLeft:5
    },
    view2Style:{
        flex:1,
        // backgroundColor:"pink",
        backgroundColor:"white",
        height:28,
        borderRadius:20,
        marginLeft:10,
        marginRight:10,
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
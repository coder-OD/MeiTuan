import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity
}from "react-native";
import NearItem from "../../components/NearItem";
import Screen from '../../utils/Screen';
var cls = 4;
var ViewWidth = 70;
var MarginLeft = (Screen.w- cls*ViewWidth) / (cls+1);

export default class Food extends Component{

    static defaultProps = {
        foodItem:{},
    }

    constructor(props){
        super(props);
        //创建数据源
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2});
        //状态机
        this.state = {
            foodItem:this.props.foodItem,
            dataSource:ds,
            currentIndex:0,
        }
    }

    render(){
        return(
            <View>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData)=>this.renderItems(rowData)}
                    renderHeader={ ()=>this.renderListHeaderView() }
                >

                </ListView>
            </View>
        )
    }




    componentDidMount() {
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(this.state.foodItem.nearbeans),
        })
    }

    renderItems(rowData){
        return(
            <TouchableOpacity
                activeOpacity={0.8}
            >
                <NearItem rowData={rowData}> </NearItem>
            </TouchableOpacity>
        )
    }

    /*绘制头部*/
    renderListHeaderView(){
        var topLables = this.state.foodItem.topLables;
        if(topLables==null || topLables==undefined){
            return;
        }

        return(
            <View style={styles.viewHeaderStyle}>
                {/*渲染头部每一个leble*/}
                {this.renderHeaaderLables(topLables)}
            </View>
        )
    }

    /*渲染每一个选项*/
    renderHeaaderLables(topLables){
        var Labels = [];
        for (let i = 0; i < topLables.length; i++) {
            var label = topLables[i];
            var bgColor=this.state.currentIndex==i?'#FF4645':'white';
            var textColor=this.state.currentIndex==i?'white':'gray';
            Labels.push(
                <TouchableOpacity
                    activeOpacity={0.8}
                    key={i}
                    onPress={()=>this.onClickLabel(i)}
                      style={[styles.viewLableStyle,{backgroundColor:bgColor}]}
                >
                    <Text style={[styles.textStyle,{color:textColor}]}>{label}</Text>
                </TouchableOpacity>
            )
            
        }
        return Labels;
    }


    onClickLabel(index){

        this.setState({
            currentIndex:index,
        })
    }

}

const styles = StyleSheet.create({
    viewHeaderStyle:{
        height:70,
        backgroundColor:'#dddddd',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    viewLableStyle:{
        height:20,
        width:ViewWidth,
        marginLeft:MarginLeft,
        // backgroundColor:"#fff",
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:20,
    },
    textStyle:{
        fontSize:12,
    }
})
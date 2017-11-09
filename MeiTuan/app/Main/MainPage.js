import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';

import HomePage from "../Home/HomePage";
import NearPage from "../Near/NearPage";
import OrderPage from "../Order/OrderPage";
import ShopPage from "../Shop/ShopPage";
import MinePage from "../Mine/MinePage";

import TabNavigator from 'react-native-tab-navigator';

export default class MainPage extends Component{

    state = {
        select:"首页"
    }

    render(){
        return(
          <TabNavigator
            TabBarStyle={{
                height:50
            }}
          >
              <TabNavigator.Item
                  renderIcon={()=><Image
                      source={{uri:'ic_vector_home_normal'}}
                      style={styles.imageStyle}
                  ></Image>}
                  title={"首页"}
                  selected={this.state.select=="首页"}
                  renderSelectedIcon={()=><Image
                      source={{uri:'ic_vector_home_pressed'}}
                      style={styles.imageStyle}
                  ></Image>}
                  selectedTitleStyle={{color:'#06C1AE'}}
                  onPress={()=>this.setState({
                      select:"首页"
                  })}
              >

                  <HomePage  {...this.props}></HomePage>
              </TabNavigator.Item>

              <TabNavigator.Item
                  renderIcon={()=><Image
                      source={{uri:'ic_vector_nearby_normal'}}
                      style={styles.imageStyle}
                  ></Image>}
                  title={"附近"}
                  selected={this.state.select=="附近"}
                  renderSelectedIcon={()=><Image
                      source={{uri:'ic_vector_nearby_pressed'}}
                      style={styles.imageStyle}
                  ></Image>}
                  selectedTitleStyle={{color:'#06C1AE'}}
                  onPress={()=>this.setState({
                      select:"附近"
                  })}
              >
                  <NearPage  {...this.props}></NearPage>
              </TabNavigator.Item>

              <TabNavigator.Item
                  renderIcon={()=><Image
                      source={{uri:'ic_vector_discover_normal'}}
                      style={styles.imageStyle}
                  ></Image>}
                  title={"逛一逛"}
                  selected={this.state.select=="逛一逛"}
                  renderSelectedIcon={()=><Image
                      source={{uri:'ic_vector_discover_pressed'}}
                      style={styles.imageStyle}
                  ></Image>}
                  selectedTitleStyle={{color:'#06C1AE'}}
                  onPress={()=>this.setState({
                      select:"逛一逛"
                  })}
              >
                  <ShopPage  {...this.props}></ShopPage>
              </TabNavigator.Item>

              <TabNavigator.Item
                  renderIcon={()=><Image
                      source={{uri:'ic_vector_order_normal'}}
                      style={styles.imageStyle}
                  ></Image>}
                  title={"订单"}
                  selected={this.state.select=="订单"}
                  renderSelectedIcon={()=><Image
                      source={{uri:'ic_vector_order_pressed'}}
                      style={styles.imageStyle}
                  ></Image>}
                  selectedTitleStyle={{color:'#06C1AE'}}
                  onPress={()=>this.setState({
                      select:"订单"
                  })}
              >
                  <OrderPage  {...this.props}></OrderPage>
              </TabNavigator.Item>

              <TabNavigator.Item
                  renderIcon={()=><Image
                      source={{uri:'ic_vector_mine_normal'}}
                      style={styles.imageStyle}
                  ></Image>}
                  title={"我的"}
                  selected={this.state.select=="我的"}
                  renderSelectedIcon={()=><Image
                      source={{uri:'ic_vector_mine_pressed'}}
                      style={styles.imageStyle}
                  ></Image>}
                  selectedTitleStyle={{color:'#06C1AE'}}
                  onPress={()=>this.setState({
                      select:"我的"
                  })}
              >
                 <MinePage  {...this.props}></MinePage>
              </TabNavigator.Item>



          </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        width:Platform.OS == "ios"?30:25,
        height:Platform.OS == "ios"?30:25,
    }
})


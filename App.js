import React, { Component } from 'react'
import { SafeAreaView, Text, View,Button, Alert } from 'react-native'
import AppDimensions from './src/utils/AppDimensions';

export default class App extends Component {

  state = {en:'ONE',vn:'Một',isChange:true,ketqua:'chưa có gì',textValue: 'bắt đầu'}

  isCheck = state =>
  {
    if(state.isChange)
    {
      this.setState({
        ketqua:"is_true",
        textValue:this.state.en
      })
    }else{
      this.setState({
        ketqua:"is_false",
        textValue:this.state.vn
      })
    }
  };

  TrueOrFalse = () => 
  {
    this.state.isChange = !this.state.isChange;
    this.isCheck(this.state)
  }

  ToTrue = () =>
  {
    this.state.isChange = true;
    this.isCheck(this.state)
  }
  ToFalse = () =>
  {
    this.state.isChange = false;
    this.isCheck(this.state)
  }

  

  

  render() {
    //const word = {en:'ONE',vn:'Một',isChange:true} 
    return (
      <SafeAreaView style={{flex: 1}}>
          <View
            style={{
              flex:1,
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}>
              <Text
                style={{
                  color: '#28aB45',
                  fontSize: AppDimensions.getWidth() / 20
                }}>
                {this.state.textValue}
              </Text>
              <Text
                style={{
                  color: '#dd3545',
                  fontSize: AppDimensions.getWidth() / 20
                }}>
                {this.state.ketqua}
              </Text>
              <Button onPress={this.TrueOrFalse} title="True Or False" color="#2d0545"/>
          </View> 

          <View>
            <Button onPress={this.ToTrue} title="Thành True" color="#28aB45"/>
            <Button onPress={this.ToFalse} title="Thành False" color="#dd3545"/>
          </View>
      </SafeAreaView>
    )
  }
}

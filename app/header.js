import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.headerContainer}>
        <View style={[styles.headerItems, {marginLeft:10}]}>
          {this.props.leftComponent}
        </View>
        <View style={styles.headerItems}>
          <Text style={{textAlign:'center', fontWeight:'600'}}>{this.props.title}</Text>
        </View>

        <View style={styles.headerItems}>
          {this.props.rightComponent}
        </View>

      </View>
    )
  }


}

const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:'#fff',
    height:100,
    paddingTop:20,
    justifyContent:'center',
    flexDirection:'row',
    shadowColor: "#000000",
  shadowOpacity: 0.2,
  shadowRadius: 2,
  shadowOffset: {
    height: 0.5,
    width: 0
  }
  },
  headerItems:{
    justifyContent:'center',
    flex:1
  }
})

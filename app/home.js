import React from 'react'
import {Text, View,TouchableOpacity,ListView} from 'react-native'
import Header from './header'
import IonIcons from 'react-native-vector-icons/Ionicons';
const products=[
  {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHI7Fd7xdEq5zpKFrAwA_aVKtsIDpjrY291xCAkmmjOlrCtNNn', title:'Nice blue walk short for babies', price:'$75', index:1},
  {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHI7Fd7xdEq5zpKFrAwA_aVKtsIDpjrY291xCAkmmjOlrCtNNn', title:'Novelty 4 in 1 baby Carrier', price:'$123', index:2},
  {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHI7Fd7xdEq5zpKFrAwA_aVKtsIDpjrY291xCAkmmjOlrCtNNn', title:'cool baby clothes Cotton', price:'$63', index:3},
  {image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHI7Fd7xdEq5zpKFrAwA_aVKtsIDpjrY291xCAkmmjOlrCtNNn', title:'Wintage Flanel Short With Handmade Print', price:'$120', index:4},

]
import Card from './card'
export default class Home extends React.Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      dataSource: ds.cloneWithRows(products)
    }
  }

  renderCard(){
    return products.map((productData) => <Card productData={productData} key={productData.index} />)
  }

  renderLeftComponent(){
    return (
      <IonIcons name="ios-menu-outline" size={20} />
    )
  }

  renderRightComponent(){
    return (
      <View style={{ flex:1, flexDirection:'row', alignItems:'center'}}>
        <View style={{flex:1, marginLeft:20}}>
          <TouchableOpacity>
            <IonIcons name="ios-funnel-outline" size={20} />
          </TouchableOpacity>

        </View>
        <View style={{flex:1}}>
          <TouchableOpacity>
            <IonIcons name="md-cart" size={20} />
          </TouchableOpacity>

        </View>
      </View>

    )
  }

  render(){
  return (
    <View style={styles.homeContainer}>
      <Header rightComponent={this.renderRightComponent()} leftComponent={this.renderLeftComponent()} title="Featured Item" />
      <View style={styles.cardContainer}>
        <ListView
          contentContainerStyle={styles.listStyle}
          dataSource={this.state.dataSource}
          renderRow={(productData) => <Card productData={productData} key={productData.index} />}

        />

      </View>
    </View>
  )
  }


}

const styles={
  homeContainer:{
    flex:1,
    backgroundColor:'#EEEEEE'
  },
  listStyle:{
    flexDirection:'row',
    flexWrap:'wrap'
  },
  cardContainer:{
    flex:1,
    marginTop:10,
    marginLeft:20,
    marginRight:10,

  },
  button:{
    flex:1
  }
}

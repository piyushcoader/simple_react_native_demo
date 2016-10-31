import React from 'react'
import {View,Dimensions, Text, Image} from 'react-native'
const {height, width} = Dimensions.get('window')
export default Card= (props) =>{

  const {image, title, price} = props.productData
  console.log(image)
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.imageContainer}
        source={{uri: image}}
        resizeMode ="contain"
      />
        <View>
          <Text style={styles.titleText}> {title}</Text>
          <Text style={styles.pricetext}> {price} </Text>
        </View>
    </View>
  )
}


const styles={
cardContainer:{
  width:width/2-15,
  borderWidth:0.5,
  backgroundColor:'#fff',
   borderColor: '#d6d7da',
  height:220
},
imageContainer:{
 height:130
},
titleText:{
  textAlign:'center',
  fontSize:13,
  height:60,
  fontWeight:'500',
  marginLeft:20,
  marginRight:20
},
pricetext:{
  fontSize:14,
  fontWeight:'600',
  textAlign:'center',
  marginTop:0
}

}

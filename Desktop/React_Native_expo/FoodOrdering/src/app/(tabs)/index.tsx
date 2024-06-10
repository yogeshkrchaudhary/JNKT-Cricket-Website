import { Image, StyleSheet, Text } from 'react-native';

import products from '@/assets/data/products';
import { View } from '@/src/components/Themed';
import Colors from '@/src/constants/Colors';


const product = products[3];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri:product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹ {product.price*80}</Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:10
    
  },

  image:{
    width:'100%',
    aspectRatio:1,

  },
  title: {
    fontSize:18,
    fontWeight:'bold',
    marginVertical:10
    
  },
  price: {
    color:Colors.light.tint,
    fontWeight:'bold'
    
  },
});

import { Image, Pressable, StyleSheet, Text } from 'react-native';

import Colors from '@/src/constants/Colors';
import { Link } from 'expo-router';
import { Product } from '../types';




type ProductListItemProps = {
    product: Product
}

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'


const ProductListItem = ({product}: ProductListItemProps)=>{
  // console.log(props);
  
  return(
    
    <Link href={`/${product.id}`} asChild>

    <Pressable 
    
    style={styles.container}>


      <Image source={{uri:product.image|| defaultPizzaImage}} style={styles.image}
      resizeMode='contain'
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>₹ { (product.price*80).toFixed()}</Text>

      

    </Pressable>
</Link>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:10,
    flex:1,
    maxWidth:'50%'
    // margin:5
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

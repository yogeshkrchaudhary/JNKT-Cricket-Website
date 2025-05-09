
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';
import { View } from '@/src/components/Themed';
import { FlatList } from 'react-native';






export default function MenuScreen() {
  return (
    <View style={{backgroundColor:'#dcdde1'}}>
      


      <FlatList  
      data={products}
      renderItem={({item})=> <ProductListItem product={item}
      
      
      />}

      numColumns={2}
      contentContainerStyle={{gap:10, padding:10}}
      columnWrapperStyle={{gap:10}}
      />
    </View>
  )
}


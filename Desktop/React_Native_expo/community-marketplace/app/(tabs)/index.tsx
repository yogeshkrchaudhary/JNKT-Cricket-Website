import { SafeAreaView, StyleSheet, Text } from 'react-native';


export default function HomeScreen() {
  return (
   <>
   <SafeAreaView style={styles.titleContainer}>

   <Text style={{backgroundColor:'red'}}>
    ola
   </Text>
   </SafeAreaView>
   </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft:'20%',
    marginTop:"30%"
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});


import { StyleSheet, Text, View,Button} from 'react-native';
import { Contacts } from './screens/Contacts';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// crear constante para generar rutas de los screen 
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
    initialRouteName='home'>
      
      <Stack.Screen name="Products" component={ProductScreen} options={{title:'productos'}} ></Stack.Screen>
      <Stack.Screen name="Home" component={HomeScreen} options={{title:'inicio'}} ></Stack.Screen>
      <Stack.Screen name="Contacts" component={Contacts} options={{title:'contacto'}}></Stack.Screen>
    </Stack.Navigator>
   </NavigationContainer>
  );
}
function HomeScreen({navigation}) {
  
  return(

    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Estamos en inicio</Text>
      <Button title='Ir a productos' onPress={()=>{
        navigation.navigate('Products')
      }}></Button>

    </View>
  );
}
function ProductScreen({navigation}) {
  let title='Este es el titulo'
  let name='jessica'
  return(
    <View style={styles.container}>
      <Text>Estamos en Productos</Text>
      <Button
      title='Contactenos'
      onPress={()=>navigation.navigate('Contacts',{title:title,name:name})}></Button>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

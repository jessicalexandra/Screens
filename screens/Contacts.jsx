import { TextInput,View,Text,Button} from "react-native";
 export function Contacts({navigation,route}){
   const{title,name}=params.route
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
               <Text style={{marginBottom:10}}>ESTAMOS EN CONTACTENOS</Text>
               <Text>Titulo:{title}</Text>
               <Text>Nombre Completo:{name}</Text>
         <Button
         title='ir a inicio'
         onPress={ 
            ()=> navigation.navigate('Home')
            }/>
        </View>
      
    )
 }
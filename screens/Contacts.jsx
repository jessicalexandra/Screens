import {View, Text, TextInput, Button} from 'react-native';

export default function Contacts({navigation,route}){
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text style={{marginBottom:10}}>Estamos en Contáctenos</Text>
        </View>
    );
}
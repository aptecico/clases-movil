/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { appStyles } from './resources/css/appStyle';



export default function App() {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.titulo}>Hola mundo como estas . en este dia</Text>
      <Text style={appStyles.texto} > Hola, mi nombre es German</Text>
      <Text style={{color:'#f1c40f'}} > Hola, Esto es un texto 1</Text>
      <Text style={{color:'#ba4a00'}} > Hola, Esto es un texto 2</Text>
      <Text style={{color:'#5b2c6f'}} > Hola, Esto es un texto 3</Text>
      <Text style={{color:'#6f2c40'}} > Hola, Esto es un texto 4</Text>
      <Text style={{color:'#6f392c'}} > Hola, Esto es un texto 5</Text>

      <View>
        <Image source={{uri:'https://picsum.photos/200/300/?blur'}} 
         style={appStyles.logo}
        />
     
        <Button title='Esto es un bton' color='#f194ff' 
          onPress={()=>Alert.alert('Alerta','Ha hecho clic en el botón')}
          style={appStyles.btn}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  
  
});*/
import React from 'react';
import { StatusBar,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './navigation/AppNavigator';
import { AuthProvider } from './context/AuthContext';


// You may need to import font packages if you're using them
// import { useFonts } from 'expo-font';
// import AppLoading from 'expo-app-loading';

export default function App() {
  // If you're using custom fonts, uncomment this block
  /*
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    // Add other fonts as needed
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  */

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <AuthProvider>
          <AppNavigator />
      </AuthProvider>
    </SafeAreaProvider>
  );
} 
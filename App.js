import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { appStyles } from './styles/appStyles';

export default function App() {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.titulo}>Hola mundo como estas . en este dia</Text>
      <Text style={{color:'red'}}>Desde el celular</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});

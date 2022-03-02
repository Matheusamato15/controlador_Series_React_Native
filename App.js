import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import TelaInicial from './src/Telas/TelaInicial';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar hideen/>
      <TelaInicial/>
    </SafeAreaView>
  );
}

const estilos=StyleSheet.create({
  tela:{
    backgroundColor: "#939"
  }
})

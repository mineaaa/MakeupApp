import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import { getDatabase } from 'firebase/database';
import Search from './Search';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider>
      <Search />
    </PaperProvider>


  );
}



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Home';
import { getDatabase } from 'firebase/database';
import Search from './Search';

export default function App() {
  return (
    <Home />

  );
}



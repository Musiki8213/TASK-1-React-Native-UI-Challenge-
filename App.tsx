import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#E8F4F8' }}>
      <StatusBar barStyle="dark-content" />
      <ProductScreen />
    </SafeAreaView>
  );
}


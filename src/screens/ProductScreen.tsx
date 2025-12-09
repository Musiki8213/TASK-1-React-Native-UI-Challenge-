import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import CategoryNavigation from '../components/CategoryNavigation';
import ProductImage from '../components/ProductImage';
import ProductDetails from '../components/ProductDetails';

const { height } = Dimensions.get('window');

const ProductScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'Relax' | 'Sleep'>('Relax');

  const handleBackPress = () => {
    console.log('Back pressed');
  };

  const handleProfilePress = () => {
    console.log('Profile pressed');
  };

  const handleCartPress = () => {
    console.log('Cart pressed');
  };

  const handleBuyNow = () => {
    console.log('Buy Now pressed');
  };

  const handleQuantityChange = (quantity: number) => {
    console.log('Quantity changed:', quantity);
  };

  return (
    <View style={styles.container}>
      <Header
        onBackPress={handleBackPress}
        onProfilePress={handleProfilePress}
        onCartPress={handleCartPress}
        cartCount={3}
        notificationCount={8}
      />
      <CategoryNavigation
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ProductImage onQuantityChange={handleQuantityChange} />
        <ProductDetails onBuyNow={handleBuyNow} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F4F8',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
});

export default ProductScreen;


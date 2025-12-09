import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface ProductImageProps {
  onQuantityChange?: (quantity: number) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({ onQuantityChange }) => {
  const [selectedQuantity, setSelectedQuantity] = useState(30);

  const quantities = [30, 60, 90];

  const handleQuantitySelect = (qty: number) => {
    setSelectedQuantity(qty);
    onQuantityChange?.(qty);
  };

  return (
    <View style={styles.container}>
      {/* Background leaf patterns */}
      <View style={styles.backgroundPattern}>
        <Ionicons name="leaf-outline" size={80} color="rgba(255, 235, 59, 0.3)" style={styles.pattern1} />
        <Ionicons name="leaf-outline" size={60} color="rgba(255, 235, 59, 0.2)" style={styles.pattern2} />
        <Ionicons name="leaf-outline" size={70} color="rgba(255, 235, 59, 0.25)" style={styles.pattern3} />
      </View>
      
      <View style={styles.bottleContainer}>
        {/* Product Image */}
        <Image 
          source={require('../assets/wafers-removebg-preview.png')} 
          style={styles.productImage}
          resizeMode="contain"
        />

        {/* Quantity Selector Buttons */}
        <View style={styles.quantitySelector}>
          {quantities.map((qty, index) => (
            <TouchableOpacity
              key={qty}
              style={[
                styles.quantityButton,
                selectedQuantity === qty && styles.quantityButtonSelected,
                index > 0 && { marginTop: 12 },
              ]}
              onPress={() => handleQuantitySelect(qty)}
            >
              <Text
                style={[
                  styles.quantityButtonText,
                  selectedQuantity === qty && styles.quantityButtonTextSelected,
                ]}
              >
                {qty}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC300',
    paddingVertical: 20,
    alignItems: 'center',
    minHeight: height * 0.4,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundPattern: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  pattern1: {
    position: 'absolute',
    top: 20,
    left: 20,
    transform: [{ rotate: '-15deg' }],
  },
  pattern2: {
    position: 'absolute',
    top: 100,
    right: 30,
    transform: [{ rotate: '25deg' }],
  },
  pattern3: {
    position: 'absolute',
    bottom: 50,
    left: 50,
    transform: [{ rotate: '-10deg' }],
  },
  bottleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: width * 0.1,
    zIndex: 1,
  },
  productImage: {
    width: width * 0.75,
    height: height * 0.5,
    maxWidth: 400,
    maxHeight: 600,
  },
  quantitySelector: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  quantityButton: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    backgroundColor: '#FFF9C4',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    minWidth: 50,
    minHeight: 50,
  },
  quantityButtonSelected: {
    backgroundColor: '#000',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  quantityButtonTextSelected: {
    color: '#FFF',
  },
});

export default ProductImage;


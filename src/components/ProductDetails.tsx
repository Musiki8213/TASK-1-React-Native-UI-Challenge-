import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface ProductDetailsProps {
  productName?: string;
  dosage?: string;
  price?: number;
  onBuyNow?: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productName = 'Relax 30 Dissolvable Wafers',
  dosage = '250 mg',
  price = 25.5,
  onBuyNow,
}) => {
  const [quantity, setQuantity] = useState(2);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{productName}</Text>
      <Text style={styles.dosage}>{dosage}</Text>

      <View style={styles.priceAndQuantity}>
        <Text style={styles.price}>${price.toFixed(2)}</Text>

        <View style={styles.quantitySelector}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={handleDecrease}
            disabled={quantity === 1}
          >
            <Text style={[styles.quantityButtonText, quantity === 1 && styles.disabled]}>-</Text>
          </TouchableOpacity>

          <Text style={[styles.quantityText, { marginHorizontal: 16 }]}>{quantity}</Text>

          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.buyNowButton} onPress={onBuyNow}>
        <Ionicons name="cart" size={20} color="#000" />
        <Text style={[styles.buyNowText, { marginLeft: 8 }]}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    paddingHorizontal: Math.max(width * 0.06, 20),
    paddingTop: 24,
    paddingBottom: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  productName: {
    fontSize: Math.min(width * 0.06, 24),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  dosage: {
    fontSize: Math.min(width * 0.04, 16),
    color: '#000',
    marginBottom: 20,
  },
  priceAndQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  price: {
    fontSize: Math.min(width * 0.07, 28),
    fontWeight: 'bold',
    color: '#000',
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: Math.max(width * 0.1, 40),
    height: Math.max(width * 0.1, 40),
    borderRadius: Math.max(width * 0.05, 20),
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    minWidth: 30,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  buyNowButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEB3B',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  buyNowText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ProductDetails;


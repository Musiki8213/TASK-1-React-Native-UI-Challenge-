import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface CategoryNavigationProps {
  selectedCategory: 'Relax' | 'Sleep';
  onCategoryChange: (category: 'Relax' | 'Sleep') => void;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.categoryItem, selectedCategory === 'Relax' && styles.selectedCategory]}
        onPress={() => onCategoryChange('Relax')}
      >
        <Ionicons
          name="flower-outline"
          size={20}
          color="#000"
        />
        <Text style={[styles.categoryText, { marginLeft: 8 }]}>Relax</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.categoryItem, selectedCategory === 'Sleep' && styles.selectedCategory]}
        onPress={() => onCategoryChange('Sleep')}
      >
        <Ionicons
          name="moon-outline"
          size={20}
          color="#000"
        />
        <Text style={[styles.categoryText, { marginLeft: 8 }]}>Sleep</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: Math.max(width * 0.04, 16),
    paddingVertical: 12,
    backgroundColor: '#FFC300',
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 20,
  },
  selectedCategory: {
    
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default CategoryNavigation;


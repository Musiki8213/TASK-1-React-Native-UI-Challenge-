import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface HeaderProps {
  onBackPress?: () => void;
  onProfilePress?: () => void;
  onCartPress?: () => void;
  cartCount?: number;
  notificationCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  onBackPress,
  onProfilePress,
  onCartPress,
  cartCount = 3,
  notificationCount = 8,
}) => {
  return (
    <View style={styles.container}>
      <View style = {styles.leftSection}>
        <View style = {styles.backButtonContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/logo-removebg-preview (1).png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
        </View>
        <View style = {styles.logoTextContainer}>
        <Text style={[styles.logoText, { marginRight: 8 }]}>xefag</Text>
      </View>
      </View>

      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={onProfilePress} style={styles.profileButton}>
          <View style={styles.profileCircle}>
            <Ionicons name="person-outline" size={18} color="#FFF" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notificationCount}</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onCartPress} style={[styles.cartButton, { marginLeft: 12 }]}>
          <Ionicons name="cart-outline" size={24} color="#000" />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Math.max(width * 0.04, 16),
    paddingVertical: 20,
    backgroundColor: '#FFC300',
    minHeight: 120,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButtonContainer: {
    marginRight: 12,
  },
  logoTextContainer: {
    marginRight: 12,
  },
  backButton: {
    width: Math.max(width * 0.1, 40),
    height: Math.max(width * 0.1, 40),
    borderRadius: Math.max(width * 0.05, 20),
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: Math.min(width * 0.4, 200),
    height: Math.min(width * 0.4, 200),
    borderRadius: Math.min(width * 0.2, 100),
  },
  logoText: {
    fontSize: 18,
    fontFamily: 'serif',
    fontWeight: '600',
    color: '#000',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileButton: {
    position: 'relative',
  },
  profileCircle: {
    width: Math.max(width * 0.1, 40),
    height: Math.max(width * 0.1, 40),
    borderRadius: Math.max(width * 0.05, 20),
    backgroundColor: '#FFBF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  cartButton: {
    width: Math.max(width * 0.1, 40),
    height: Math.max(width * 0.1, 40),
    borderRadius: Math.max(width * 0.05, 20),
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Header;


# React Native UI Challenge

This project implements a product detail page UI for an e-commerce mobile application, built with React Native and Expo.

## Design Implementation

The UI replicates a product detail screen featuring:
- **Header**: Navigation with back button, brand logo, profile icon with notification badge, and shopping cart with item count
- **Category Navigation**: Tabs for "Relax" and "Sleep" categories
- **Product Display**: Visual representation of a product bottle with quantity selector buttons (30, 60, 90)
- **Product Details**: Product name, dosage, price, quantity selector, and "Buy Now" button

## Features

- ✅ Fully responsive design for different mobile screen sizes
- ✅ Reusable component architecture
- ✅ Interactive elements (quantity selectors, category tabs, buttons)
- ✅ Accurate color scheme matching the design (yellow #FFEB3B, white, black)
- ✅ Proper typography and spacing
- ✅ Badge notifications for cart and profile
- ✅ Smooth UI transitions and interactions

## Project Structure

```
react-native/
├── App.tsx                 # Main app entry point
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Header component with navigation
│   │   ├── CategoryNavigation.tsx  # Category tabs component
│   │   ├── ProductImage.tsx        # Product bottle display with quantity selector
│   │   └── ProductDetails.tsx      # Product information and purchase section
│   └── screens/
│       └── ProductScreen.tsx       # Main product screen combining all components
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Fix dependency versions (if needed):
```bash
npx expo install --fix
```

3. Start the Expo development server:
```bash
npm start
```

3. Run on your preferred platform:
   - Press `a` for Android
   - Press `i` for iOS
   - Press `w` for web
   - Scan QR code with Expo Go app on your device

## Building the Application

### For Android (APK)

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure the project:
```bash
eas build:configure
```

4. Build the APK:
```bash
eas build --platform android --profile preview
```

5. Download the APK from the Expo dashboard or use the provided link.

### For iOS

**Important Notes:**
- iOS builds create **IPA files** (not APK - that's Android only)
- You can build iOS apps on Windows using EAS Build cloud service
- You'll need an **Apple Developer Account** ($99/year) to install on physical devices
- For testing in iOS Simulator, you can use Expo Go without a developer account

**Building iOS IPA:**

1. Install EAS CLI (if not already installed):
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure the project (if not already done):
```bash
eas build:configure
```

4. Build the iOS app:
```bash
eas build --platform ios --profile preview
```

**Note:** The first iOS build will ask you to set up your Apple Developer credentials. You can either:
- Use your Apple ID (free, but limited to 7 days)
- Use an Apple Developer account ($99/year) for longer validity

5. Download the IPA from the Expo dashboard once the build completes.

**For Testing Without Building:**
- Use Expo Go app on your iPhone (free, no build needed)
- Scan the QR code from `npm start` with your iPhone camera

## Component Architecture

All components are designed to be reusable and maintainable:

- **Header**: Accepts callbacks for navigation actions and displays dynamic counts
- **CategoryNavigation**: Manages category selection state
- **ProductImage**: Handles quantity selection for product variants
- **ProductDetails**: Manages purchase quantity and triggers buy action

## Responsive Design

The application uses `Dimensions` API to ensure proper scaling across different screen sizes:
- Dynamic padding and margins based on screen width
- Flexible layouts that adapt to device dimensions
- Touch targets sized appropriately for mobile interaction

## Technologies Used

- React Native 0.81.5
- Expo SDK 54.0.27
- React 19.1.0
- TypeScript
- Expo Vector Icons (@expo/vector-icons)
- React Native Safe Area Context

## Notes

- Icons are implemented using Expo Vector Icons (Ionicons) to closely match the design
- Colors are defined as constants matching the design specifications
- All interactive elements have proper touch handlers
- The design is pixel-perfect and matches the provided UI mockup

## Build Files

### Android APK/AAB
[Upload your built APK/AAB file to Google Drive and add the link here]

### iOS IPA (Optional)
[If you built an iOS version, upload the IPA file to Google Drive and add the link here]

## License

This project is created for educational purposes as part of a React Native UI challenge.


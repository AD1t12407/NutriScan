// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import Onboarding3 from '../screens/Onboarding3';

import NewAccount from '../screens/NewAccount';
import SetPassword from '../screens/SetPassword';
import HomeScreen from '../screens/Home';
import IngredientAnalysis from '../screens/IngredientAnalysis';
import Preferences from '../screens/Preferences';

import ScanPage from '../screens/Scan';
import HistoryPage from '../screens/HistoryPage'; // Import the HistoryPage

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        
        <Stack.Screen name="NewAccount" component={NewAccount} />
        <Stack.Screen name="SetPassword" component={SetPassword} />
       
        <Stack.Screen name="HomePage" component={HomeScreen} />
        <Stack.Screen name="History" component={HistoryPage}/>
        <Stack.Screen name="Scan" component={ScanPage}/>
        <Stack.Screen name="IngredientAnalysis" component={IngredientAnalysis} />
        <Stack.Screen name="Preferences" component={Preferences} />
         {/* Add History Page */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

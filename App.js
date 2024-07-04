import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import mainMenu from './screens/mainMenu';
import detailsMenu from './screens/detailsMenu';
import profile from './screens/profile';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="MainMenu">
                <Stack.Screen name="MainMenu" component={mainMenu} />
                <Stack.Screen name="DetailsMenu" component={detailsMenu} />
                <Stack.Screen name="Profile" component={profile} />

            </Stack.Navigator>
    </NavigationContainer>

  );
}


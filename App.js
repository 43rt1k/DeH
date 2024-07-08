import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainMenu from './screens/mainMenu';
import DetailsMenu from './screens/detailsMenu';
import Profile from './screens/profile';
import TabBar from './tabBar'; 

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>

        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name="MainMenu" component={MainMenu} />

            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}



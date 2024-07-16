import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Modal, Dimensions} from 'react-native';
import Home from './screens/home';
import Profile from './screens/profile';
import TabBar from './components/tabBar'; 
import Header from './components/header';
import { PagesName } from './data/constants';
import { colors } from './data/styles';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <View style={App_style.container}>

      <NavigationContainer>

        <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
            <Tab.Screen name={PagesName.HOME} component={Home}  options={{
              header: (props) => <Header {...props} />,
              title: 'Home',
            }} />

            <Tab.Screen name={PagesName.PROFILE} component={Profile}  options={{
              header: (props) => <Header {...props} />,
              title: 'Home',
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const App_style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black, // Default background color
  },
});

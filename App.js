import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Profile from './screens/profile';
import TabBar from './components/tabBar'; 
import Header from './components/header';
import { PagesName } from './data/constants';
const Tab = createBottomTabNavigator();


export default function App() {
  return (
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
  );
}


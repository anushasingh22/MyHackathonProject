import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePage from './pages/create';
import ProfilePage from './pages/profile';
import HomeStack from './navigation/homeStack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Create" component={CreatePage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}




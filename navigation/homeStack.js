import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeSubPage from '../pages/homeSubPage';
import HomePage from '../pages/home';
import ProfilePage from '../pages/profile';

const Stack = createNativeStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Main" component= {HomePage} />
            <Stack.Screen name="HomeSubPage" component= {HomeSubPage} />
            <Stack.Screen name="ProfilePage" component= {ProfilePage} />
            {/* <Stack.Screen name="CreatePage" component= {CreatePage} /> */}
        </Stack.Navigator>
    )
}
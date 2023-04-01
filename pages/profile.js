import{StyleSheet, View, Text} from "react-native";
import { StatusBar } from 'expo-status-bar';
import global from "../styles/global";

export default function ProfilePage(){
    return(
        <View style = {global.screen}>
            <Text> ProfilePage</Text>
            <StatusBar style="auto" />
        </View>
    );
}

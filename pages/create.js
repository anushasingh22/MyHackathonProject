import{StyleSheet, View, Text} from "react-native";
import { StatusBar } from 'expo-status-bar';
import global from "../styles/global";

export default function CreatePage(){
    return(
        <View style = {global.screen}>
            <Text> CreatePage</Text>
            <StatusBar style="auto" />
        </View>
    );
}
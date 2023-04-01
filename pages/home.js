import{StyleSheet, View, Text,} from "react-native";
import { StatusBar } from 'expo-status-bar';
import global from "../styles/global";
import { Button } from "react-native";


export default function HomePage({navigation}){
    function handleSubPage(){
        navigation.navigate("SubPage");
    }
    return(
        <View style = {global.screen}>
            <Text>  HomePage</Text>
            <StatusBar style="auto" />
        </View>
    );
}




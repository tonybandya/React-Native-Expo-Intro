/*import { StatusBar } from "expo-status-bar";*/
import { View, StatusBar, Modal, Text } from "react-native";

export default function App() {
   return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60}}>
    <StatusBar backgroundColor= "lightgreen" /*This applies only on Android*/
     barStyle= "dark-content"/>
    
       </View>
  );
}
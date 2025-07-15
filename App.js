/*import { StatusBar } from "expo-status-bar";*/
import { View, StatusBar, Modal, Text, ActivityIndicator} from "react-native";

export default function App() {
   return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 60}}>
    <ActivityIndicator />
    <ActivityIndicator size= "large" />
    <ActivityIndicator size= "large" color= "midnightblue"/>
    <ActivityIndicator size= "large" color= "midnightblue" animating={false}/>
       </View>
  );
}
import { StatusBar } from 'expo-status-bar';
import { View, Button } from "react-native";
export default function App() {
  return (
    <View style={{ flex: 1, backgroundcolor: "plum", padding: 60}}>
     <Button 
       title="click" 
       onPress={() => console.log ("Button Pressed")} 
       color ="midnightblue"/> 
      
      </View>
  );
}
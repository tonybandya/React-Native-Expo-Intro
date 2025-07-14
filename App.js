/*import { StatusBar } from "expo-status-bar";*/
import { View, Button, Modal, Text } from "react-native";
import {useState } from "react";


export default function App() {
  const [isModalVisible, setisModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundcolor: "plum", padding: 60}}>
     <Button 
       title="click" 
       onPress={() => setisModalVisible(true)} 
       color ="midnightblue"
       /> 
       <Modal visible={isModalVisible} onRequestClose={() => setisModalVisible(false)} animationType="slide">
       <View style={{ flex: 1, backgroundcolor: "plum", padding: 60}}>
          <Text>Modal conent</Text>
          <Button title="close" color="midnightblue" onPress={() => setisModalVisible(false)} />
       </View>
       </Modal>
    
    
       </View>
  );
}
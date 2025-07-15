/*import { StatusBar } from "expo-status-bar";*/
import { View, Button, Alert} from "react-native";

export default function App() {
   return (
     <View style={{ flex: 1, backgroundcolor: "plum", padding: 60}}>
     <Button
       title= "Alert" 
       onPress={() => Alert.alert ("Invalid data!")}/>
     <Button 
       title= "Alert 2" 
       onPress={() => Alert.alert ("Invalid data!", "DOB incorrect")}/>
     <Button 
       title= "Alert 3" 
       onPress={() => 
        Alert.alert ("Invalid data!", "DOB incorect", [
      {
        text: "Cancel",
        onPress: () => console.log ("Cancel pressed"),

     },
     {
       text: "Ok",
        onPress: () => console.log ("Ok pressed"),

     },
    

     ])
    }
    />

     

       </View>
  );
}
/*import { StatusBar } from 'expo-status-bar';*/
import {View, Button, Image, Text, Pressable } from "react-native";
const logoImge = require("./assets/adaptive-icon.png");


export default function App() {
  return (
   <View style={{ flex: 1, backgroundcolor: "plum", padding: 60}}>
     <Button 
       title="click" 
       onPress={() => console.log ("Button Pressed")} 
       color ="midnightblue"
       /> 
       <Pressable onPress={() => console.log("Image Pressed")}>
       <Image source={logoImge} style={{width: 300, height: 300}} />
       </Pressable>
       <Pressable onPress={() => console.log("Text Pressed")}>
      <Text>
      
        Life in the city buzzes with energy, where towering skyscrapers touch the clouds
        and streets are filled with a symphony of horns, footsteps, and conversations in
        a hundred languages. Every corner tells a story, from the scent of fresh pastries
        drifting from corner bakeries to the vibrant murals that color the alley walls.
        People move with purpose — business professionals rushing past artists sketching
        on park benches, while children laugh as they chase pigeons near the fountains.
        Above it all, billboards flash with ever-changing lights, casting colors on the
        faces of pedestrians below. Despite the chaos, moments of serenity still exist:
        an old man feeding birds, a couple quietly sipping coffee in a dim-lit café, a
        street musician playing soft tunes that momentarily slow the city's heartbeat.
        The city is more than just a place; it’s a living, breathing canvas of human
        experience, where dreams are built, lost, and reborn in the rhythm of everyday life.
      </Text>
      </Pressable>
      <Pressable onPress={() => console.log("Image Pressed")}>
      <Image source={logoImge} style={{width: 300, height: 300}} />
      </Pressable>
      </View>
  );
}
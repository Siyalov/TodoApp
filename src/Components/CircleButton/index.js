import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const CircleButton = () => {
   return (
      <TouchableOpacity style={styles.container}>
         <Text>+</Text>
      </TouchableOpacity>
   );
};

export default CircleButton;
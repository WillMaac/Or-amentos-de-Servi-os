import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";


type BtnProps = {
    text: string,
    icon: string | any
}
export function Button({text, icon}: BtnProps) {
  return (
    <TouchableOpacity 
    style={styles.button}>
      <MaterialIcons name={icon} size={30} color="#FAFAFA" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

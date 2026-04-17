import { MaterialIcons } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Input() {
  return (
     <View style={styles.searchWrapper}>
            
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" size={28} color="#999" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Título ou cliente"
                    placeholderTextColor="#999"
                />
            </View>

            
            <TouchableOpacity style={styles.filterButton}>
                <MaterialIcons name="tune" size={20} color="#6A46EB" />
            </TouchableOpacity>
        </View>
    
  );
}

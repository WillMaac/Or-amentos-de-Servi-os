import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { Button } from "../Button";


export function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <Text style={styles.title}>Orçamentos</Text>
                <Text style={styles.subTitle}>Você tem 1 item em rascunho</Text>
                </View>
                <View >
                <Button
                icon={"add"}
                text="Novo"
                ></Button>

                </View>
            </View>
        
    )
}
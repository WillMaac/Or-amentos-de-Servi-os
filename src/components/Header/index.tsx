import { Text, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";


export function Header(){
    return(
        <View style={styles.container}>
            <View style={styles.cardHeader}>
                <View>
                    <Text style={styles.title}>Orçamentos</Text>
                    <Text style={styles.subTitle}>Você tem 1 item em rascunho</Text>
                </View>
                <Button icon={"add"} text="Novo" />
            </View>

            
            <View style={styles.divider} />
        </View>
    )
}
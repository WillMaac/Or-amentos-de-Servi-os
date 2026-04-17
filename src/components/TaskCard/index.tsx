import { Text, View } from "react-native"
import { styles } from "./styles"

type Status = "Aprovado" | "Enviado" | "Rascunho" | "Recusado"

type Props = {
    data: {
        id: string;
        task: string;
        des: string;
        prince: string;
        status: Status;
    }
}

const statusColors: Record<Status, { bg: string; text: string }> = {
    Aprovado: { bg: "#E6F4EA", text: "#2E7D32" },
    Enviado:  { bg: "#E8F0FE", text: "#1A56DB" },
    Rascunho: { bg: "#F3F4F6", text: "#6B7280" },
    Recusado: { bg: "#FDE8E8", text: "#C81E1E" },
}

export function CardTask({ data }: Props) {
    const color = statusColors[data.status]

    return (
        <View style={styles.card}>
            <View style={styles.row}>
                <Text style={styles.task}>{data.task}</Text>
                <View style={[styles.badge, { backgroundColor: color.bg }]}>
                    <View style={[styles.dot, { backgroundColor: color.text }]} />
                    <Text style={[styles.badgeText, { color: color.text }]}>{data.status}</Text>
                </View>
            </View>

            <View style={styles.row}>
                <Text style={styles.des}>{data.des}</Text>
                <Text style={styles.price}>{data.prince}</Text>
            </View>
        </View>
    )
}
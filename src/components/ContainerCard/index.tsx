import { FlatList} from "react-native";
import { CardTask } from "../TaskCard";
import { styles } from "./styles";


type Status = "Aprovado" | "Enviado" | "Rascunho" | "Recusado"

type Task = {
    id: string;
    task: string;
    des: string;
    status: Status;
    prince: string;
}

const tasks: Task[] = [
    { id: "1", task: "Desenvolvimento de aplicativo de loja online", des: "Soluções Tecnológicas Beta", status: "Aprovado", prince: "R$ 22.300,00" },
    { id: "2", task: "Consultoria em marketing digital", des: "Marketing Wizards", status: "Rascunho", prince: "R$ 4.000,00" },
    { id: "3", task: "Serviço de SEO", des: "SEO Masters", status: "Enviado", prince: "R$ 3.500,00" },
    { id: "4", task: "Criação de conteúdo", des: "Content Creators", status: "Rascunho", prince: "R$ 2.500,00" },
    { id: "5", task: "Gestão de redes sociais", des: "Social Experts", status: "Recusado", prince: "R$ 1.800,00" },
    { id: "6", task: "Design de interface", des: "UI/UX Designers", status: "Aprovado", prince: "R$ 5.200,00" },
    { id: "7", task: "Design de interface", des: "UI/UX Designers", status: "Aprovado", prince: "R$ 5.200,00" },
]

export function ContainerCard() {
    return (
        <FlatList
        style={{ flex: 1 }}
            data={tasks}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.container}
            renderItem={({ item }) => (
                <CardTask data={item} />
            )}
        />
    )
}
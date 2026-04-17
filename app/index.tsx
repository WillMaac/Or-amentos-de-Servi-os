import { ContainerCard } from "@/src/components/ContainerCard";
import { Header } from "@/src/components/Header";
import { Input } from "@/src/components/Search";
import { CardTask } from "@/src/components/TaskCard";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50
      }}
    >
      <Header/>
      <Input/>
      <ContainerCard/>
    </View>
  );
}

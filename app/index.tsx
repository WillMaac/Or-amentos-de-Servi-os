import { Header } from "@/src/components/Header";
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
    </View>
  );
}

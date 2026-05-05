import { View, Text, Button } from "react-native";

const Detail = ({ navigation }: any) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Detail Library</Text>
    <Button title="Ke Home" onPress={() => navigation.navigate("Home")} />
  </View>
);

export default Detail;

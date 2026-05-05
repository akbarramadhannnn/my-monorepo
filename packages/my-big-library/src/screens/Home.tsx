import { View, Text, Button } from "react-native";
import { getConfig } from "../config";

const Home = ({ navigation }: any) => {
  const { apiKey, baseUrl, debugMode } = getConfig();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>apiKey : {apiKey}</Text>
      <Text>baseUrl : {baseUrl}</Text>
      <Text>debugMode : {debugMode.toString()}</Text>
      <Button title="Ke Detail" onPress={() => navigation.navigate("Detail")} />
    </View>
  );
};

export default Home;

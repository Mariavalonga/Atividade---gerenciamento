import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";


export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />

      {/* <TouchButton route="Profile" title="Go to Profile" data={user} /> */}

      {/* <TouchButton route="Category" title="Go to Category" /> */}
    </View>
  );
}

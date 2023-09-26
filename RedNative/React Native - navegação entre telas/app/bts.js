import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>BTS</Text>
        <Text style={styles.subtitle}>Músicas</Text>
        <Text>Take two</Text>
        <Text>Run BTS</Text>
        <Text>We are bulletproof: The eternal</Text>
        <Text style={styles.subtitle}>Membros</Text>
        <Text>RM</Text>
        <Text>Jin</Text>
        <Text>Suga</Text>
        <Text>Jhope</Text>
        <Text>Jimim</Text>
        <Text>V</Text>
        <Text>Jungkook</Text>
        <Link href='/'>Voltar</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

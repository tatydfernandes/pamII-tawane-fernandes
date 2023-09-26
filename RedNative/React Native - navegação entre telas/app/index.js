import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";


export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Músicas</Text>
        <Text style={styles.subtitle}>Página inicial</Text>
        <Link href='/jb'>Justin Bieber</Link>
        <Link href='/bts'>BTS</Link>
        <Link href='/dm'>Demi Lovato</Link>
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
    fontSize: 75,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 45,
    color: "#38434D",
  },
});

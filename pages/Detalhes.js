import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Detalhes({ route }) {
  const { textoNaoPersistido } = route.params || {};
  const [textoPersistido, setTextoPersistido] = useState("");

  useEffect(() => {
    const carregarTextoPersistido = async () => {
      const textoSalvo = await SecureStore.getItemAsync("meuTexto");
      if (textoSalvo) {
        setTextoPersistido(textoSalvo);
      }
    };
    carregarTextoPersistido();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes</Text>
      <TextoExibido titulo="Sem persistência" texto={textoNaoPersistido} cor="#e170ae" />
      <TextoExibido titulo="Persistência" texto={textoPersistido} cor="#206220" />
    </View>
  );
}

const TextoExibido = ({ titulo, texto, cor }) => (
  <View style={styles.textoContainer}>
    <Text style={[styles.texto, { color: cor }]}>
      {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    paddingHorizontal: 25,
    gap: 20,
    backgroundColor: "#fce7d2",
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    textDecorationLine: "underline",
    color: "#941e69",
  },
  textoContainer: {
    padding: 10,
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
  },
});
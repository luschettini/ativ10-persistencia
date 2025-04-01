import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";


const TextoExibido = ({ titulo, texto, cor }) => (
  <View style={styles.textoContainer}>
    <Text style={[styles.texto, { color: cor }]}>{titulo}: {texto || "Nenhum texto salvo"}</Text>
  </View>
);

export default function Home() {
  const [texto, setTexto] = useState("");
  const [textoPersistido, setTextoPersistido] = useState("");
  const [textoSalvoSemPersistencia, setTextoSalvoSemPersistencia] = useState("");
  const navigation = useNavigation();  

  useEffect(() => {
    const carregarTextoPersistido = async () => {
      const textoSalvo = await AsyncStorage.getItem("meuTexto"); 
      if (textoSalvo) {
        setTextoPersistido(textoSalvo);
      }
    };
    carregarTextoPersistido();
  }, []);

  const salvarTexto = async () => {
    if (!texto.trim()) {
      alert("Por favor, insira algo.");
      return;
    }
    await AsyncStorage.setItem("meuTexto", texto); 
    setTextoPersistido(texto);
    setTextoSalvoSemPersistencia(texto);
    setTexto("");
  };

  const limparTexto = async () => {
    await AsyncStorage.removeItem("meuTexto"); 
    setTextoPersistido("");
    setTextoSalvoSemPersistencia("");
    alert("Texto apagado da persistência!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Persistência e Navegação</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={texto}
        onChangeText={setTexto}
      />
      <TextoExibido titulo="Sem persistência" texto={textoSalvoSemPersistencia} cor="#e170ae" />
      <TextoExibido titulo="Texto persistido" texto={textoPersistido} cor="#206220" />
      <TouchableOpacity style={styles.botao} onPress={salvarTexto} activeOpacity={0.7}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={limparTexto} activeOpacity={0.7}>
        <Text style={styles.textoBotao}>Limpar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          console.log(textoSalvoSemPersistencia);
          navigation.navigate("Detalhes", { textoNaoPersistido: textoSalvoSemPersistencia });
        }}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    color: "#941e69",
  },
  input: {
    borderWidth: 1,
    borderColor: "#100B60",
    borderRadius: 8,
    padding: 10,
    fontSize: 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  textoContainer: {
    padding: 10,

  },
  texto: {
    fontSize: 20,
    textAlign: "center",
  },
  botao: {
    backgroundColor: "#941e69",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textoBotao: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
import React from "react";
import { FlatList, SafeAreaView, View, Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SkillCard = ({ name, icon }) => {
    return (
        <View style={styles.skillCard}>
            <FontAwesome5 name={icon} style={styles.skillIcon} />
            <Text style={styles.skillText}>{name}</Text>
        </View>
    );
};

export default function Card() {
    const skills = [
        { id: "1", name: "HTML", icon: "html5" },
        { id: "2", name: "CSS", icon: "css3-alt" },
        { id: "3", name: "PostgreSQL", icon: "database" },
        { id: "4", name: "React", icon: "react" },
        { id: "5", name: "React Native", icon: "mobile-alt" },
        { id: "6", name: "JavaScript", icon: "js" }
    ];

    const facts = [
        { id: "1", title: "Sobre Mim", description: "Olá, tenho 17 anos e estou cursando Desenvolvimento de sistemas no SENAI;" },
        { id: "2", title: "Carreira", description: "Apesar de estar cursando T.I, tenho o objetivo de cursar faculdade de Fonoaudiologia;" },
        { id: "3", title: "Curiosidade", description: "Amo brincar e cuidar de crianças e sou apaixonada pela área da saúde;" },
        { id: "4", title: "Hobbies", description: "Adoro assistir séries e filmes de comédia romântica." },
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView 
                contentContainerStyle={styles.container} 
                keyboardShouldPersistTaps="handled"
                style={{ flex: 1 }}
            >

                <FlatList
                    data={skills}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <SkillCard name={item.name} icon={item.icon} />}
                    nestedScrollEnabled={true}
                    style={styles.skillsList}
                />

<Image source={require('../assets/foto-minha.jpeg')} style={styles.profileImage} />
                <Text style={styles.name}>Luiza Nicoluci Schettini</Text>
                <Text style={styles.role}>Desenvolvedora</Text>


                {facts.map((item) => (
                    <View key={item.id} style={styles.cardContainer}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardDescription}>{item.description}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fce7d2",
    },
    container: {
        flexGrow: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fce7d2",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#941e69",
    },
    role: {
        fontSize: 16,
        color: "#384252",
        marginBottom: 20,
    },
    skillCard: {
        alignItems: "center",
        padding: 15,
        margin: 5,
        backgroundColor: "#e170ae",
        borderRadius: 10,
        width: Dimensions.get("window").width / 3.5,
    },
    skillIcon: {
        fontSize: 30,
        color: "#941e69",
    },
    skillText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#941e69",
        marginTop: 5,
    },
    cardContainer: {
        width: "100%",
        maxWidth: 400,
        backgroundColor: "#e170ae",
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#941e69",
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 16,
        color: "#384252",
    },
    skillsList: {
        marginBottom: 20,
    },
});

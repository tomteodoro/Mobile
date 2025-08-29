import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const treinos = [
    {
      nome: "Costas",
      descricao: "Transforme seu corpo ganhando massa muscular",
      imagem: { uri: "https://www.dicasdetreino.com.br/wp-content/uploads/2017/02/Construindo-Dorsais-costas-Trincadas.jpg" },
      rota: "Workout"
    },
    {
      nome: "Bíceps",
      descricao: "Crie o hábito saudável de treinar regularmente",
      imagem: { uri: "https://blog.weburn.com.br/wp-content/uploads/2024/03/treinar-biceps-todo-dia.webp" },
      rota: "Fit"
    },
    {
      nome: "Tríceps",
      descricao: "Melhore seu fôlego e resistência",
      imagem: { uri: "https://blog.gsuplementos.com.br/wp-content/uploads/2020/11/iStock-615883260.jpg" },
      rota: "Rest"
    },
    {
      nome: "Peito",
      descricao: "Melhore seu fôlego e resistência",
      imagem: { uri: "https://totalpass.com/wp-content/uploads/2022/12/treinos-de-peito.jpg" },
      rota: "Rest"
    },
    {
      nome: "Ombro",
      descricao: "Melhore seu fôlego e resistência",
      imagem: { uri: "https://sportlife.com.br/wp-content/uploads/2022/01/treino-de-ombro-1.jpg" },
      rota: "Rest"
    },
    {
      nome: "Abdominal",
      descricao: "Melhore seu fôlego e resistência",
      imagem: { uri: "https://s2-ge.glbimg.com/qH4Pd3rws7TbDJb7x9KDkF0rj84=/0x0:1254x836/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/i/C/Ci1rGDSSCjxcZZ1m4jFA/abdominal-academia.jpg" },
      rota: "Rest"
    },
    {
      nome: "Perna",
      descricao: "Melhore seu fôlego e resistência",
      imagem: { uri: "https://epulari.cdn.magazord.com.br/img/2022/05/blog/8702/treino-de-pernas-para-homens.jpg" },
      rota: "Rest"
    }
  ];

  return (
  <View style={{ flex: 1 }}>
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://i.postimg.cc/xjGWz50x/image-Photoroom.png" }}
          style={styles.icon}
        />
        <Text style={styles.logo}>GymFlow</Text>
      </View>

      {/* Títulos */}
      <Text style={styles.title}>TREINOS</Text>
      <Text style={styles.subtitle}>O que irá treinar hoje?</Text>

      {/* Cards */}
      {treinos.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => navigation.navigate(item.rota)}
        >
          <ImageBackground
            source={item.imagem}
            style={styles.image}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>{item.nome}</Text>
              <Text style={styles.cardDesc}>{item.descricao}</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>

    {/* Menu inferior fixo */}
    <View style={styles.bottomMenu}>
      <TouchableOpacity style={styles.iconButton} onPress={() => alert("Música")}>
        <Ionicons name="musical-notes" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => alert("Gráficos")}>
        <Ionicons name="bar-chart" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => alert("Treinos")}>
        <Ionicons name="fitness" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => alert("Câmera")}>
        <Ionicons name="camera" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={() => alert("Mais")}>
        <Ionicons name="ellipsis-horizontal" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBEDFC",
    padding: 15
  },
  header: {
    backgroundColor: "#148AEA",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 8,
    flexDirection: "row", // coloca os itens lado a lado
    alignItems: "center", // alinha verticalmente
    justifyContent: "center", // centraliza no container
    marginBottom: 15
  },
  logo: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 15
  },
  card: {
    marginBottom: 15
  },
  image: {
    height: 150,
    justifyContent: "flex-end"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  cardDesc: {
    color: "#fff",
    fontSize: 14
  },
  icon: {
    width: 38, // tamanho do ícone
    height: 38,
    marginRight: 8 // espaço entre imagem e texto
  },
  bottomMenu: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 60,
  backgroundColor: "#1e90ff",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12
  },
  iconButton: {
  padding: 5
  }
});

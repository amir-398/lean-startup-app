import { Button, String, Wrapper } from "@/components/nysaUi";
import ROUTES from "@/constants/ROUTES";
import { homeImg } from "@assets/images";
import type { DropdownItem } from "@mustapha-ghlissi/react-native-select-picker";
import Dropdown from "@mustapha-ghlissi/react-native-select-picker";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
export default function HomeScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState<
    DropdownItem | DropdownItem[]
  >();
  const items: DropdownItem[] = [
    {
      label: "Item 1",
      value: 1,
    },
    {
      label: "Item 2",
      value: 2,
    },
    {
      label: "Item 2",
      value: 2,
    },
    {
      label: "Item 2",
      value: 2,
    },
    {
      label: "Item 2",
      value: 2,
    },
    {
      label: "Item 3",
      value: 2,
    },
  ];
  return (
    <Wrapper scrollView>
      <View className="w-full h-64">
        <Image
          source={homeImg}
          resizeMode="contain"
          className="w-full h-full"
        />
      </View>
      {/* MatchMaking section */}

      <LinearGradient
        colors={["#FE5F3C", "#FF9C4E"]}
        start={{ x: 0, y: 0 }} // Départ à gauche
        end={{ x: 1, y: 0 }} // Fin à droite
        className="w-full shadow p-5 rounded-2xl"
      >
        <String size="xl" variant="white" weight="bold">
          🔥MATCHMAKING
        </String>
        <String variant="dark">
          Trouves les matchs et les joueurs parfaits en fonction de ton niveau,
          ta disponibilité et tes envies !
        </String>
        <View className="flex flex-col gap-5 mt-6">
          <View className="flex-row justify-between items-center">
            <TextInput
              placeholder="Date - Heure"
              className="bg-[#FFFFFF17] py-3 rounded-lg placeholder:text-white placeholder:text-xl px-5  border-2 border-[#FFFFFF3D] w-48"
            />

            <Dropdown
              items={items}
              onSelectChange={(value) => setSelectedLanguage(value)}
              placeholder="Distance"
              styles={{
                inputContainer: {
                  width: 170,
                  backgroundColor: "#FFFFFF17",
                  borderColor: "#FFFFFF3D",
                },
                activeItem: {
                  backgroundColor: "#FF6D32",
                },
                activeItemText: {
                  color: "#FFFFFF",
                },
              }}
              outlineColor="#FFFFFF3D"
            />
          </View>
          <View className="flex-row gap-4">
            <Dropdown
              items={items}
              onSelectChange={(value) => setSelectedLanguage(value)}
              placeholder="Distance"
              styles={{
                inputContainer: {
                  flex: 1,
                  backgroundColor: "#FFFFFF17",
                  borderColor: "#FFFFFF3D",
                },
                activeItem: {
                  backgroundColor: "#FF6D32",
                },
                activeItemText: {
                  color: "#FFFFFF",
                },
              }}
              outlineColor="#FFFFFF3D"
            />
            <Dropdown
              items={items}
              onSelectChange={(value) => setSelectedLanguage(value)}
              placeholder="Distance"
              styles={{
                inputContainer: {
                  flex: 1,
                  backgroundColor: "#FFFFFF17",
                  borderColor: "#FFFFFF3D",
                },
                activeItem: {
                  backgroundColor: "#FF6D32",
                },
                activeItemText: {
                  color: "#FFFFFF",
                },
              }}
              outlineColor="#FFFFFF3D"
            />
          </View>
        </View>
        <Button
          title="Lancer 🔥"
          btnClassName="bg-white rounded-full mt-8 w-52"
          textClassName="text-[#FF6D32]"
          onPress={() => navigation.navigate(ROUTES.LOADING_SCREEN)}
        />
      </LinearGradient>

      {/* -------------------------------------------------- */}
      <View className="bg-white w-full h-80 rounded-lg shadow p-2">
        <TextInput
          placeholder="Indiquez l'horaire de votre partie"
          className="w-2/3 mx-auto   rounded-lg p-2"
        ></TextInput>
        <Button
          title="Lancer le matchmacking"
          onPress={() => navigation.navigate(ROUTES.SESSIONS_SCREEN)}
        />
      </View>
      {/* Parties en cours */}
      <View>
        <String size="xl">Parties en cours</String>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-row gap-4"
        >
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 1</String>
            <String position="center">Joueur 1 vs Joueur 2</String>
            <Button title="Rejoindre" />
          </View>
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 2</String>
            <String position="center">Joueur 3 vs Joueur 4</String>
            <Button title="Rejoindre" />
          </View>
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 2</String>
            <String position="center">Joueur 3 vs Joueur 4</String>
            <Button title="Rejoindre" />
          </View>
        </ScrollView>
      </View>

      {/* Parties en attente */}
      <View>
        <String size="xl">Parties en attente</String>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-row gap-4"
        >
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 1</String>
            <String position="center">Joueur 1 vs Joueur 2</String>
            <Button title="Rejoindre" />
          </View>
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 2</String>
            <String position="center">Joueur 3 vs Joueur 4</String>
            <Button title="Rejoindre" />
          </View>
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 2</String>
            <String position="center">Joueur 3 vs Joueur 4</String>
            <Button title="Rejoindre" />
          </View>
        </ScrollView>
      </View>
      {/* nos partenaires */}
      <View>
        <String size="xl">Nos partenaires</String>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-row gap-4"
        >
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 1</String>
            <String position="center">Joueur 1 vs Joueur 2</String>
            <Button title="Rejoindre" />
          </View>
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 2</String>
            <String position="center">Joueur 3 vs Joueur 4</String>
            <Button title="Rejoindre" />
          </View>
          <View className="bg-white w-56 h-40 rounded-lg shadow  p-2">
            <String position="center">Partie 2</String>
            <String position="center">Joueur 3 vs Joueur 4</String>
            <Button title="Rejoindre" />
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});

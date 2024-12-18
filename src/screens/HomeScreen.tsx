import { Button, String, Wrapper } from "@/components/nysaUi";
import React from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <Wrapper scrollView>
      <View className="bg-white w-full h-80 rounded-lg shadow p-2">
        <String position="center" size="xl">
          MatchMaking
        </String>
        <String position="center">
          Trouver des partenaires de jeu en quelques cliques
        </String>
        <TextInput
          placeholder="Indiquez l'horaire de votre partie"
          className="w-2/3 mx-auto   rounded-lg p-2"
        ></TextInput>
        <Button title="Lancer le matchmacking" />
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

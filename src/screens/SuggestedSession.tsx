import { Button, String, Wrapper } from "@/components/nysaUi";
import ROUTES from "@/constants/ROUTES";
import { fingerball, fml, fml2, peopleImg } from "@assets/images";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

export default function SuggestedSession({ navigation }) {
  return (
    <Wrapper scrollView>
      <View className="px-2 mb-5">
        <View className="flex flex-row items-center">
          <Icon
            name="basketball-outline"
            type="ionicon"
            color="#FE5F3C"
            className="mr-1"
            size={30}
          />
          <String className="text-black font-bold" size="xl">
            Matchs Suggérés
          </String>
        </View>
        <String size="md">
          Nous avons trouvé des sessions qui correspondent à tes critères ! Tu
          peux choisir l'une d'elles ou crée ta propre session pour un défi 100%
          à ta mesure !
        </String>
      </View>
      <View>
        <LinearGradient
          colors={["#303030", "#178278"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 15, padding: 3, marginVertical: 4 }}
          className="flex-row py-2 items-center mb-3"
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 25,
              paddingLeft: 5,
              marginRight: 5,
            }}
          >
            <Image source={fingerball} className="w-full h-full rounded-lg" />
          </View>
          <View className="flex p-1 w-75 flex-1">
            <String size="xl" className="text-white">
              Session 1
            </String>
            <String className="mb-1">
              Paris 75 - 16h00 - <String className="text-[#FE5F3C]">5€</String>{" "}
            </String>
            <View
              style={{
                width: 125,
                height: 35,
                borderRadius: 25,
                paddingLeft: 2,
              }}
            >
              <Image source={peopleImg} className="w-full h-full rounded-lg" />
            </View>
          </View>
          <View className="w-1/4 flex items-center justify-end mr-2">
            <Button
              title="Rejoindre"
              btnClassName="bg-[#FE5F3C] w-full h-10"
              onPress={() => navigation.navigate(ROUTES.SESSIONS_SCREEN)}
            />
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#303030", "#178278"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 15, padding: 3, marginVertical: 4 }}
          className="flex-row py-2 items-center mb-3"
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 25,
              paddingLeft: 5,
              marginRight: 5,
            }}
          >
            <Image source={fml} className="w-full h-full rounded-lg" />
          </View>
          <View className="p-1 w-75 flex-1">
            <String size="xl" className="text-white">
              Session 2
            </String>
            <String className="mb-1">
              Paris 75 - 16h30 - <String className="text-[#FE5F3C]">5€</String>{" "}
            </String>
            <View
              style={{
                width: 125,
                height: 35,
                borderRadius: 25,
                paddingLeft: 2,
              }}
            >
              <Image source={peopleImg} className="w-full h-full rounded-lg" />
            </View>
          </View>
          <View className="w-1/4 flex items-center justify-end mr-2">
            <Button
              title="Rejoindre"
              btnClassName="bg-[#FE5F3C] w-full h-10"
              onPress={() => navigation.navigate(ROUTES.SESSIONS_SCREEN)}
            />
          </View>
        </LinearGradient>
        <LinearGradient
          colors={["#303030", "#178278"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ borderRadius: 15, padding: 3, marginVertical: 4 }}
          className="flex-row py-2 items-center"
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 25,
              paddingLeft: 5,
              marginRight: 5,
            }}
          >
            <Image source={fml2} className="w-full h-full rounded-lg" />
          </View>
          <View className="flex p-1 w-75 flex-1">
            <String size="xl" className="text-white">
              Session 3
            </String>
            <String className="mb-1">
              Paris 75 - 17h00 - <String className="text-[#FE5F3C]">5€</String>{" "}
            </String>
            <View
              style={{
                width: 125,
                height: 35,
                borderRadius: 25,
                paddingLeft: 2,
              }}
            >
              <Image source={peopleImg} className="w-full h-full rounded-lg" />
            </View>
          </View>
          <View className="w-1/4 flex items-center justify-end mr-2">
            <Button
              title="Rejoindre"
              btnClassName="bg-[#FE5F3C] w-full h-10"
              onPress={() => navigation.navigate(ROUTES.SESSIONS_SCREEN)}
            />
          </View>
        </LinearGradient>
        <View className="flex mt-3">
          <String size="xl" className="text-black font-semibold">
            Aucun match ne te convient ?
          </String>
          <String size="sm">
            Crée ton propre match, rassemble les joueurs qui te motivent, et
            fais vibrer le terrain selon TES règles !
          </String>
          <TouchableOpacity>
            <LinearGradient
              colors={["#FF9C4E", "#FE5F3C"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                borderRadius: 10,
                marginTop: 15,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <String variant="white" size="md" className="font-bold">
                Créer un match
              </String>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
}

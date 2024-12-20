import { Wrapper, String, Button } from "@/components/nysaUi";
import React, { useState } from "react";
import { View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/themed";
import { fingerball, fml, fml2, peopleImg } from "@assets/images";

export default function SuggestedSession() {
  return (
    <Wrapper scrollView>
      <View className="w-full flex">
        <View className="flex flex-row justify-between">
          <String className="text-black font-semibold" size="2xl">
            LUDORA
          </String>
          <Icon
            name="bell"
            type="font-awesome"
            color="black"
            className="mr-1"
          />
        </View>
        <View className="flex px-2">
          <View className="flex flex-row">
            <Icon
              name="basketball-outline"
              type="ionicon"
              color="#FE5F3C"
              className="mr-1"
            />
            <String className="text-black font-semibold">
              Matchs Suggérés
            </String>
          </View>
          <String size="xs">
            Nous avons trouvé des sessions qui correspondent à tes critères ! Tu
            peux choisir l'une d'elles ou crée ta propre session pour un défi
            100% à ta mesure !
          </String>
        </View>
        <View className="flex justify-center  px-2">
          <LinearGradient
            colors={["#303030", "#178278"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 15, padding: 3, marginVertical: 4 }}
          >
            <View className=" flex-1 flex-row py-2 items-center">
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 25,
                  paddingLeft: 5,
                }}
              >
                <Image
                  source={fingerball}
                  className="w-full h-full rounded-lg"
                />
              </View>
              <View className="flex p-1 w-75 flex-1">
                <String size="xl" className="text-white">
                  Session 1
                </String>
                <String>
                  Paris 75 - 16h00 -{" "}
                  <String className="text-[#FE5F3C]">5€</String>{" "}
                </String>
                <View
                  style={{
                    width: 125,
                    height: 35,
                    borderRadius: 25,
                    paddingLeft: 2,
                  }}
                >
                  <Image
                    source={peopleImg}
                    className="w-full h-full rounded-lg"
                  />
                </View>
              </View>
              <View className="w-1/4 flex items-center justify-end mr-2">
                <Button
                  title="Rejoindre"
                  btnClassName="bg-[#FE5F3C] w-full h-10"
                />
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#303030", "#178278"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 15, padding: 3, marginVertical: 4 }}
          >
            <View className=" flex-1 flex-row py-2 items-center">
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 25,
                  paddingLeft: 5,
                }}
              >
                <Image source={fml} className="w-full h-full rounded-lg" />
              </View>
              <View className="flex p-1 w-75 flex-1">
                <String size="xl" className="text-white">
                  Session 2
                </String>
                <String>
                  Paris 75 - 16h30 -{" "}
                  <String className="text-[#FE5F3C]">5€</String>{" "}
                </String>
                <View
                  style={{
                    width: 125,
                    height: 35,
                    borderRadius: 25,
                    paddingLeft: 2,
                  }}
                >
                  <Image
                    source={peopleImg}
                    className="w-full h-full rounded-lg"
                  />
                </View>
              </View>
              <View className="w-1/4 flex items-center justify-end mr-2">
                <Button
                  title="Rejoindre"
                  btnClassName="bg-[#FE5F3C] w-full h-10"
                />
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#303030", "#178278"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 15, padding: 3, marginVertical: 4 }}
          >
            <View className=" flex-1 flex-row py-2 items-center">
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 25,
                  paddingLeft: 5,
                }}
              >
                <Image source={fml2} className="w-full h-full rounded-lg" />
              </View>
              <View className="flex p-1 w-75 flex-1">
                <String size="xl" className="text-white">
                  Session 3
                </String>
                <String>
                  Paris 75 - 17h00 -{" "}
                  <String className="text-[#FE5F3C]">5€</String>{" "}
                </String>
                <View
                  style={{
                    width: 125,
                    height: 35,
                    borderRadius: 25,
                    paddingLeft: 2,
                  }}
                >
                  <Image
                    source={peopleImg}
                    className="w-full h-full rounded-lg"
                  />
                </View>
              </View>
              <View className="w-1/4 flex items-center justify-end mr-2">
                <Button
                  title="Rejoindre"
                  btnClassName="bg-[#FE5F3C] w-full h-10"
                />
              </View>
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
            <LinearGradient
              colors={["#FF9C4E", "#FE5F3C"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ borderRadius: 36, padding: 3, marginTop: 10 }}
            >
              <Button
                title="Créer un match"
                btnClassName="bg-[transparent] h-10"
              ></Button>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

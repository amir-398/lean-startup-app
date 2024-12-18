import { String, Wrapper } from "@/components/nysaUi";
import { penIcon } from "@assets/icons";
import { playerImg } from "@assets/images";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, View } from "react-native";

export default function ProfilScreen() {
  return (
    <Wrapper py>
      <StatusBar />
      {/* profil view */}
      <View className="w-full h-96 bg-thertiary rounded-xl shadow overflow-hidden">
        <Image source={playerImg} className="w-full h-3/4" />
        <View className="flex-row items-center justify-between p-4">
          <View className="flex-row items-center ml-10 gap-5">
            <View className="h-12 w-0.5 bg-main opacity-40" />
            <View>
              <String variant="white" weight="bold">
                Sam petter
              </String>
              <String variant="white">Paris 75</String>
            </View>
          </View>
          <Image source={penIcon} className="size-8" />
        </View>
      </View>
      {/* user info view */}
      <View className="flex-row items-center justify-between gap-3 py-6">
        <View className="bg-white flex-1 aspect-square rounded-lg shadow justify-between p-2">
          <String>Age</String>
          <String weight="bold" variant="dark" size="2xl" position="right">
            26
          </String>
        </View>
        <View className="bg-white flex-1 aspect-square rounded-lg shadow justify-between p-2">
          <String>Taille</String>
          <String weight="bold" variant="dark" size="2xl" position="right">
            1.93cm
          </String>
        </View>
        <View className="bg-white flex-1 aspect-square rounded-lg shadow justify-between p-2">
          <String>Age</String>
          <String variant="dark" size="2xl" position="right">
            <String size="xl" variant="error">
              10
            </String>
            /
            <String className="text-[#168177]" size="2xl">
              12
            </String>
          </String>
        </View>
      </View>
    </Wrapper>
  );
}

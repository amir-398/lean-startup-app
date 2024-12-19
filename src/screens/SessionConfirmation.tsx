import { String, Wrapper } from "@/components/nysaUi";
import { confirmationSessionImg } from "@assets/images";
import { Icon } from "@rneui/themed";
import React from "react";
import { Image, View } from "react-native";
export default function SessionConfirmation() {
  return (
    <Wrapper className="bg-white" scrollView>
      {/* header */}
      <View className="flex mt-5">
        <View className="absolute">
          <Icon name="arrow-back-ios" type="materialIcons" color="#000" />
        </View>
        <String variant="dark" size="xl" position="center" weight="bold">
          Souscription
        </String>
      </View>
      <View className="my-5">
        <String position="center" size="2xl" weight="bold" variant="dark">
          Confirmation d’inscription
        </String>
        <String className="text-[#606060]" position="center">
          En rejoignant, tu t’engages à respecter les règles de bonne conduite :
          Respect des autres joueurs et du matériel.
        </String>
        <View className="my-10">
          <Image
            source={confirmationSessionImg}
            className="w-full h-60 rounded-xl mb-1"
          />
          <String>40 rue du chemin vert</String>
          <String variant="dark" size="xl">
            Stade Suzanne Lenglen, Paris 75015.
          </String>
        </View>
        <View className="flex-row justify-between items-center gap-4">
          <View className="bg-[#178278] rounded-full flex-1 py-2">
            <String variant="white" position="center">
              Aujour'hui- 16h
            </String>
          </View>
          <View className="border border-black rounded-full flex-1 py-2">
            <String variant="dark" position="center">
              Durée : 1h
            </String>
          </View>
          <View className="border border-black rounded-full flex-1 py-2">
            <String variant="dark" position="center">
              Débutant
            </String>
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

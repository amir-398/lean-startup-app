import { Button, String, Wrapper } from "@/components/nysaUi";
import { confirmationSessionImg, peopleImg } from "@assets/images";
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
        <String className="text-[#606060]" position="center" size="xs">
          En rejoignant, tu t’engages à respecter les règles de bonne conduite :
          Respect des autres joueurs et du matériel.
        </String>
        <View className="my-6">
          <Image
            source={confirmationSessionImg}
            className="w-full h-48 rounded-xl mb-1"
          />
          <String size="md">40 rue du chemin vert</String>
          <String variant="dark" size="md">
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
          <View className="border border-black rounded-full  flex-1 py-2">
            <String variant="dark" position="center">
              Débutant
            </String>
          </View>
        </View>
        <View className="flex rounded-xl">
          <View className="flex flex-row justify-center mt-2 p-1">
            <View className="flex flex-row">
              <Icon
                name="users"
                type="font-awesome"
                color="#f97e4b"
                className="mr-1"
              />
              <String variant="secondary">Team A</String>
            </View>
          </View>
          <View className="flex justify-start items-center">
            <Image
              source={peopleImg}
              resizeMode="contain"
              width={40}
              height={40}
            />
            <View className="flex flex-row w-full border border-gray-500 rounded-xl">
              <View className="flex justify-center p-2 ">
                <View className="">
                  <String size="xl" position="center" className="text-black">
                    5€
                  </String>
                  <String className="text-green-600" size="xs">
                    par personne
                  </String>
                </View>
              </View>

              <View className="flex flex-1 p-2 ">
                <String className="text-black">
                  Bienvenue dans l'équipe !
                </String>
                <View className="flex flex-row">
                  <Icon
                    name="check"
                    type="font-awesome"
                    color="#15803d"
                    size={15}
                  />
                  <String size="xs" className="ml-1">
                    Le paiement confirme ta place dans le match.
                  </String>
                </View>
                <View className="flex flex-row">
                  <Icon
                    name="check"
                    type="font-awesome"
                    color="#15803d"
                    size={15}
                  />
                  <String size="xs" className="ml-1">
                    Tu recevras un rappel 1h avant le début du match.
                  </String>
                </View>
                <View className="flex flex-row">
                  <Icon
                    name="warning"
                    type="font-awesome"
                    color="#eab308"
                    size={15}
                  />
                  <String size="xs" className="ml-1">
                    Aucun remboursement si tu ne te présentes pas.
                  </String>
                </View>
              </View>
            </View>
            <View className=" flex h-16 flex-row w-full p-1 border border-gray-500 rounded-xl mt-3">
              <Button
                title="Confirmer"
                btnClassName="bg-thertiary flex-1 h-4/5"
              />
              <Button
                title="Annuler"
                btnClassName="bg-white flex-1 h-4/5"
                textClassName="text-black"
              />
            </View>
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

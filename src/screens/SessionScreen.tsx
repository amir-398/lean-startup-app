import { Button, String, Wrapper } from "@/components/nysaUi";
import ROUTES from "@/constants/ROUTES";
import {
  sessionGroupPeople,
  sessionImg,
  sessionUserImg1,
  sessionUserImg2,
  sessionUserImg3,
  sessionUserImg4,
  sessionUserImg5,
} from "@assets/images";
import { Icon } from "@rneui/themed";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Image, View } from "react-native";
export default function SessionScreen({ navigation }) {
  const [selected, setSelected] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(false);
  return (
    <Wrapper className="bg-white" scrollView>
      <View className="flex-row items-center justify-between pt-5">
        <View className="bg-[#F9F9F9] justify-center items-center rounded-full w-10 h-10 pl-2">
          <Icon name="arrow-back-ios" type="materialIcons" color="#FFA24A" />
        </View>
        <String variant="dark" weight="bold" size="xl" position="center">
          Les sessions
        </String>
        <Icon name="menu" type="materialIcons" color="#FFA24A" size={30} />
      </View>
      <View className="flex-row items-center justify-between py-5 px-2">
        <View>
          <String variant="dark" size="xl" className="font-bold">
            Session 1
          </String>
          <String variant="dark">Aujourd'hui - 16H</String>
        </View>
        <View>
          <String variant="secondary" size="xl" weight="bold">
            Prix : 5€
          </String>
          <String variant="secondary" size="xs">
            par personne
          </String>
        </View>
      </View>
      <View className="w-full h-0.5 bg-gray-300" />
      {/* participants */}
      <View className="flex-row items-center justify-between py-5 px-2">
        <String variant="secondary" weight="bold" size="xl">
          Participants
        </String>
        <View className="bg-green-600 rounded-full px-5 py-2 flex-row items-center gap-2">
          <Icon name="users" type="font-awesome" color="#fff" size={15} />
          <String variant="white">8/10</String>
        </View>
      </View>

      {/* participants list */}
      <View className="flex-row items-center justify-between gap-1 h-24">
        <View className="flex-1 h-full">
          <Image
            source={sessionUserImg1}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <View className="flex-1 h-full">
          <Image
            source={sessionUserImg2}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <View className="flex-1 h-full">
          <Image
            source={sessionUserImg3}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <View className="flex-1 h-full">
          <Image
            source={sessionUserImg4}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <View className="flex-1 h-full">
          <Image
            source={sessionUserImg5}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
      </View>
      {/* session images and details */}
      <View className="my-5">
        <View className="h-56 w-full">
          <Image
            source={sessionImg}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <String>40 rue du chemin</String>
        <String variant="dark">Stade Suzanne Lenglen, Paris 75015.</String>
        <View className="flex-row items-center gap-2 mt-2">
          <View className="flex-row items-center gap-2 bg-[#D9D9D9] py-3 px-2">
            <String weight="bold" size="sm" className="text-[#606060]">
              Durée : 1 heure
            </String>
            <Icon name="clockcircleo" type="ant-design" color="#606060" />
          </View>
          <View className="flex-row items-center gap-2 bg-[#D9D9D9] py-3 px-2">
            <String weight="bold" size="sm" className="text-[#606060]">
              Niveau : Débutant
            </String>
            <Icon name="trophy-outline" type="ionicon" color="#606060" />
          </View>
        </View>
      </View>
      {/* session teams */}
      {/* team 01 */}
      <View className="my-5 gap-5">
        <View className="bg-[#F4F4F4] p-5 rounded-lg">
          <View className="flex-row items-center gap-2">
            <Icon name="users" type="font-awesome" color="#f97e4b" />
            <String variant="secondary">Equipe A</String>
          </View>
          <View className="flex-row items-center justify-between mt-5 gap-10">
            <View className="flex-1 h-20">
              <Image
                source={sessionGroupPeople}
                resizeMode="contain"
                className="w-full h-full"
              />
            </View>
            <View className="flex-row items-center gap-2 border border-[#178278] px-3 py-2 rounded-full">
              <String className="text-[#178278]" weight="bold" size="sm">
                Selectionner
              </String>
              <Checkbox
                color="#178278"
                onValueChange={() => {
                  if (selected) {
                    setSelected(false);
                  } else {
                    setSelected(true);
                    setSelectedTeam(false);
                  }
                }}
                value={selected}
              />
            </View>
          </View>
        </View>
        {/* team 02 */}
        <View className="bg-[#F4F4F4] p-5 rounded-lg">
          <View className="flex-row items-center gap-2">
            <Icon name="users" type="font-awesome" color="#f97e4b" />
            <String variant="secondary">Equipe B</String>
          </View>
          <View className="flex-row items-center justify-between mt-5 gap-10">
            <View className="flex-1 h-20">
              <Image
                source={sessionGroupPeople}
                resizeMode="contain"
                className="w-full h-full"
              />
            </View>
            <View className="flex-row items-center gap-2 border border-[#178278] px-3 py-2 rounded-full">
              <String className="text-[#178278]" weight="bold" size="sm">
                Selectionner
              </String>
              <Checkbox
                color="#178278"
                onValueChange={() => {
                  if (selectedTeam) {
                    setSelectedTeam(false);
                  } else {
                    setSelectedTeam(true);
                    setSelected(false);
                  }
                }}
                value={selectedTeam}
              />
            </View>
          </View>
        </View>
      </View>
      {/* button */}
      <Button
        title="Rejoindre la partie"
        btnClassName="bg-[#FE5F3C] mb-8"
        onPress={() => navigation.navigate(ROUTES.SESSION_CONFIRMATION_SCREEN)}
      />
    </Wrapper>
  );
}

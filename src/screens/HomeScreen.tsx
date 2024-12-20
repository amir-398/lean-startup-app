import { TimePickerModal } from "@/components/modals";
import CalendarModal from "@/components/modals/calendar-modal";
import { Button, String, Wrapper } from "@/components/nysaUi";
import ROUTES from "@/constants/ROUTES";
import {
  homeImg,
  part1img,
  part2img,
  part3img,
  part4img,
  part5img,
  su1Img,
  su2Img,
} from "@assets/images";
import type { DropdownItem } from "@mustapha-ghlissi/react-native-select-picker";
import Dropdown from "@mustapha-ghlissi/react-native-select-picker";
import { Icon } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
const DistanceItems: DropdownItem[] = [
  {
    label: "moins de 1km",
    value: 1,
  },
  {
    label: "moins de 5km",
    value: 2,
  },
  {
    label: "moins de 10km",
    value: 3,
  },
  {
    label: "moins de 15km",
    value: 4,
  },
];

const typeMatchItems: DropdownItem[] = [
  {
    label: "1x1",
    value: 1,
  },
  {
    label: "2x2",
    value: 2,
  },
  {
    label: "3x3",
    value: 3,
  },
  {
    label: "5x5",
    value: 4,
  },
];

const levelsItems: DropdownItem[] = [
  {
    label: "Débutant",
    value: 1,
  },
  {
    label: "Intermédiaire",
    value: 2,
  },
  {
    label: "Avancé",
    value: 3,
  },
];
export default function HomeScreen({ navigation }) {
  const [hourModalVisible, setHourModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<DropdownItem | null>(
    null
  );

  const [calendarValue, setCalendarValue] = useState<null | string>(null);

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
        className="w-full shadow p-5 rounded-2xl my-5"
      >
        <String size="xl" variant="white" weight="bold">
          🔥MATCHMAKING
        </String>
        <String variant="white" className="mt-1">
          Trouves les matchs et les joueurs parfaits en fonction de ton niveau,
          ta disponibilité et tes envies !
        </String>
        <View className="flex flex-col gap-5 mt-6">
          <View className="flex-row justify-between items-center">
            <TimePickerModal
              visible={hourModalVisible}
              setVisible={setHourModalVisible}
            />
            <CalendarModal
              setCalendarValue={setCalendarValue}
              setHourModalVisible={setHourModalVisible}
            >
              <TextInput
                placeholder={
                  calendarValue ? calendarValue + " à..." : "Date - Heure"
                }
                className="bg-[#FFFFFF17] py-3 rounded-lg placeholder:text-white placeholder:text-xl px-5  border-2 border-[#FFFFFF3D] w-48"
                readOnly
              />
            </CalendarModal>
            <Dropdown
              items={DistanceItems}
              onSelectChange={(value) => setSelectedLanguage(value)}
              placeholder="Distance"
              styles={{
                inputContainer: {
                  width: 170,
                  backgroundColor: "#FFFFFF17",
                  borderColor: "red",
                },
                activeItem: {
                  backgroundColor: "transparent",
                },
                activeItemText: {
                  color: "#FF6D32",
                },
              }}
              outlineColor="#FFFFFF3D"
            />
          </View>
          <View className="flex-row justify-between items-center">
            <Dropdown
              items={typeMatchItems}
              onSelectChange={(value) => setSelectedLanguage(value)}
              placeholder="Type de match"
              styles={{
                inputContainer: {
                  width: 170,
                  backgroundColor: "#FFFFFF17",
                  borderColor: "red",
                },
                activeItem: {
                  backgroundColor: "transparent",
                },
                activeItemText: {
                  color: "#FF6D32",
                },
              }}
              outlineColor="#FFFFFF3D"
            />
            <Dropdown
              items={levelsItems}
              onSelectChange={(value) => setSelectedLanguage(value)}
              placeholder="Niveau"
              styles={{
                inputContainer: {
                  width: 170,
                  backgroundColor: "#FFFFFF17",
                  borderColor: "red",
                },
                activeItem: {
                  backgroundColor: "transparent",
                },
                activeItemText: {
                  color: "#FF6D32",
                },
              }}
              outlineColor="#FFFFFF3D"
            />
          </View>
        </View>
        <Button
          title="Lancer 🔥"
          btnClassName="bg-white rounded-xl mt-8 w-52"
          textClassName="text-[#FF6D32] font-bold text-xl"
          onPress={() => navigation.navigate(ROUTES.LOADING_SCREEN)}
        />
      </LinearGradient>

      {/* -------------------------------------------------- */}

      {/* Sessions en cours */}
      <View className="relative -z-50">
        <View className="flex-row justify-between items-center mb-3 ">
          <String size="xl" variant="dark" className="font-bold ">
            Sessions en cours
          </String>
          <View className="flex-row items-center gap-2">
            <String variant="secondary" weight="bold">
              Tout voir
            </String>
            <Icon name="chevron-right" size={24} color="#FF6D32" />
          </View>
        </View>
        {/* Sessions en cours */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-4 mb-8"
        >
          <View className="flex-row justify-between bg-white w-auto h-52 rounded-lg shadow p-3 gap-3">
            <Image
              source={su1Img} // Remplacez par le chemin correct
              resizeMode="contain"
              className="w-56 h-full"
            />
            <View className="w-56 flew-wrap">
              <View className="w-28 bg-[#00000014] justify-center items-center mb-4">
                <String variant="dark">Paris 75</String>
              </View>
              <String variant="dark" className="font-bold">
                Stade Pierre-de-Coubertin
              </String>
              <String variant="dark" className="flex-wrap">
                Dribbles et slam dunks résonnent au Stade Pierre-de-Coubertin.
              </String>
            </View>
          </View>
          <View className="flex-row justify-between bg-white w-auto h-52 rounded-lg shadow p-3 gap-3">
            <Image
              source={su2Img} // Remplacez par le chemin correct
              resizeMode="contain"
              className="w-56 h-full"
            />
            <View className="w-56 flew-wrap">
              <View className="w-28 bg-[#00000014] justify-center items-center mb-4">
                <String variant="dark">Paris 75</String>
              </View>
              <String variant="dark" className="font-bold">
                Halle Georges Carpentier
              </String>
              <String variant="dark" className="flex-wrap">
                Match amical en cours au avec une vue imprenable sur la Seine.
              </String>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* nos partenaires */}
      <View>
        <String size="xl" variant="dark" className="font-bold mb-5">
          Nos partenaires
        </String>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="mb-28"
        >
          <Image source={part1img} resizeMode="contain" className="size-40" />
          <Image source={part2img} resizeMode="contain" className="size-40" />
          <Image source={part3img} resizeMode="contain" className="size-40" />
          <Image source={part4img} resizeMode="contain" className="size-40" />
          <Image source={part5img} resizeMode="contain" className="size-40" />
        </ScrollView>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});

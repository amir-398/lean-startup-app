import { String, Wrapper } from "@/components/nysaUi";
import {
  mySession1,
  mySession2,
  mySession3,
  mySession4,
  mySession5,
} from "@assets/images";
import { Icon } from "@rneui/themed";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
export default function MySessionScreen() {
  return (
    <Wrapper scrollView>
      <View className="flex-row items-center justify-between pt-5">
        <View className="bg-[#F9F9F9] justify-center items-center rounded-full w-10 h-10 pl-2">
          <Icon name="arrow-back-ios" type="materialIcons" color="#FFA24A" />
        </View>
        <String variant="dark" weight="bold" size="xl" position="center">
          mes sessions
        </String>
        <Icon name="menu" type="materialIcons" color="#FFA24A" size={30} />
      </View>
      <String variant="secondary" className="font-bold -mb-16 mt-5" size="2xl">
        Sessions en cours
      </String>
      <View className="w-full h-96">
        <Image
          source={mySession1}
          className="w-full h-full"
          resizeMode="contain"
        />
      </View>
      <String variant="secondary" className="font-bold -mt-16 " size="2xl">
        Sessions terminées
      </String>
      <View>
        <View className="flex-row justify-between items-center gap-5">
          <View className="h-80 flex-1 ">
            <Image
              source={mySession2}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
          <View className="h-80 flex-1 ">
            <Image
              source={mySession3}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
        </View>
        <View className="flex-row justify-between items-center gap-5 mb-32">
          <View className="h-80 flex-1 ">
            <Image
              source={mySession4}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
          <View className="h-80 flex-1 ">
            <Image
              source={mySession5}
              className="w-full h-full"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});

import { String, Wrapper } from "@/components/nysaUi";
import { Icon } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function SessionConfirmation() {
  return (
    <Wrapper className="bg-white" scrollView>
      {/* header */}
      <View className="flex">
        <View className="absolute">
          <Icon name="arrow-back-ios" type="materialIcons" color="#000" />
        </View>
        <String variant="dark" size="xl" position="center">
          Souscription
        </String>
      </View>
      <String position="center" size="2xl" weight="bold" variant="dark">
        Confirmation d’inscription
      </String>
    </Wrapper>
  );
}

const styles = StyleSheet.create({});

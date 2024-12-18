import { ImageBackground, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import String from "../string";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { EventProps } from "@/utils/types";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@/constants/ROUTES";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export default function EventItem({ item }: { item: EventProps }) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <Pressable
      onPress={() => navigation.navigate(ROUTES.partyScreen, { event: item })}
      className="mb-5"
    >
      <ImageBackground
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        imageStyle={{ height: "auto", width: "100%", borderRadius: 12 }}
        className="w-full h-48 relative self-center overflow-hidden rounded-lg"
      >
        <LinearGradient
          start={{ x: 0.5, y: 0.8 }}
          end={{ x: 0.5, y: 0 }}
          colors={["rgba(0,0,0,0.6)", "transparent"]}
          className="absolute top-0 left-0 w-full h-full justify-end p-3 gap-2"
        >
          <View className="flex-row justify-between items-center">
            <String>{item.title}</String>
            <String>{item.ticket_price} €</String>
          </View>
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center gap-1">
              <FontAwesomeIcon icon={["fas", "location-dot"]} color="#fff" />
              <String size="xs">
                {item.address} , {item.city}.
              </String>
            </View>
            <String size="xs">
              {item.startDate}h, à {item.endDate}h
            </String>
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
}

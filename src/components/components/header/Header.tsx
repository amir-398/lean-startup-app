import { Logo, String, Wrapper } from "@/components/nysaUi";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { useState } from "react";
import { View } from "react-native";
type HeaderProps = {
  screen: string;
};

export default function Header({ screen }: HeaderProps) {
  const navigation: any = useNavigation();
  const [searchInput, setSearchInput] = useState(false);
  // De

  return (
    <Wrapper
      px={false}
      className="flex-row items-center justify-between bg-white pt-5 h-16"
    >
      <View className="flex-row items-center">
        <Logo size="2xs" />
        <String size="2xl" weight="bold" variant="dark" className="mt-1 -ml-3">
          Ludora
        </String>
      </View>
      <View className="mr-5">
        <Icon name="notifications" type="ionicon" size={30} />
      </View>
    </Wrapper>
  );
}

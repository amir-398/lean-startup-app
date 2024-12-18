import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { String, Wrapper } from "@/components/nysaUi";
import { StatusBar } from "expo-status-bar";
type HeaderProps = {
  screen: string;
};

export default function Header({ screen }: HeaderProps) {
  const navigation: any = useNavigation();
  const [searchInput, setSearchInput] = useState(false);
  // De

  return (
    <Wrapper px={false}>
      <StatusBar style="light" animated />
      <String>Header</String>
    </Wrapper>
  );
}

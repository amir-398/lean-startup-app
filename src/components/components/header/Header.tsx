import { Logo, String, Wrapper } from "@/components/nysaUi";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
type HeaderProps = {
  screen: string;
};

export default function Header({ screen }: HeaderProps) {
  const navigation: any = useNavigation();
  const [searchInput, setSearchInput] = useState(false);
  // De

  return (
    <Wrapper px={false} className="flex-row items-center bg-white py-4">
      <Logo size="xs" />
      <String size="2xl" weight="bold" variant="secondary">
        Ludora
      </String>
    </Wrapper>
  );
}

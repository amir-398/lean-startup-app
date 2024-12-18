import { View } from "react-native";
import { Button, String, Wrapper } from "@components/nysaUi";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import COLORS from "@constants/COLORS";
import ROUTES from "@constants/ROUTES";
import { useNavigation } from "@react-navigation/native";

type SuccesScreenProps = {
  title: string;
  description: string;
  handleSubmit: () => void;
  primaryBtnTitle: string;
  secondaryBtnTile: string;
};

export default function SuccesScreen({
  title,
  description,
  handleSubmit,
  primaryBtnTitle,
  secondaryBtnTile = "Retour à la page d'accueil",
}: SuccesScreenProps) {
  const navigation: any = useNavigation();
  return (
    <Wrapper className="justify-around">
      <View className="gap-3">
        <View className="bg-white p-5 rounded-full size-28 justify-center items-center self-center">
          <FontAwesomeIcon
            icon="check"
            size={70}
            color={COLORS.backgroundColor}
          />
        </View>

        <String size="xl" position="center">
          {title}
        </String>
      </View>
      <String size="sm" position="center">
        {description}
      </String>
      <View className="gap-4">
        <Button title={primaryBtnTitle} onPress={handleSubmit} />
        <Button
          title={secondaryBtnTile}
          variant="secondary"
          onPress={() => navigation.navigate(ROUTES.homeScreen)}
        />
      </View>
    </Wrapper>
  );
}

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  LandingPage: undefined;
  signInStep1Screen: undefined;
  signUpStep1Screen: undefined;
  signUpGlobalStepScreen: undefined;
  signInGlobalStepScreen: undefined;
  signUpStep2Screen: undefined;
  signUpStep3Screen: undefined;
  signUpStep4Screen: undefined;
  signUpStep5Screen: undefined;
  signUpStep6Screen: undefined;
  signUpStep4MailScreen: undefined;
  signUpStep4PhoneScreen: undefined;
  signUpStep5MailScreen: undefined;
  signUpStep5PhoneScreen: undefined;
  signUpStep6MailScreen: undefined;
};
export type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

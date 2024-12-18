import { useState, useEffect } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/nysaUi/dialog";
import { Button, CustomIcon, String } from "@/components/nysaUi";
import COLORS from "@constants/COLORS";
import FONTS from "@constants/FONTS";

interface HeaderFilterModalProps {
  children: React.ReactNode;
}

const MAXIMUM_PRICE = 100;

export default function FilterPriceModal({ children }: HeaderFilterModalProps) {
  const [visible, setVisible] = useState(false);
  const [sliderValue, setSliderValue] = useState<[number, number]>([0, 1]);
  const [prices, setPrices] = useState({ minimumPrice: 0, maximumPrice: 100 });
  const [minErrorPrice, setMinErrorPrice] = useState(false);
  const [maxErrorPrice, setMaxErrorPrice] = useState(false);

  useEffect(() => {
    // Met à jour les prix lorsque le slider change
    updatePricesFromSlider(sliderValue);
  }, [sliderValue]);

  const updatePricesFromSlider = (value: [number, number]) => {
    const [minVal, maxVal] = value;
    const newMin = Math.floor(minVal * MAXIMUM_PRICE);
    const newMax = Math.floor(maxVal * MAXIMUM_PRICE);

    // Validation des erreurs
    setMinErrorPrice(newMin > newMax);
    setMaxErrorPrice(newMax < newMin);

    setPrices({
      minimumPrice: newMin,
      maximumPrice: newMax,
    });
  };

  const updateSliderFromPrices = (min: number, max: number) => {
    // Évite les valeurs non numériques ou incohérentes
    if (isNaN(min) || isNaN(max)) return;

    const minRatio = min / MAXIMUM_PRICE;
    const maxRatio = max / MAXIMUM_PRICE;
    setSliderValue([minRatio, maxRatio]);
  };

  const handleChangeValue = (minString: string, maxString: string) => {
    const isDigitsOnly = /^[0-9]*$/;

    if (!isDigitsOnly.test(minString) || !isDigitsOnly.test(maxString)) {
      return; // ignore les caractères non numériques
    }

    const minVal = minString === "" ? 0 : parseInt(minString, 10);
    const maxVal = maxString === "" ? 0 : parseInt(maxString, 10);

    // Validation des erreurs
    setMinErrorPrice(minVal > maxVal);
    setMaxErrorPrice(maxVal < minVal);

    setPrices({ minimumPrice: minVal, maximumPrice: maxVal });

    if (minVal <= maxVal) {
      updateSliderFromPrices(minVal, maxVal);
    }
  };

  const handleSubmit = () => {
    // Soumission finale, fermeture de la modal
    if (!minErrorPrice && !maxErrorPrice) {
    }
  };

  return (
    <Dialog>
      <DialogTrigger setVisible={setVisible}>{children}</DialogTrigger>
      <DialogContent visible={visible} setVisible={setVisible} closeMark>
        <String size="xl" weight="bold" position="center">
          Fourchette de prix
        </String>

        {/* Slider */}
        <View className="py-10">
          <Slider
            value={sliderValue}
            maximumTrackStyle={styles.sliderMaximumTrack}
            minimumTrackTintColor={COLORS.primaryColor}
            thumbTintColor={COLORS.primaryColor}
            onValueChange={(value) => setSliderValue(value as [number, number])}
          />
        </View>

        {/* Inputs Prix */}
        <View className="flex-row items-center gap-10 px-1 mb-10">
          {/* Input Minimum */}
          <View
            className="border border-1 border-white rounded-md flex-grow p-2"
            style={[{ borderColor: minErrorPrice ? "red" : "#fff" }]}
          >
            <String className="text-[rgba(255,255,255,0.5)]">Minimum</String>
            <View className="flex-row items-center">
              <TextInput
                style={styles.priceInput}
                value={prices.minimumPrice.toString()}
                keyboardType="numeric"
                onChangeText={(min) =>
                  handleChangeValue(min, prices.maximumPrice.toString())
                }
                cursorColor="#FFF"
                maxLength={4}
              />
              <String>€</String>
            </View>
          </View>

          {/* Input Maximum */}
          <View
            className="border border-1 border-white rounded-md flex-grow p-2"
            style={[{ borderColor: maxErrorPrice ? "red" : "#fff" }]}
          >
            <String className="text-[rgba(255,255,255,0.5)]">Maximum</String>
            <View className="flex-row items-center">
              <TextInput
                style={styles.priceInput}
                value={
                  prices.maximumPrice === 0
                    ? ""
                    : prices.maximumPrice.toString()
                }
                keyboardType="numeric"
                onChangeText={(max) =>
                  handleChangeValue(prices.minimumPrice.toString(), max)
                }
                cursorColor="#FFF"
                maxLength={4}
              />
              <String>€</String>
            </View>
          </View>
        </View>

        <Button title="Confirmer" onPress={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  sliderMaximumTrack: {
    borderColor: COLORS.primaryColor,
    borderWidth: 1.2,
    backgroundColor: "transparent",
  },

  priceInput: {
    fontFamily: FONTS.primaryFontMedium,
    color: "#fff",
    flex: 1,
    marginRight: 5,
  },
});

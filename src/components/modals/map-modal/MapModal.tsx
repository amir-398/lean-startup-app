import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Dialog, DialogContent, DialogTrigger } from "@nysaUi/dialog";
import MapView, { Marker, PROVIDER_GOOGLE, Region } from "react-native-maps";
import Constants from "expo-constants";
import { Button, CustomIcon, String, Wrapper } from "@components/nysaUi";
import PlacesInput from "react-native-places-input";
import { MapModalProps, SelectedAddress } from "../utils/types";
import COLORS from "@/constants/COLORS";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { getCurrentLocation } from "@/utils/location";

const MAP_POSITION = (lat = 46.2276, lng = 2.2137, delta = 6): Region => ({
  latitude: lat,
  longitude: lng,
  latitudeDelta: delta,
  longitudeDelta: delta,
});

export default function MapModal({
  children,
  setFieldValue,
  values,
  location = false,
}: MapModalProps) {
  const mapRef = useRef<MapView>(null);
  const [selectedAddress, setSelectedAddress] =
    useState<SelectedAddress | null>(null);
  const [visible, setVisible] = useState(false);
  const {
    currentLocation,
    location: userLocation,
    loading,
  } = getCurrentLocation();

  // Calcul de la position initiale sur la carte
  const initialiseMap = useMemo(() => {
    if (visible && values?.latitude && values?.longitude) {
      return MAP_POSITION(values.latitude, values.longitude, 0.01);
    }
    return MAP_POSITION();
  }, [visible]);

  // Sélection d'une adresse via PlacesInput
  const handleSelectAddress = useCallback(
    (place: { result: SelectedAddress }) => {
      const { lat, lng } = place.result.geometry.location;
      setSelectedAddress(place.result);
      if (mapRef.current) {
        mapRef.current.animateToRegion(MAP_POSITION(lat, lng, 0.01), 2000);
      }
      Keyboard.dismiss();
    },
    []
  );

  console.log("userLocation", userLocation);

  // getting the position of the user on the map when the user location is available
  useEffect(() => {
    if (mapRef.current && userLocation) {
      mapRef.current.animateToRegion(
        MAP_POSITION(
          userLocation.coords.latitude,
          userLocation.coords.longitude,
          0.01
        ),
        2000
      );
    }
  }, [userLocation]);

  // Validation et envoi des données sélectionnées
  const handleSubmit = useCallback(() => {
    if (!selectedAddress) return;

    setFieldValue("address", selectedAddress.formatted_address);
    setFieldValue("latitude", selectedAddress.geometry.location.lat);
    setFieldValue("longitude", selectedAddress.geometry.location.lng);

    setVisible(false);
  }, [selectedAddress, setFieldValue, setVisible]);

  // Réinitialisation de l'adresse sélectionnée à la fermeture du modal
  useEffect(() => {
    if (!visible) {
      setSelectedAddress(null);
    }
  }, [visible]);

  const btnDisabled = !selectedAddress;

  return (
    <Dialog>
      <DialogTrigger setVisible={setVisible}>{children}</DialogTrigger>
      <DialogContent
        visible={visible}
        setVisible={setVisible}
        closeMark
        container={false}
      >
        <Wrapper px={false}>
          <MapView
            ref={mapRef}
            style={styles.map}
            initialRegion={initialiseMap}
            provider={PROVIDER_GOOGLE}
          >
            {(selectedAddress?.geometry?.location ||
              (values?.latitude && values?.longitude && values?.address)) && (
              <Marker
                coordinate={{
                  latitude:
                    selectedAddress?.geometry?.location?.lat ?? values.latitude,
                  longitude:
                    selectedAddress?.geometry?.location?.lng ??
                    values.longitude,
                }}
                title={selectedAddress?.formatted_address ?? values.address}
              />
            )}
            {location &&
              userLocation?.coords?.latitude &&
              userLocation?.coords?.longitude && (
                <Marker
                  coordinate={{
                    latitude: userLocation?.coords.latitude,
                    longitude: userLocation?.coords.longitude,
                  }}
                />
              )}
          </MapView>

          <PlacesInput
            googleApiKey={process.env.EXPO_PUBLIC_GOOGLE_API_KEY || ""}
            placeHolder="Adresse du lieu de l'événement"
            queryCountries={["fr"]}
            stylesContainer={styles.placesInputContainer}
            stylesList={styles.placesInputList}
            stylesInput={styles.placesInputField}
            onSelect={handleSelectAddress}
            requiredCharactersBeforeSearch={4}
            requiredTimeBeforeSearch={400}
          />
          {location && (
            <TouchableOpacity
              className="bg-white size-12 rounded-md absolute bottom-32 right-10 justify-center items-center"
              onPress={currentLocation}
            >
              {loading ? (
                <String>loading</String>
              ) : (
                <FontAwesomeIcon
                  icon={["fas", "location-crosshairs"]}
                  color={COLORS.primaryColor}
                  size={25}
                />
              )}
            </TouchableOpacity>
          )}
          <Button
            onPress={handleSubmit}
            title="Confirmer"
            disabled={btnDisabled}
            btnClassName="absolute bottom-10 w-4/5"
          />
        </Wrapper>
      </DialogContent>
    </Dialog>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  placesInputContainer: {
    position: "absolute",
    top: 20,
    shadowOpacity: 0,
    borderColor: "#dedede",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  placesInputList: {
    borderColor: "#dedede",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    left: -1,
    right: -1,
  },
  placesInputField: {
    borderRadius: 5,
  },
});

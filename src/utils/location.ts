import * as Location from "expo-location";
import { useState } from "react";

export function getCurrentLocation() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [status, setStatus] = useState<Location.LocationAccuracy | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const currentLocation = async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setStatus(status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      const getlocation = await Location.getCurrentPositionAsync({});
      setLocation(getlocation);
    } catch (e) {
      setErrorMsg(e);
    } finally {
      setLoading(false);
    }
  };

  return { currentLocation, location, errorMsg, loading };
}

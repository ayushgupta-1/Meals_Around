import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { Navigation } from "./src/infrastructure/navigation";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { SafeArea } from "./src/components/utility/safe-area.component";

const firebaseConfig = {
  apiKey: "AIzaSyBm9rrX06_S3fVCXkljJODVIhnNIqJK_ug",
  authDomain: "mealstogo-e36ed.firebaseapp.com",
  projectId: "mealstogo-e36ed",
  storageBucket: "mealstogo-e36ed.appspot.com",
  messagingSenderId: "106827352730",
  appId: "1:106827352730:web:5503d857bf630b8ddeed23",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

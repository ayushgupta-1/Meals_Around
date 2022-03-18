import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Search } from "../components/search.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
//import { Spacer } from "../../../components/spacer/spacer.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            //<Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
            //</Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </SafeArea>
  );
};

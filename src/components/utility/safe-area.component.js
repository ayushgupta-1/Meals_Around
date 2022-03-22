import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const SafeAreaFav = styled(SafeAreaView)`
  flex: 1;
  margin-top: 12px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

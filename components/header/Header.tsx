import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import headerStyle from "./Header.style";

type HeaderProps = {
  children?: ReactNode;
};

const Header = ({ children }: HeaderProps) => (
  <View style={headerStyle.headerContainer}>
    <Text style={headerStyle.text}>{children}</Text>
  </View>
);

export default Header;

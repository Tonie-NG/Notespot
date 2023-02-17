import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./headerStyle";

function Header({ text, header_icon }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.textStyle}>{text}</Text>
        {header_icon ? (
          <AntDesign name={header_icon} size={30} color={"#fff"} />
        ) : null}
      </View>
    </View>
  );
}

export default Header;

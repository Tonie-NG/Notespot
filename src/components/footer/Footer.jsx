import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./footerStyle";

function Footer() {
  return (
    <View>
      <View style={styles.homeFooter}>
        <AntDesignzz name="home" size={25} color="#fff" />
        <AntDesign name="plus" size={35} color="#fff" />
        <AntDesign name="user" size={25} color="#fff" />
      </View>
    </View>
  );
}

export default Footer;

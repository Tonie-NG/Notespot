import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/header/Header";
import NoteBar from "../../components/noteBar/NoteBar";
import { styles } from "./homeStyle";

export default function Home() {
  const text = "Home";
  const header_icon = "search1";
  return (
    <View style={styles.container}>
      <Header text={text} header_icon={header_icon} />
      <ScrollView>
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
        <NoteBar />
      </ScrollView>
    </View>
  );
}

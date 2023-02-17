import React from "react";
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/header/Header";
import SaveButton from "../../components/saveButton/SaveButton";
import { styles } from "./writeStyle";

function Write() {
  const text = "New Note";
  const header_icon = "";
  return (
    <View style={styles.container}>
      <Header text={text} header_icon={header_icon} />
      <TextInput
        style={styles.textInputTopic}
        placeholder="Title"
        placeholderTextColor={"#646E78"}
      />
      <ScrollView style={styles.textInputScroll}>
        <TextInput
          autoFocus={true}
          style={styles.textInput}
          multiline={true}
          placeholder="Start Typing ........"
          placeholderTextColor={"#646E78"}
        />
      </ScrollView>
      <SaveButton />
    </View>
  );
}

export default Write;

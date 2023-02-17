import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Header from "../../components/header/Header";
import SaveButton from "../../components/saveButton/SaveButton";
import { styles } from "./noteStyle";

function Edit() {
  const text = "Note";
  const header_icon = "edit";
  return (
    <View style={styles.container}>
      <Header text={text} header_icon={header_icon} />
      <Text style={styles.textInputTopic}>David is a Fool</Text>
      <ScrollView style={styles.textInputScroll}>
        <Text style={styles.textInput}>Editable</Text>
      </ScrollView>
    </View>
  );
}

export default Edit;

import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import Header from "../../components/header/Header";
import SaveButton from "../../components/saveButton/SaveButton";
import { styles } from "./editStyle";

function Edit() {
  const text = "Edit";
  const header_icon = "";
  return (
    <View style={styles.container}>
      <Header text={text} header_icon={header_icon} />
      <TextInput
        style={styles.textInputTopic}
        placeholder="Title"
        placeholderTextColor={"#646E78"}
        defaultValue={"New Note"}
      />
      <ScrollView style={styles.textInputScroll}>
        <TextInput
          autoFocus={true}
          style={styles.textInput}
          multiline={true}
          placeholder="Start Typing ........"
          placeholderTextColor={"#646E78"}
          defaultValue={"Editable"}
        />
      </ScrollView>
      <SaveButton />
    </View>
  );
}

export default Edit;

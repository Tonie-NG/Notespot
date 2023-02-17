import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./saveButtonStyle";

function SaveButton() {
  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}> Save</Text>
      </TouchableOpacity>
    </View>
  );
}

export default SaveButton;

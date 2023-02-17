import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./noteBarStyles";

function NoteBar() {
  return (
    <View>
      <TouchableOpacity style={styles.notesMini}>
        <View>
          <Text style={styles.headerText}>Hello</Text>
          <Text style={styles.text}>20th January 2030 11:49am</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default NoteBar;

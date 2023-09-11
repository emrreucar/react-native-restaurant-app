import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

//! Search Screen'e bağlı ve propslar oradan geliyor.
export default function SearchBar({ term, setTerm, onTermSubmit }) {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.searchIcon}
        name="search-outline"
        size={20}
        color="black"
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Ara"
        autoCorrect={false}
        autoCapitalize="none"
        value={term}
        onChangeText={setTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },

  searchIcon: {
    marginHorizontal: 15,
  },

  searchInput: {
    flex: 1,
    fontSize: 20,
  },
});

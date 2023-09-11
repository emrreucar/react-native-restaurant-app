import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ResultsShowScreen({ route }) {
  const id = route.params.id;

  const [result, setResult] = useState(null);

  const getResult = async () => {
    const response = await yelp.get(`/${id}`);
    // console.log(response);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}> {result?.name} </Text>
        <Text style={styles.phone}> {result?.phone} </Text>

        {result?.is_closed ? (
          <MaterialIcons
            style={{ color: "green" }}
            name="delivery-dining"
            size={30}
            color="black"
          />
        ) : (
          <AntDesign
            style={{ color: "red" }}
            name="closecircleo"
            size={30}
            color="black"
          />
        )}
      </View>
      <FlatList
        data={result?.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 10,
  },
  contentWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 6,
  },
  phone: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "500",
    fontStyle: "italic",
  },
});

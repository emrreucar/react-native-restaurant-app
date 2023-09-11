import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ResultItem from "./ResultItem";

import { useNavigation } from '@react-navigation/native';

//! SearchScreen'e bağlı ve proplarını oradan alıyor.

export default function ResultsList({ title, results }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('ResultsShow', { id: item.id } )}>
              <ResultItem result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
});

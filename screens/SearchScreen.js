import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchApi, results] = useResults();
  //console.log(results);

  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((results) => {
      return results.price === price;
    });
  };
  return (
    <View>
      <SearchBar
        term={term}
        setTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />

      {results.length === 0 ? (
        <>
          <Text
            style={{
              alignSelf: "center",
              marginVertical: 40,
              fontSize: 26,
              fontWeight: "bold",
            }}
          >
            Üzgünüz!😥 Bu ürüne ait restoran bulunamadı!
          </Text>
        </>
      ) : (
        <>
          <ResultsList
            results={filterResultsByPrice("₺")}
            title="Ucuz Restoranlar"
          />
          <ResultsList
            results={filterResultsByPrice("₺₺")}
            title="Uygun Restoranlar"
          />
          <ResultsList
            results={filterResultsByPrice("₺₺₺")}
            title="Pahalı Restoranlar"
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});

import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, ActivityIndicator } from "react-native";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://dragonball-api.com/api/characters");
        const data = await response.json();
        setCharacters(data.items); // Ajustamos según la estructura de la API
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={characters}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20, alignItems: "center" }}>
              <Image 
                source={{ uri: item.image }} 
                style={{ width: 350, height: 400, borderRadius: 10, resizeMode: "contain" }} 
              />
                <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>{item.name}</Text>
                <Text>{item.race}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default App;

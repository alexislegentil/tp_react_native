import React from "react";
import { View, Text } from "react-native";

const deuxiemeTableau = [
  // Le contenu de votre deuxième tableau ici...
];

function DeuxiemePage() {
  return (
    <View>
      <Text>Contenu de la deuxième page :</Text>
      {deuxiemeTableau.map((element, index) => (
        <Text key={index}>{element}</Text>
      ))}
    </View>
  );
}

export default DeuxiemePage;

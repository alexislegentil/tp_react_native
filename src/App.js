import * as React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import DeuxiemePage from "./DeuxiemePage";

const logoUri = `data:image/png;base64,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`;

const joueursOM = [
  {
    nom: "Steve Mandanda",
    age: 36,
    numero_maillot: 30,
    poste: "Gardien de but",
    nationalite: "France",
    photo:
      "data:image/jpeg;base64,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"
  },
  {
    nom: "Dimitri Payet",
    age: 34,
    numero_maillot: 10,
    poste: "Milieu de terrain",
    nationalite: "France",
    photo:
      "https://la1ere.francetvinfo.fr/image/Lpq8WxZPyp0ZuxxajHFFLc8yp5o/1200x1200/outremer/2023/02/10/63e65830b47b3_whatsapp-image-2023-02-10-at-15-42-48.jpeg"
  },
  {
    nom: "Arkadiusz Milik",
    age: 28,
    numero_maillot: 99,
    poste: "Attaquant",
    nationalite: "Pologne",
    photo:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt007eed78268d15c2/61fd9caa13cd6311f923f05b/Milik_Marsiglia.jpg?auto=webp&format=pjpg&width=3840&quality=60"
  },
  {
    nom: "Pape Gueye",
    age: 22,
    numero_maillot: 21,
    poste: "Milieu de terrain",
    nationalite: "France",
    photo:
      "https://www.lequipe.fr/_medias/img-photo-jpg/le-milieu-de-terrain-marseillais-pape-gueye-peut-deja-rejouer-s-mantey-l-equipe/1500000001593967/514:310,1468:946-828-552-75/04667.jpg"
  },
  {
    nom: "Boubacar Kamara",
    age: 21,
    numero_maillot: 4,
    poste: "Milieu de terrain",
    nationalite: "France",
    photo:
      "https://www.leparisien.fr/resizer/8a4BB5j6Bg_zJSJgx1qIYl8QPds=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/INRC2XLYDBGVVJK66LHXR7XVTQ.jpg"
  },
  {
    nom: "Hiroki Sakai",
    age: 31,
    numero_maillot: 2,
    poste: "Arrière droit",
    nationalite: "Japon",
    photo:
      "https://medias.lequipe.fr/img-photo-jpg/sakai-s-en-va-a-reau-l-equipe/1500000001492815/0:0,1998:1332-1200-800-75/05345.jpg"
  },
  {
    nom: "Duje Caleta-Car",
    age: 25,
    numero_maillot: 15,
    poste: "Défenseur central",
    nationalite: "Croatie",
    photo:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt0364b09555044ac9/6207bb394a338208e2ef45b7/Duje_Caleta-Car_Olympique_de_Marseille_OM.png"
  },
  {
    nom: "Valère Germain",
    age: 31,
    numero_maillot: 28,
    poste: "Attaquant",
    nationalite: "France",
    photo:
      "https://static.onzemondial.com/photo_article/473478/208725/1200-L-om-un-rebond-spectaculaire-se-dessine-pour-valre-germain.jpg"
  },
  {
    nom: "Gerson",
    age: 24,
    numero_maillot: 8,
    poste: "Milieu de terrain",
    nationalite: "Brésil",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Gerson-olympique-de-marseille-2021.png"
  },
  {
    nom: "William Saliba",
    age: 20,
    numero_maillot: 4,
    poste: "Défenseur central",
    nationalite: "France",
    photo:
      "https://sportune.20minutes.fr/wp-content/uploads/2022/01/William-Saliba-OM-football.jpg"
  },
  {
    nom: "Matteo Guendouzi",
    age: 22,
    numero_maillot: 23,
    poste: "Milieu de terrain",
    nationalite: "France",
    photo:
      "https://www.ligue1.fr/-/media/Project/LFP/Ligue1/Images/Articles-Assests/2021/07/07/0707-2122-L1-OM-Matteo-Guendouzi-2.jpg?h=728&iar=0&w=518&hash=DCF32D06B7D70AC4E11432D3786A66DE"
  }
  // Ajoutez d'autres joueurs ici avec leur URL de photo correspondante
];

var equipe = [];

const windowWidth = Dimensions.get("window").width;

function ListeJoueurs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: logoUri }} style={styles.logo} />
      {joueursOM.map((joueur, index) => (
        <View key={index} style={styles.joueurContainer}>
          <Image source={{ uri: joueur.photo }} style={styles.image} />
          <Text style={styles.nom}>{joueur.nom}</Text>
          <Text style={styles.info}>Âge: {joueur.age} ans</Text>
          <Text style={styles.info}>Nationalité: {joueur.nationalite}</Text>
          <Text style={styles.info}>Poste: {joueur.poste}</Text>
          <TouchableOpacity style={styles.ajouterEquipeBtn}>
            <Text style={styles.ajouterEquipeText}>Ajouter à l'équipe</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

function addToTeam(joueur) {
  equipe.push(joueur);
}

const styles = StyleSheet.create({
  logo: {
    width: windowWidth, // Largeur maximale pour le logo
    height: 100,
    resizeMode: "contain",
    marginBottom: 12
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10
  },
  joueurContainer: {
    width: (windowWidth - 32) / 2, // Deux joueurs par ligne
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 12
  },
  nom: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  info: {
    fontSize: 14,
    color: "#555"
  },
  ajouterEquipeBtn: {
    backgroundColor: "#007AFF", // Couleur de fond du bouton
    borderRadius: 8, // Coins arrondis
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 10,
    alignItems: "center"
  },
  ajouterEquipeText: {
    color: "white", // Couleur du texte
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default ListeJoueurs;

import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

type Props = { imageUrl: string; title: string };

const Card = (props: Props) => {
  return (
    //TODO:try with flatlist
    <TouchableOpacity style={styles.touchable}>
      <Image source={{ uri: props.imageUrl }} style={styles.image}></Image>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  touchable: {
    marginRight: 8,
    position: "relative",
  },
  text: {
    position: "absolute",
    bottom: 4,
    left: 4,
    color: "#fff",
    fontWeight: "bold",
  },
});

import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

type Props = {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_desc: string;
  dishes: string[];
  lng: number;
  lat: number;
};

const RestaurantCard = (props: Props) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: props.imageUrl }}></Image>
      <View>
        <Text>{props.title}</Text>
        <View>
          <AntDesign name="staro" size={22} color="yellow" />
          <Text>
            {props.rating} . {props.genre}
          </Text>
        </View>
        <View>
          <Entypo name="location" size={22} color="gray" />
          <Text>Nearby . {props.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  image: {
    height: 144,
    width: 256,
    rounded: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 8,
  },
  iconView: {
    flexDirection: "row",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },touchable:{
    backgroundColor:"#fff",
    marginRight:12,
    shadowColor:"rgba(0,0,0,0.1)",
    
  }
});

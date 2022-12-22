import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantCard from "../ui/RestaurantCard";

type Props = {
  title: string;
  description: string;
  featuredCategory?: string;
  id: number;
};

const Featured = (props: Props) => {
  return (
    <View>
      <View style={styles.titleView}>
        <Text style={styles.title}>{props.title}</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>

      <Text style={styles.description}>{props.description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{ padding: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        <RestaurantCard
          id={Math.round(1)}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANQ2aS0d2eFFhmThxLZbYW3NSavMQSWeb_Q&usqp=CAU"
          title="food"
          rating={4.5}
          genre="western"
          address="123 main st."
          short_desc="lorem epsum dolerum"
          dishes={[]}
          lng={45.97}
          lat={46.45}
        ></RestaurantCard>
        <RestaurantCard
          id={Math.round(1)}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANQ2aS0d2eFFhmThxLZbYW3NSavMQSWeb_Q&usqp=CAU"
          title="food"
          rating={4.5}
          genre="western"
          address="123 main st."
          short_desc="lorem epsum dolerum"
          dishes={[]}
          lng={45.97}
          lat={46.45}
        ></RestaurantCard>
        <RestaurantCard
          id={Math.round(1)}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANQ2aS0d2eFFhmThxLZbYW3NSavMQSWeb_Q&usqp=CAU"
          title="food"
          rating={4.5}
          genre="western"
          address="123 main st."
          short_desc="lorem epsum dolerum"
          dishes={[]}
          lng={45.97}
          lat={46.45}
        ></RestaurantCard>
        <RestaurantCard
          id={Math.round(1)}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANQ2aS0d2eFFhmThxLZbYW3NSavMQSWeb_Q&usqp=CAU"
          title="food"
          rating={4.5}
          genre="western"
          address="123 main st."
          short_desc="lorem epsum dolerum"
          dishes={[]}
          lng={45.97}
          lat={46.45}
        ></RestaurantCard>
        <RestaurantCard
          id={Math.round(1)}
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSANQ2aS0d2eFFhmThxLZbYW3NSavMQSWeb_Q&usqp=CAU"
          title="food"
          rating={4.5}
          genre="western"
          address="123 main st."
          short_desc="lorem epsum dolerum"
          dishes={[]}
          lng={45.97}
          lat={46.45}
        ></RestaurantCard>
      </ScrollView>
    </View>
  );
};

export default Featured;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  titleView: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  description: {
    color: "gray",
    paddingHorizontal: 16,
    fontSize: 14,
  },
  scroll: {
    paddingTop: 16,
  },
});

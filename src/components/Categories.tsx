import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Card from "../ui/CategoryCard";

type Props = {};

const Categories = (props: Props) => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 15 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4fMoUAvXfihFONXDS6nxHfTNGM-DivfCbg&usqp=CAU"
        title="testing"
      ></Card>
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4fMoUAvXfihFONXDS6nxHfTNGM-DivfCbg&usqp=CAU"
        title="testing"
      ></Card>
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4fMoUAvXfihFONXDS6nxHfTNGM-DivfCbg&usqp=CAU"
        title="testing"
      ></Card>
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4fMoUAvXfihFONXDS6nxHfTNGM-DivfCbg&usqp=CAU"
        title="testing"
      ></Card>
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4fMoUAvXfihFONXDS6nxHfTNGM-DivfCbg&usqp=CAU"
        title="testing"
      ></Card>
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4fMoUAvXfihFONXDS6nxHfTNGM-DivfCbg&usqp=CAU"
        title="testing"
      ></Card>
      <Card
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4fMoUAvXfihFONXDS6nxHfTNGM-DivfCbg&usqp=CAU"
        title="testing"
      ></Card>
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
import Categories from "../components/Categories";
import Featured from "../components/Featured";

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.rootScreen}>
      <View>
        <View style={styles.imageView}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiiCiCNnBPJHowz2yYri7ntjjV4AB_xFa_Pg&usqp=CAU",
            }}
            style={styles.image}
          ></Image>
          <View style={styles.titleView}>
            <Text style={styles.subtitle1}>Deliver Now</Text>
            <Text style={styles.subtitle2}>
              Current Location{" "}
              <Ionicons name="caret-down" size={24} color="black" />
            </Text>
          </View>
          <FontAwesome name="user-o" size={35} color="black" />
        </View>

        <View style={styles.searchViewOuter}>
          <View style={styles.searchView}>
            <Ionicons name="search" size={24} color="gray" />
            <TextInput placeholder="Restaurant and Cuisines"></TextInput>
          </View>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>

        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Categories></Categories>

          <Featured
            title="featured"
            description="lorem epsum"
            id={Math.round(1)}
          ></Featured>
          <Featured
            title="featured"
            description="lorem epsum"
            id={Math.round(1)}
          ></Featured>
          <Featured
            title="featured"
            description="lorem epsum"
            id={Math.round(1)}
          ></Featured>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  searchView: {
    flexDirection: "row",

    backgroundColor: "#c0bebe",
    padding: 12,
  },
  searchViewOuter: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 8,
    marginHorizontal: 16,
  },
  image: {
    height: 28,
    width: 28,
    backgroundColor: "gray",
    padding: 16,
    borderRadius: 28 / 2,
  },
  imageView: {
    flexDirection: "row",
    paddingBottom: 12,
    alignItems: "center",
    marginHorizontal: 16,
    paddingHorizontal: 12,
  },
  subtitle1: {
    fontWeight: "bold",
    color: "gray",
    fontSize: 14,
    marginLeft: 5,
  },
  subtitle2: {
    fontWeight: "bold",

    fontSize: 20,
    marginLeft: 5,
  },
  titleView: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#d9d8d8",
  },
});

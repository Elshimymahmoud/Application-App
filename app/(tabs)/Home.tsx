import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import color from "@/constant/color";
import { useState, useEffect } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import CatogreyBtn from "@/component/CatogreyBtn";
import Listings from "./Listings";
import listingData from "@/data/destinations.json";
import GroupListings from "@/component/GroupListings";
import groupData from "@/data/groups.json";
import Search from "@/component/Search";

export default function Home() {
  const headerHight = useHeaderHeight();
  const [category, setCategory] = useState("All");

  const onCatChanged = (category: string) => {
    console.log("Categpry: ", category);
    setCategory(category);
  };

  const [isFiltered, setIsFiltered] = useState(false);

  const [filteredDestinations, setFilteredDestinations] = useState(listingData);

  const [destinations, setDestinations] = useState(listingData);

  const [searchQuery, setSearchQuery] = useState("");

  const filterDestinations = () => {
    if (searchQuery.length > 0) {
      setFilteredDestinations(
        destinations
          .filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else if (b.name > a.name) {
              return -1;
            }
            return 0;
          })
      );
    } else setFilteredDestinations(destinations);
  };

  useEffect(() => {
    if (!isFiltered) {
      setFilteredDestinations(destinations);
    }

    if (searchQuery.length === 0) {
      setIsFiltered(false);
    }
  }, [destinations.length, searchQuery, isFiltered]);

  return (
    <>
      {" "}
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 1400 }}>
              <Feather
                name="menu"
                size={24}
                color="black"
                style={{ width: 40, height: 40, paddingLeft: 20 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <Link href={`/login`} asChild>
              <TouchableOpacity
                onPress={() => {
                  {
                  }
                }}
                style={{
                  marginRight: 1400,
                  backgroundColor: color.white,
                  shadowColor: "#171717",
                  width: 35,
                  height: 35,
                  paddingTop: 5,
                  borderRadius: 5,
                  shadowOffset: { width: 2, height: 4 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Entypo name="login" size={26} color="black" />
              </TouchableOpacity>
            </Link>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHight }]}>
        <Text style={styles.headingText}>E-Commerce App</Text>

        <Search
          value={searchQuery}
          onChangeText={(e) => {
            setSearchQuery(e);
            setIsFiltered(true);
          }}
          onPressSearch={filterDestinations}
        />

        <CatogreyBtn onCagtegoryChanged={onCatChanged} />

        <ScrollView>
          <Listings listings={filteredDestinations} category={category} />

          {/* rendering the original data without applying the filtered earch on them */}
          {/* <Listings listings={listingData} category={category} /> */}

          <GroupListings listings={groupData} />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "offwhite",
  },
  headingText: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "800",
    color: "black",
    marginTop: 10,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 50,
    width: 250,
    marginVertical: 20,
  },
});

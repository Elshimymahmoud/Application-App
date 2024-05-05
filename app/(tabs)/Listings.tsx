
import {
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ListingType } from "@/types/listingType";
import Colors from "@/constans/color";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { GroupType } from "@/types/groupType";

type Props = {
  listings: any[];
  category: string;
};

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Update Listing');
    setLoading(true);

    setTimeout(() => {
      setLoading(false)
    }, 200);
  }, [category]);

  const renderItems: ListRenderItem<ListingType> = ({ item}) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
           {/*   rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrating */}


           {/* <View style={styles.ratingRow}>
            <View style={styles.rating}>
                {[1,2,3,4,5].map((index)=>(
                    <Ionicons
                    key={index}
                name="star"
                size={20}
                color='gold'
              /> 

                ))}
                <Text style={styles.ratingText}>(4.9)</Text>
             
            </View>
</View> */}



            <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome5
                  name="map-marker-alt"
                  size={18}
                  color={Colors.primaryColor}
                />
                <Text style={styles.itemLocationTxt}>{item.location}</Text>
              </View>
              <Text style={styles.itemPriceTxt}>${item.price}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View>
      <FlatList
        data={loading ? [] : listings}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
 
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
  ratingRow:{
     position: "absolute",
    top: 250,
    right: 30,
    backgroundColor: 'white',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding: 6,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  rating:{
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'center',







  },
  ratingText:{

    color:'gray',
    fontFamily:'medium'
  }
});

import { View, Text,StyleSheet,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import  { useRef, useState } from "react";
import color from '@/constans/color'
import destinationsCategories from '@/data/categories'
import { MaterialCommunityIcons } from "@expo/vector-icons";
type Props = {
  onCagtegoryChanged: (category: string) => void;
}


export default function CatogreyBtn({onCagtegoryChanged}: Props) {
    const scrollRef = useRef<ScrollView>(null);
  const itemRef = useRef<TouchableOpacity[] | null[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
 const handleSelectCategory = (index: number) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x, y: 0, animated: true });
    });

    onCagtegoryChanged(destinationsCategories[index].title);
  };
  return (

    
<>
    <View>
      <Text style={styles.title}>Catogries</Text>
      <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 10,
          marginBottom: 10,}}>
        {destinationsCategories.map((item,index)=>(
               <TouchableOpacity
            key={index}
            ref={(el) => itemRef.current[index] = el}
            onPress={() => handleSelectCategory(index)}
            style={
              activeIndex === index
                ? styles.categoryBtnActive
                : styles.categoryBtn
            }
          >
            <MaterialCommunityIcons
              name={item.iconName as any}
              size={20}
              color={activeIndex === index ? color.white : color.black}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categoryBtnTxtActive
                  : styles.categoryBtnTxt
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    
    </View>
  </>  
  )
};

const styles=StyleSheet.create({

title:{
    fontSize:22,
    fontWeight:'700',
    color:color.black,
},
categoryBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  }, 
  
  categoryBtnActive: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.primaryColor,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#333333",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
 categoryBtnTxt: {
    marginLeft: 5,
    color: color.black,
  },
  categoryBtnTxtActive: {
    marginLeft: 5,
    color: color.white,
  },
});
import React from "react";
import { View, Text } from "react-native";

const FavouriteScreen = ({ title }) => (
  <View className={`flex-1 justify-center items-center`}>
    <Text className="text-black text-3xl">{title}</Text>
  </View>
);

export default FavouriteScreen;

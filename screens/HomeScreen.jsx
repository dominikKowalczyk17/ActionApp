import React from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  // Sample topics for scrollable wheel
  const topics = [
    "Topic 1",
    "Topic 2",
    "Topic 3",
    "Topic 4",
    "Topic 5",
    "Topic 6",
  ];

  // Get screen dimensions
  const { width } = Dimensions.get("window");

  // Calculate the width of each item to ensure only one is visible at a time
  const itemWidth = width * 0.8; // Adjust the percentage as needed

  return (
    <View className="flex-1 bg-gray-900 p-5">
      {/* Profile Details and Notifications in One Row */}
      <View className="flex-row items-center justify-between mb-6 mt-12">
        {/* Profile Details */}
        <View className="flex-row items-center flex-1">
          <Image
            source={{ uri: "https://via.placeholder.com/64" }}
            className="w-16 h-16 rounded-full"
          />
          <View className="ml-4 flex-1">
            <Text className="text-white text-2xl font-bold" numberOfLines={1}>
              Hi, John Doe
            </Text>
          </View>
        </View>
        {/* Notifications Section */}
        <View className="flex-row items-center">
          <View className="p-3 border border-gray-50 rounded-lg bg-gray-800">
            <Icon name="notifications-outline" size={24} color="white" />
          </View>
          <Text className="text-white text-sm ml-2"></Text>
        </View>
      </View>

      {/* Scrollable Wheel with Topics */}
      <View className="h-1/4 mb-4">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {topics.map((topic, index) => (
            <View
              key={index}
              className="bg-gray-700 rounded-lg px-4 py-2 mx-2"
              style={{ width: itemWidth }}
            >
              <Text className="text-white text-center">{topic}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

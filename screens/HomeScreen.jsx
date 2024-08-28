import React, { useState } from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { PanGestureHandler } from "react-native-gesture-handler";
import { colorGenerator } from "@phantom-factotum/colorutils";

const [showNotification, setShowNotification] = useState(false);

const HomeScreen = ({ setSwipeEnabled }) => {
  const topics = [
    "Topic 1",
    "Topic 2",
    "Topic 3",
    "Topic 4",
    "Topic 5",
    "Topic 6",
  ];
  const totalTopics = topics.length;
  const topicColors = colorGenerator(totalTopics);

  const { height, width } = Dimensions.get("window");

  const handleGestureEvent = (event) => {
    if (event.nativeEvent.velocityX > 0) {
      setSwipeEnabled(false);
    } else {
      setSwipeEnabled(true);
    }
  };

  return (
    <View className="flex-1 bg-gray-900 p-0">
      {/* Profile Details and Notifications in One Row */}
      <View className="flex-row items-center justify-between mb-6 mt-12 px-5 pt-10">
        {/* Profile Details */}
        <View className="flex-row items-center flex-1">
          <Image
            source={{ uri: "https://via.placeholder.com/64" }}
            className="w-8 h-8 rounded-full"
          />
          <View className="ml-4 flex-1">
            <Text className="text-white text-l font-bold" numberOfLines={1}>
              Hi, John Doe {/*Dummy text, replaceable*/}
            </Text>
          </View>
        </View>
        {/* Notifications Section */}
        <TouchableOpacity onPress={() => toggleNotification(!showNotification)}>
          <View className="flex-row items-center">
            <View className="p-2 border border-gray-50 rounded-lg bg-gray-800">
              <Icon name="notifications-outline" size={16} color="white" />
            </View>
            <Text className="text-white text-sm ml-2"></Text>
          </View>
        </TouchableOpacity>
      </View>

      {showNotification ? (
        <View className="absolute w-full h-full">
          <View className="w-full px-3">
            <Text className="text-base text-stone-300">
              You just got a notificaton!{/*notification.text*/}
            </Text>
          </View>
        </View>
      ) : null}

      {/* Scrollable Wheel with Topics */}
      <PanGestureHandler onGestureEvent={handleGestureEvent}>
        <View
          style={{
            height: height * 0.25,
            marginTop: 20,
            padding: 6,
          }}
        >
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width} // Adjusting the snap interval to match item width
            decelerationRate="fast" // Ensures quick snap to each item
            contentContainerStyle={{ alignItems: "center" }}
          >
            {topics.map((topic, index) => (
              <View
                key={index}
                style={{
                  width: width,
                  height: "100%",
                  backgroundColor: topicColors[index],
                }} // Adjusting width to match parent
                className="bg-gray-700 py-2 flex justify-center items-center align-middle"
              >
                <Text className="text-white text-center">{topic}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </PanGestureHandler>
      <View className="mt-11 px-4 justify-between flex-row items-baseline">
        <Text className="text-2xl text-stone-300">Topics</Text>
        <Text className="text-l text-sky-300">See all</Text>
      </View>

      <View
        style={{
          height: 45,
          marginTop: 20, // Margin between profile details and topics
          paddingHorizontal: 0,
        }}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          centerContent={true}
          contentContainerStyle={{ alignItems: "center" }}
        >
          {topics.map((topic, index) => (
            <View key={index} className="px-1">
              <View className="bg-gray-700 rounded-lg px-8 py-1.5 mx-0 ">
                <Text className="text-white text-center">{topic}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;

import React, { useState } from "react";
import { View, Dimensions, TouchableOpacity, Text } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import Icon from "react-native-vector-icons/Ionicons";
import { TailwindProvider } from "tailwindcss-react-native";

import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import AccountScreen from "./screens/AccountScreen";

const icons = ["home", "search", "heart", "person"];
const titles = ["HOME", "SEARCH", "FAVOURITE", "ACCOUNT"];

export default function App() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "HOME" },
    { key: "search", title: "SEARCH" },
    { key: "favourite", title: "FAVOURITE" },
    { key: "account", title: "ACCOUNT" },
  ]);

  const renderScene = SceneMap({
    home: () => <HomeScreen title={titles[0]} />,
    search: () => <SearchScreen title={titles[1]} />,
    favourite: () => <FavouriteScreen title={titles[2]} />,
    account: () => <AccountScreen title={titles[3]} />,
  });

  return (
    <TailwindProvider>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get("window").width }}
        renderTabBar={() => null} // Hide the top tab bar
      />
      <View className="absolute bottom-0 w-full flex-row justify-around pb-8 pt-2 px-4 bg-gray-800">
        {routes.map((route, i) => (
          <TouchableOpacity
            key={i}
            className="flex-1 justify-center items-center"
            onPress={() => setIndex(i)}
          >
            <View className="items-center">
              <Icon
                name={icons[i]}
                size={24}
                color={index === i ? "white" : "gray"}
              />
              <Text
                className={`text-xs mt-1 ${
                  index === i ? "text-white" : "text-gray-400"
                }`}
              >
                {route.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </TailwindProvider>
  );
}

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View, useColorScheme } from "react-native";
import {
  HomeIcon as HomeOutline,
  HeartIcon as HeartOutline,
  Bars2Icon as BagOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  HeartIcon as HeartSolid,
  Bars2Icon as BagSolid,
} from "react-native-heroicons/solid";
import Colors from "../../constants/Colors";
import { themeColors } from "../theme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          // position: "absolute",
          backgroundColor: themeColors.bgDark,
          paddingBottom: -10,
          marginHorizontal: 20,
          marginVertical: 50,
          height: 50,
          borderRadius: 25,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <HomeSolid size="30" color={themeColors.bgLight} />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => (
            <HeartSolid size="30" color={themeColors.bgLight} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <BagSolid size="30" color={themeColors.bgLight} />
          ),
        }}
      />
    </Tabs>
  );
}

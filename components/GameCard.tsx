{
  /* <View className="bg-white h-16 w-full">
                <Text className="text-slate-800">{item}</Text>
              </View> */
}

import {
  Dimensions,
  Image,
  ImageProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Text, TextProps } from "./Themed";
import { themeColors } from "../app/theme";
import { Game, GameCategory } from "../models/game";
import { router } from "expo-router";

export function GameCard(props: { game: GameCategory; isIOS: boolean }) {
  const { width, height } = Dimensions.get("window");

  return (
    <TouchableOpacity
      onPress={() => router.push("../(tabs)/games-list")}
      style={{
        borderRadius: 40,
        // backgroundColor: themeColors.bgDark,
        height: props.isIOS ? height * 0.35 : height * 0.5,
        width: width * 0.65,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 15,
        padding: 0,
      }}
      className="flex justify-center items-center shadow-sm drop-shadow-sm shadow-slate-500 bg-amber-50"
    >
      <Image
        style={{
          width: width * 0.6,
          height: height * 0.4,
          marginTop: -150,
          shadowOffset: { width: 5, height: 5 },
          shadowRadius: 10,
        }}
        className="flex justify-center items-center shadow-sm drop-shadow-sm shadow-slate-500"
        source={(props.game as GameCategory).label}
      ></Image>
      <Text className="text-cyan-700 text-2xl font-bold">
        {props.game.name}
      </Text>
    </TouchableOpacity>
  );
}

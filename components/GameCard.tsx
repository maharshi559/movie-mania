{
  /* <View className="bg-white h-16 w-full">
                <Text className="text-slate-800">{item}</Text>
              </View> */
}

import { Dimensions, View } from "react-native";
import { Text, TextProps } from "./Themed";
import { themeColors } from "../app/theme";
import { Game } from "../models/game";

export function GameCard(props: { game: Game; isIOS: boolean }) {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: props.isIOS ? height * 0.4 : height * 0.5,
        width: width * 0.65,
      }}
      className=" flex justify-center items-center"
    >
      <Text className="text-amber-50 text-2xl font-bold">
        {props.game.name}
      </Text>
    </View>
  );
}

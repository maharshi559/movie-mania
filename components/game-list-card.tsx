import { ImageBackground, View } from "react-native";
import { Game } from "../models/game";
import { getMovieImageById } from "../app/services/movies.service";
import { Text } from "./Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

export function GamesListCard(props: { game: Game }) {
  return (
    <TouchableOpacity onPress={() => router.push("../(tabs)/games-detail")}>
      <View className="m-2 w-40 h-40">
        <ImageBackground
          source={getMovieImageById(props.game.image)}
          resizeMode="cover"
          borderRadius={25}
        >
          <View
            style={{
              shadowOffset: { width: 10, height: 10 },
              shadowRadius: 12,
            }}
            className="w-40 h-40 bg-gray-800 opacity-80 items-center justify-center shadow-sm drop-shadow-sm shadow-gray-800 rounded-3xl"
          >
            <Text className="text-lg text-amber-50 font-bold shadow-sm drop-shadow-sm">
              {props.game.name}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

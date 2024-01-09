import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Game } from "../../models/game";
import * as utils from "./../../constants/Utils";
import { ArrowSmallLeftIcon } from "react-native-heroicons/solid";
import { router } from "expo-router";
import LottieView from "lottie-react-native";
import { games } from "../../constants/games";
import { GamesListCard } from "../../components/game-list-card";

export default function GamesList(type: string) {
  const { width, height } = Dimensions.get("screen");
  return (
    <ImageBackground source={utils.image} blurRadius={30}>
      <SafeAreaView className="w-full h-full pl-4">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-row items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="m-10 flex-row items-center justify-center"
            >
              <ArrowSmallLeftIcon
                color={"rgb(217,119,6)"}
                size={32}
              ></ArrowSmallLeftIcon>
              <Text
                style={{ color: "rgb(217,119,6)" }}
                className="text-xl mr-[-20]"
              >
                Home
              </Text>
            </TouchableOpacity>
            <LottieView
              autoPlay={true}
              loop
              style={{
                width: 100,
                height: 100,
              }}
              source={require("../../assets/images/movie-projector.json")}
            ></LottieView>
          </View>
          <Text className="text-cyan-50 font-bold pl-4 text-xl">
            Games List
          </Text>

          <View
            className="flex-row flex-wrap justify-center p-4"
            style={{ width }}
          >
            {games?.map((game: Game) => (
              <GamesListCard game={game} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

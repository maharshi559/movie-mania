import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { GameCard } from "../../components/GameCard";
import { Game, GameCategory } from "../../models/game";
import { gameCategories } from "../../constants/game-categories";
import { PlusIcon } from "react-native-heroicons/outline";
import * as utils from "./../../constants/Utils";
import { games as mostPlayed } from "../../constants/games";
import { ScrollableList } from "../../components/ScrollableList";
export default function HomeScreen() {
  const games = gameCategories;
  const ios = Platform.OS == "ios";
  const { width, height } = Dimensions.get("window");
  const recentlyPlayed = mostPlayed.reverse();

  return (
    <ImageBackground source={utils.image} className="h-full" blurRadius={30}>
      <SafeAreaView className="h-full w-full">
        <View className="absolute top-20 right-5">
          <PlusIcon color={"rgb(217,119,6)"}></PlusIcon>
        </View>
        <ScrollView>
          <View className="justify-center flex-row w-11/12 ml-4 items-center">
            <View className="mt-4 items-center justify-self-center">
              <Text className="text-3xl font-bold text-amber-50">
                Movie Mania
              </Text>
              <Text className="text-lg font-bold text-amber-600 mb-4">
                Lets Play some Movie Games!!!
              </Text>
            </View>
          </View>
          <View
            className={`flex justify-center items-center flex-1 ${
              ios ? "mt-20" : ""
            }`}
          >
            <Carousel
              vertical={false}
              containerCustomStyle={{ overflow: "visible" }}
              data={games}
              renderItem={({ item }: { item: GameCategory }) => (
                <GameCard isIOS={ios} game={item} />
              )}
              firstItem={0}
              loop={false}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.75}
              sliderWidth={width}
              itemWidth={width * 0.63}
              slideStyle={{ display: "flex", alignItems: "center" }}
              hasParallaxImages
            />
            {/* </View> */}
          </View>
          <ScrollableList games={mostPlayed} title="Most Played" />
          <ScrollableList games={recentlyPlayed} title="Recently Added" />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

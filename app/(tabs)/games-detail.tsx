import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gameCategories } from "../../constants/game-categories";
import * as utils from "./../../constants/Utils";
import { ArrowSmallLeftIcon } from "react-native-heroicons/solid";
import { router, useLocalSearchParams } from "expo-router";
import { MinusIcon, PlusIcon } from "react-native-heroicons/outline";
import { useState } from "react";

export default function GamesDetail(type: string) {
  const games = gameCategories[0]?.games;
  const { width, height } = Dimensions.get("screen");
  const params = useLocalSearchParams();

  const [gameTime, setGameTime] = useState(120000);

  const add30Seconds = () => setGameTime(gameTime + 30000);
  const remove30Seconds = () => setGameTime(gameTime - 30000);

  const formatTime = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);

    return [
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");
  };

  const navigateToArena = () =>
    router.push({ pathname: "/(tabs)/game-arena", params: { gameTime } });

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
            <Image
              source={require("../../assets/images/helpBubbles.png")}
              className="w-56 h-36"
            />
          </View>
          <Text className="text-cyan-50 font-bold pl-4 text-3xl ">
            How to Play?
          </Text>
          <View className="flex-row flex-wrap justify-start p-2 pl-4">
            <Text className="text-lg text-amber-100 font-bold">Lets see</Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              2. Ask your Team Name to explain the movie name without opening
              the mouth
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
          </View>
          <Text className="text-cyan-50 font-bold pl-4 text-3xl ">
            For the Win...
          </Text>
          <View className="flex-row flex-wrap justify-start p-2 pl-4">
            <Text className="text-lg text-amber-100 font-bold">Lets see</Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              2. Ask your Team Name to explain the movie name without opening
              the mouth
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
            <Text className="text-lg text-amber-100 font-bold">
              1. Split into Two Teams
            </Text>
          </View>
          <View className="h-24 mx-4 flex justify-center items-center flex-row">
            <TouchableOpacity
              className="bg-amber-50 w-10 h-10 rounded-full flex justify-center items-center"
              onPress={() => remove30Seconds()}
            >
              <MinusIcon color={"rgb(217,119,6)"} size={32}></MinusIcon>
            </TouchableOpacity>
            <Text className="text-4xl font-extrabold text-amber-50 mx-4">
              {formatTime(gameTime)}
            </Text>
            <TouchableOpacity
              className="bg-amber-50 w-10 h-10 rounded-full flex justify-center items-center"
              onPress={() => add30Seconds()}
            >
              <PlusIcon color={"rgb(217,119,6)"} size={32}></PlusIcon>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigateToArena()}
            className="bg-amber-50 rounded-full m-4 h-16 flex shadow-lg items-center justify-center"
          >
            <Text className="text-cyan-800 font-bold text-xl">Start Game</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

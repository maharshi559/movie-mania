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
} from "react-native";
import * as gamesMock from "../../mocks/gameCategories.json";
import EditScreenInfo from "../../components/EditScreenInfo";
import { ScrollView } from "react-native-gesture-handler";
import { useState } from "react";
import LottieView from "lottie-react-native";
import Carousel from "react-native-snap-carousel";
import { GameCard } from "../../components/GameCard";
import Pills from "../../components/Pills";
import { Game, GameCategory } from "../../models/game";

export default function HomeScreen() {
  const games = gamesMock.gameCategory;
  console.log(games);
  const ios = Platform.OS == "ios";
  const [game, setGame] = useState(games[0]);
  const { width, height } = Dimensions.get("window");
  const image = { uri: "https://legacy.reactjs.org/logo-og.png" };
  return (
    <ImageBackground source={image} className="h-full" blurRadius={30}>
      <SafeAreaView className="h-full w-full">
        {/* <Image
        className="h-full absolute top-0 left-0"
        source={require("../../assets/images/main-bg.jpg")}
      ></Image> */}
        <View className="m-6 mt-3 items-center">
          <Text className="text-6xl font-bold text-amber-500 mt-16">
            Movie Mania
          </Text>
          <Text className="text-2xl font-bold text-yellow-600 mb-4">
            Lets Play some Movie Games!!!
          </Text>
        </View>
        <View className="ml-2">
          <Pills
            data={games}
            onPressed={(gameCategory: GameCategory) => setGame(gameCategory)}
          />
        </View>
        <View
          className={`overflow-visible flex justify-center flex-1 ${
            ios ? "mt-10" : ""
          }`}
        >
          <View style={{ marginTop: -50 }}>
            <Carousel
              vertical={false}
              containerCustomStyle={{ overflow: "visible" }}
              data={game.games}
              renderItem={({ item }: { item: Game }) => (
                <GameCard isIOS={ios} game={item} />
              )}
              firstItem={0}
              loop={true}
              inactiveSlideScale={0.75}
              inactiveSlideOpacity={0.75}
              sliderWidth={width}
              itemWidth={width * 0.63}
              slideStyle={{ display: "flex", alignItems: "center" }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({});

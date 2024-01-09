import { ScrollView, Text, View } from "react-native";
import { Game } from "../models/game";
import { GamesListCard } from "./game-list-card";

export const ScrollableList = (props: { games: Game[]; title: string }) => {
  return (
    <View className="mt-6 ml-6">
      <Text className="text-xl font-bold opacity-70 text-cyan-100 mb-4">
        {props.title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
      >
        {props.games.map((game) => (
          <GamesListCard game={game} />
        ))}
      </ScrollView>
    </View>
  );
};

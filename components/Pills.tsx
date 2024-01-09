import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "./Themed";
import { ScrollView } from "react-native-gesture-handler";
import { GameCategory } from "../models/game";

export default function Pills(props: { data: GameCategory[] }) {
  const [game, setGame] = useState(props.data[0]);

  return (
    <SafeAreaView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.data.map((card) => {
          return (
            <Pressable
              onPress={() => setGame(card)}
              key={card.name}
              className={
                game.name === card.name
                  ? " bg-amber-50 text-amber-800 rounded-3xl px-8 py-4 mr-2 my-2"
                  : "bg-amber-800 text-2xl font-bold rounded-3xl text-amber-50 px-8 py-4 mr-2 my-2"
              }
            >
              <Text
                className={
                  game.name === card.name
                    ? "text-md font-bold text-amber-800"
                    : "text-md font-bold text-amber-50"
                }
              >
                {card.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

import React, { useState } from "react";
import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "./Themed";
import { ScrollView } from "react-native-gesture-handler";
import { GameCategory } from "../models/game";
import { themeColors } from "../app/theme";

export default function Pills(props: {
  data: GameCategory[];
  onPressed: Function;
}) {
  const [game, setGame] = useState(props.data[0]);
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ width: width }}
      >
        {props.data.map((pill: GameCategory) => {
          return (
            <Pressable
              onPressIn={() => {
                setGame(pill), props.onPressed(pill);
              }}
              className={
                game.name === pill.name
                  ? "bg-amber-50 rounded-full my-2 p-2 px-6 mr-2 shadow"
                  : "bg-amber-800 rounded-full my-2 p-2 px-6 mr-2 shadow"
              }
            >
              <Text
                className={
                  game.name === pill.name
                    ? "text-amber-800 text-lg font-bold shadow"
                    : "text-amber-50 text-lg font-bold shadow"
                }
              >
                {pill.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

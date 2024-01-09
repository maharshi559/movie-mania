import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as utils from "./../../constants/Utils";
import { useEffect, useState } from "react";
import { getMoviesFromApiAsync } from "../services/movies.service";
import { router, useLocalSearchParams } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";

export default function GamesDetail() {
  const [countDown, setCountDown] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const [timer, setTimer] = useState(0);
  const onLoadDisplayValues = ["Get", "Ready", 3, 2, 1];
  const [movieIndex, setMovieIndex] = useState(0);
  const [moviesList, setMoviesList]: any[] = useState([]);
  const [answeredMovies, setAnsweredMovies]: any[] = useState([]);
  const [unAnsweredMovies, setUnAnsweredMovies]: any[] = useState([]);
  const [answeredPressed, setAnsweredPressed] = useState(false);
  const [unAnsweredPressed, setUnAnsweredPressed] = useState(false);
  const params: any = useLocalSearchParams();
  const gameTime = params.gameTime / 5;

  useEffect(() => {
    let interval!: any;
    if (countDown < onLoadDisplayValues.length) {
      interval = setInterval(() => setCountDown(countDown + 1), 1000);
    } else {
      setGameStatus(true);
      setTimer(gameTime);
    }
    return () => {
      clearInterval(interval);
    };
  }, [countDown]);

  useEffect(() => {
    changeOrientation(ScreenOrientation.OrientationLock.LANDSCAPE);
    getMoviesFromApiAsync().then((movies) =>
      updateMoviesListandTimer(movies as any[])
    );
  }, []);

  const changeOrientation = async (orientation: number) => {
    await ScreenOrientation.lockAsync(orientation);
  };

  const updateMoviesListandTimer = (movies: any[]) => {
    setMoviesList(movies);
    setTimer(params.gameTime / movies.length);
  };
  let timeOut!: any;

  const nextMovie = (answered: boolean = false) => {
    setMovieIndex(movieIndex + 1);
    clearTimeout(timeOut);
    if (movieIndex < moviesList.length) {
      answered
        ? setAnsweredMovies([moviesList[movieIndex], ...answeredMovies])
        : setUnAnsweredMovies([moviesList[movieIndex], ...unAnsweredMovies]);
      setTimer(gameTime);
    }
    const currentVal = moviesList.length - 1;
    if (movieIndex === currentVal) {
      ScreenOrientation.unlockAsync();
    }
  };

  const back = () => {
    ScreenOrientation.unlockAsync();
    router.back();
  };

  useEffect(() => {
    if (timer > 0 && gameStatus && movieIndex < moviesList.length) {
      timeOut = setTimeout(() => {
        setTimer(0);
        clearTimeout(timeOut);
        return nextMovie();
      }, timer);
    } else {
      return clearTimeout(timeOut);
    }
  }, [timer, gameStatus]);

  return (
    <ImageBackground source={utils.image} blurRadius={30}>
      <SafeAreaView className="w-full h-full pl-4">
        {!gameStatus ? (
          <View className="flex justify-center items-center h-full">
            <Text className="text-8xl font-extrabold text-amber-50 mx-4">
              {onLoadDisplayValues[countDown]}
            </Text>
          </View>
        ) : moviesList[movieIndex] ? (
          <View>
            <View className="h-full w-full absolute flex justify-center items-center">
              <Text className="text-8xl font-extrabold text-amber-50">
                {moviesList[movieIndex].title}
              </Text>
            </View>
            <View className="flex justify-center flex-row items-center h-full">
              <TouchableOpacity
                onPress={() => nextMovie(false)}
                className="bg-amber-50 w-1/2 opacity-5 h-full flex justify-start items-center"
                onPressIn={() => setUnAnsweredPressed(true)}
                onPressOut={() => setUnAnsweredPressed(false)}
                style={
                  unAnsweredPressed
                    ? { backgroundColor: "red", opacity: 1 }
                    : { backgroundColor: "transparent" }
                }
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => nextMovie(true)}
                className="bg-amber-50 w-1/2 h-full flex justify-end items-center"
                onPressIn={() => setAnsweredPressed(true)}
                onPressOut={() => setAnsweredPressed(false)}
                style={
                  answeredPressed
                    ? { backgroundColor: "green", opacity: 1 }
                    : { backgroundColor: "transparent" }
                }
              ></TouchableOpacity>
            </View>
          </View>
        ) : (
          <SafeAreaView className="max-w-full">
            <View className="flex justify-center items-center">
              <Text className="text-amber-500 h-10 m-6 text-3xl font-bold">
                Correct Answers
              </Text>
              {answeredMovies.map((m: any) => (
                <View className="h-10 m-1" key={m.id}>
                  <Text className="text-amber-50 text-2xl font-bold">
                    {m.title}
                  </Text>
                </View>
              ))}
              <TouchableOpacity
                onPress={() => back()}
                className="bg-amber-50 w-3/4 h-12 my-4 rounded-full flex justify-center items-center"
              >
                <Text className="text-cyan-800 text-2xl font-bold">
                  Go Back
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
}

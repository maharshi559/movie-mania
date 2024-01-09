import { ImageSourcePropType } from "react-native";

export interface GameCategory {
    name: string;
    label: ImageSourcePropType;
    games: Game[];
    path?: string;
}

export interface Game {
    id?: string;
    name: string,
    label: string,
    image: string;
    routePath: string;
    howToPlay?: string;
    description?: string
}

export interface rootObj {
    gameCategory: GameCategory[]
}
export interface GameCategory {
    name: string;
    label: string;
    games: Game[]
}

export interface Game {
    name: string,
    label: string,
    image: string;
    routePath: string;
}

export interface rootObj {
    gameCategory: GameCategory[]
}
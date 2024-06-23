import { PokemonCatch } from "./PokemonCatch";

export interface User {
    email: string,
    uid: string,
    catch: PokemonCatch[]
}
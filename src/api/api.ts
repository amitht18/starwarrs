import axios from 'axios';
import { Character } from '../state/state.types';

export const DATA_URL = 'https://swapi.dev/api/people/?page=1';

const GET = axios.get;

export async function loadCharacters(address: string): Promise<Character[]> {
    const data = await GET(address);
    return data.data.results as Character[];
}

export async function getName(address: string) {
    const data = await GET(address);
    return data.data.title as string;
}

export async function getAllMovieNames(urls: string[]) {
    let results = [];
    for (const i in urls) {
        const data = await GET(urls[i]);
        results.push(data.data.title);
    }

    return results;
}

export async function getHomePlanetName(address: string) {
    const data = await GET(address);
    return data.data.name as string;
}

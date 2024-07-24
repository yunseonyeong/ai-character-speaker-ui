import axios from 'axios';
import { url } from '.';


export async function getFavorites() {
    const data = await axios.get(`${url}/favorites`).then(res => res.data.data);
    return data;
}

export async function getVoiceMedia(voiceId: string) {
    const file = await axios.get(`${url}/voice/${voiceId}`, {
        responseType: 'arraybuffer'
    }).then(res => res.data);
    return file;
}

export async function deleteFavoritesById(voiceId: string, name: string) {
    try {
        await axios.put(`${url}/favorites/${voiceId}`, {
            name: name
        });
    }
    catch (e: any) {
        console.error(e);
    }
}

export async function addFavoritesById(voiceId: string, name: string) {
    try {
        await axios.put(`${url}/favorites/${voiceId}`, {
            name: name
        });
    } catch (e: any) {
        console.error(e);
    }
}
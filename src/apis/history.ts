import axios from "axios";
import { url } from ".";

export async function getHistories () {
    const result = await axios.get(`${url}/history`).then((res) => res.data.data);
    return result
}

export async function deleteFavoritesById(voiceId: string) {
    try {
        await axios.put(`${url}/favorites/${voiceId}`);
    }
    catch (e: any) {
        console.error(e);
    }
}
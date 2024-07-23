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
import axios from "axios";
import { url } from ".";

export async function createVoice(item: any) {
    await axios.post(`${url}/voice`, {
        character: item.character,
        content: item.content,
    }).then(res=>res.data)
}
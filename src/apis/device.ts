import axios from "axios";
import { url } from ".";

export async function getDevice() {
    const data = await axios.get(`${url}/device`).then((res) => res.data.data.device_name);
    return data;
}

export async function updateDeviceName(name: string) {
    const res = await axios.post(`${url}/device`, {
        device_name: name
    })
    return res;
}

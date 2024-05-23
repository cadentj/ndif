import axios, { AxiosResponse } from 'axios';

export async function complete(prompt: string) {

    const client = axios.create({
        baseURL: 'http://127.0.0.1:8000',
    });

    const data = { 'prompt': prompt };
    const response: AxiosResponse = await client.post(`/complete`, data);

    return response.data.completion;
}
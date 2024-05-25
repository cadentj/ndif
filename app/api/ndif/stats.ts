
import axios, { AxiosResponse } from 'axios';

let cache: any = null;
let promise: Promise<any> | null = null;

export function fetchStats() {
    if (cache) {
        return cache;
    }
    if (!promise) {
        promise = axios.get('http://localhost:5001/stats').then((response: AxiosResponse) => {
            const data = response.data;
            const parsedData = Object.keys(data).reduce((acc, key) => {
                const entry = data[key];
                if (entry.config_json_string) {
                    entry.config_json_string = JSON.parse(entry.config_json_string);
                }
                acc[key] = entry;
                return acc;
            }, {} as { [key: string]: any }); // Add index signature to the type
            cache = parsedData;
            return parsedData;
        });
    }
    throw promise;
}
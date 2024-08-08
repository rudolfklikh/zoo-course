import { isObject } from 'lodash';

export class ZooLocalStorage {
	public static get<T>(key: string): T {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : '';
	}

	public static set<T>(key: string, value: T, timestamp = false): void {
		const payload = timestamp && isObject(value) ? { ...value, timestamp: new Date().toISOString() } : value;
		localStorage.setItem(key, JSON.stringify(payload));
	}

	public static update<T>(key: string, value: T, timestamp = false): void {
		const item = ZooLocalStorage.get<T>(key);

		if (item) {
			const payload = timestamp && isObject(value) ? { ...item, ...value, timestamp: new Date().toISOString() } : { ...item, value };
			localStorage.setItem(key, JSON.stringify(payload));
		} else {
			ZooLocalStorage.set(key, value, timestamp);
		}
	}

	public static remove(key: string): void {
		localStorage.removeItem(key);
	}
}

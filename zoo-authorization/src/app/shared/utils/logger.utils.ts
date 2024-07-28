export class ZooLogger {
	public static warn(...message: any): void {
		console.warn(`[WARNING][${ZooLogger.timeStamp()}]:`, ...message);
	}

	public static err(...message: any): void {
		console.error(`[ERROR][${ZooLogger.timeStamp()}]:`, ...message);
	}

	public static log(...message: any): void {
		console.log(`%c[LOG][${ZooLogger.timeStamp()}]:`, 'color: #1E8CD7', ...message);
	}

	public static timeStamp(): string {
		const options = {
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		};

		const formatter = new Intl.DateTimeFormat('en-US', options as any);
		return formatter.format(new Date());
	}
}

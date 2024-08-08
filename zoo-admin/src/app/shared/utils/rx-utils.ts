import { Observable, take, timer } from 'rxjs';

export class RxUtils {
	public static timer$(timeout: number): Observable<0> {
		return timer(timeout).pipe(take(1));
	}
}

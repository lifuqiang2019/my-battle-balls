import { fromEvent, Observable } from 'rxjs'

export default function fromEvent(element, event) {
    return new Observable(observer => {
        const handler = e => observer.next(e);
        element.addEventListener(event, handler);
    });
}
import { Observable } from 'rxjs/Rx';

export class WebSocketService {
    ws: WebSocket;

    createObservableSocket() {
        this.ws = new WebSocket('ws://echo.websocket.org');

        const myObservable = new Observable(
            observer => {
                this.ws.onmessage = (event) => observer.next(event.data);

                this.ws.onerror = (event) => observer.error(event);

                this.ws.onclose = (event) => observer.complete();
            }
        );

        return myObservable;
    }

    sendMessage(message: any) {
        this.ws.send(message);
    }
}

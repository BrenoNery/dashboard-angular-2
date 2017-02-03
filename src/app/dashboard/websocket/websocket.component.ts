import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent {

  respostaWs;

  constructor(private wb: WebSocketService) {
    this.wb.createObservableSocket().subscribe(
      (data) => {
        this.respostaWs = data;
      }
    );
  }

  executarWebSocket(message) {
    this.wb.sendMessage(message.msg);
  }
}

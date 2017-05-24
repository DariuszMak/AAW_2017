import { Component } from '@angular/core';
import { Message } from '../messages/message.model';

@Component({
  selector: 'my-conversation',
  templateUrl: './conversation.component.html',
  styleUrls:  ['./conversation.component.css']
})

export class ConversationComponent {

  private messages: Array<Message>;

  public editorContent;
  public editorOptions = {
    placeholder: 'Wpisz tekst...'
  };

  constructor() {
    this.messages = [];
  }

  sendMessage(): void {
    this.messages.push({name:this.editorContent, date:new Date(), sender: localStorage.getItem('currentUser')});
    this.editorContent = '';
  }

}

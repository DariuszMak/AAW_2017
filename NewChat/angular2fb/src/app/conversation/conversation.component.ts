import { Component } from "@angular/core";
import { Message } from "../messages/message.model";

@Component({
  selector: 'my-conversation',
  templateUrl: './conversation.component.html'
})

export class ConversationComponent {

  private messages: Array<Message>;

  public editorContent;
  public editorOptions = {
    placeholder: "Wpisz tekst..."
  };

  constructor() {
    this.messages = [];
  }

  sendMessage(): void {
    this.messages.push({name:this.editorContent, date:new Date(), sender:"Wysyłający"});
    this.editorContent = '<h3>"Wpisz tekst..."</h3>';
  }

}

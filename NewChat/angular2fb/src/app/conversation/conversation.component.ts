import {Component, Input, OnDestroy, OnChanges} from '@angular/core';
import {Message} from '../messages/message.model';
import {Subscription} from "rxjs";
import {MessageService} from "../messages/message.service";
import {NotificationService} from "../notifications/notification.service";
import {Notification, TypeEnum} from "../notifications/notification.model";

@Component({
  selector: 'my-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})

export class ConversationComponent implements OnDestroy, OnChanges {
  @Input() idRoom;

  private newMessage: Message;
  private messages: Array<Message>;
  private subscribe: Subscription;
  private errorMessage: string = '';

  public editorContent;
  public editorOptions = {
    placeholder: 'Wpisz tekst...'
  };

  constructor(private messageService: MessageService,
              private notificationService: NotificationService,) {
  }

  getMessages() {
    this.subscribe = this.messageService.getMessages(this.idRoom)
      .subscribe(
        messages => this.messages = messages,
        error => {
          this.errorMessage = 'Błąd przy pobieraniu listy wiadomości: ' + error;
          this.notificationService.add(<Notification> {type: TypeEnum.error, message: this.errorMessage});
        });
  }

  ngOnChanges(): void {
    this.getMessages();
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  sendMessage(): void {
    this.newMessage = {name: this.editorContent, date: new Date().toString(), sender: localStorage.getItem('currentUser')}
    this.messageService.addMessage(this.idRoom, this.newMessage);
    this.editorContent = '';
  }

}

import { Component } from '@angular/core';

@Component({

  moduleId: module.id,
  templateUrl: './new-room.component.html',
//  styleUrls:  ['./about.component.css']
})

export class NewRoomComponent {

  model: any = {};
  create(){
    console.log('utworzono');
  }
}

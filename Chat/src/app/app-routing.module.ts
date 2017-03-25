import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
  { path: 'room-list',  component: RoomListComponent },
  { path: 'room-list/:id', component: RoomDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}

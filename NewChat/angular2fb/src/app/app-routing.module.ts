import { NgModule } from '@angular/core';
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from '@angular/router';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {NewRoomComponent} from './new-room/new-room.component';

const routes: Routes = [
  { path: '', redirectTo: 'room-list', pathMatch: 'full' },
  { path: 'room-list', component: RoomListComponent },
  { path: 'room-list/:id', component: RoomDetailComponent, canActivate : ['singleRoomGuard']},
  { path: 'about', loadChildren: 'app/about/about.module#LazyModule' },
  { path: 'new-room', component: NewRoomComponent },
  { path: '**', component: PageNotFoundComponent },
];

export const routingProviders = [
  {provide: 'singleRoomGuard', useValue: singleRoomGuard}
]

export function singleRoomGuard(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  return true;
}

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [ routingProviders ]
})

export class AppRoutingModule {}


import { Component } from "@angular/core";

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html'
})

export class PageNotFoundComponent {
  private message: string = "Strona o podanym adresie nie istnieje :(";
};

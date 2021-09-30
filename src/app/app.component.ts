import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Enviar email';
  subtitle = 'Subtitle para poner';
  role = 'Super Usuario'
  assets = environment.assets

  constructor() {

  }


  
}

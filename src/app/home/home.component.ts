import { Component } from '@angular/core';
import { HeadComponent } from '../core/head/head.component';
import { FootComponent } from '../core/foot/foot.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeadComponent, FootComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

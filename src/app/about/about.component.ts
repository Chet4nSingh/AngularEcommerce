import { Component } from '@angular/core';
import { HeadComponent } from '../core/head/head.component';
import { FootComponent } from '../core/foot/foot.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ HeadComponent, FootComponent ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}

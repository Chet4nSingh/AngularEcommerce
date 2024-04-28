import { Component } from '@angular/core';
import { HeadComponent } from '../core/head/head.component';
import { FootComponent } from '../core/foot/foot.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ HeadComponent, FootComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}

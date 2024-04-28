import { Component } from '@angular/core';
import { HeadComponent } from '../core/head/head.component';
import { FootComponent } from '../core/foot/foot.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ HeadComponent, FootComponent ],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}

import { Component } from '@angular/core';
import { HeadComponent } from '../core/head/head.component';
import { FootComponent } from '../core/foot/foot.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ HeadComponent, FootComponent ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

}

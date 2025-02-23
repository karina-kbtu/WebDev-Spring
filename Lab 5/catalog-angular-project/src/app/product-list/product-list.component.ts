import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';
@Component({
  selector: 'app-product-list',
  imports:[CommonModule,ProductItemComponent],
  template: `
    <section class="results">
      <app-product-item 
        *ngFor="let product of products"
        [product]="product"
        (remove)="removeProduct(product.id)"
        (like)="likeProduct(product.id)">
        </app-product-item>
    </section>
  `,
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Product[]=[];
  @Output() productRemoved = new EventEmitter<number>();

  removeProduct(productId: number) {
    this.productRemoved.emit(productId);
  }
  ngOnInit() {
    this.products.forEach(product => {
      const savedLikes = localStorage.getItem(`likes_${product.id}`);
      if (savedLikes) {
        product.likes = Number(savedLikes);
      }
    });
  }

  likeProduct(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) product.likes++;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-item',
  imports:[CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="product.photo" alt="{{ product.name }}">
      <h2 class="listing-heading">{{ product.name }}</h2>
      <p class="listing-data">{{ product.description }}, {{ product.rating }}</p>
      <a [href]="product.link" target="_blank" class="details-link">Подробнее</a>
      <div class="share-buttons">
        <button (click)="shareOnWhatsApp()">📲 WhatsApp</button>
        <button (click)="shareOnTelegram()">✈️ Telegram</button>
      </div>
      <button (click)="likeProduct()">Like❤️</button>
       <p>Likes: {{ product.likes }}</p> 
      <button (click)="removeProduct()">Remove</button>

    </section>
  `,
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  shareOnWhatsApp() {
    const message = `Check out this product: ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  }

  shareOnTelegram() {
    const message = `Check out this product: ${this.product.link}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(message)}`, '_blank');
  }

  likeProduct() {
    this.like.emit(this.product.id);
    localStorage.setItem(`likes_${this.product.id}`, String(this.product.likes));
  }

  removeProduct() {
    this.remove.emit(this.product.id);
  }
}

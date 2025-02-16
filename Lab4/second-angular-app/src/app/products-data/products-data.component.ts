import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsData } from '../products-data';
@Component({
  selector: 'app-products-data',
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="productsData.photo" alt="Exterior photo of{{productsData.name}}">
      <h2 class="listing-heading">{{productsData.name}}</h2>
      <p class="listing-data">{{productsData.description}}, {{productsData.rating}}</p>
      <a [href]="productsData.link" target="_blank" class="details-link">Подробнее</a>
       <div class="share-buttons">
        <button (click)="shareOnWhatsApp()">📲 Share on WhatsApp</button>
        <button (click)="shareOnTelegram()">✈️ Share on Telegram</button>
      </div>
    </section>
  `,
  styleUrl: './products-data.component.css'
})
export class ProductsDataComponent {
  @Input() productsData !: ProductsData;
  shareOnWhatsApp() {
    const message = `Check out this product: ${this.productsData.link}`;
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }
  shareOnTelegram() {
    const message = `Check out this product: ${this.productsData.link}`;
    const telegramURL = `https://t.me/share/url?url=${encodeURIComponent(this.productsData.link)}&text=${encodeURIComponent(message)}`;
    window.open(telegramURL, '_blank');
  }
}

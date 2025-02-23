import { Component } from '@angular/core';
import { Category } from './models/category.model';
import { ProductListComponent } from './product-list/product-list.component'; // Импортируем
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ProductListComponent,CommonModule],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.png" alt="logo">
      </header>
      <section class="content">
        <div class="categories">
          <button *ngFor="let category of categoriesList" 
                  (click)="selectCategory(category)">
            {{ category.name }}
          </button>
        </div>
        <app-product-list 
          *ngIf="selectedCategory"
          [products]="selectedCategory.products"
          (productRemoved)="removeProduct($event)">
        </app-product-list>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categoriesList: Category[] = [
    {
      id: 1, name: 'Serums', products: [
        { id: 10,
          name: 'Skin1004 Madagascar Centella Tone Brightening',
          description: 'Восстанавливающая сывортка-ампула', 
          rating: '4.9⭐', 
          photo: '/assets/10.jpg', 
          link: 'https://kaspi.kz/shop/p/skin1004-ampul-naja-syvorotka-madagascar-centella-tone-brightening-capsule-dlja-litsa-100-ml-106057239/?c=750000000&sr=8&qid=ee07e941920b0facb9ccd11de50c333b&ref=shared_link', 
          likes: 0 },
        { id: 11, name: 'AXIS-Y Dark Spot Correcting Glow', 
          description: 'Осветляющая сыворотка', 
          rating: '4.9⭐', 
          photo: '/assets/11.jpg', 
          link: 'https://kaspi.kz/shop/p/axis-y-syvorotka-dark-spot-correcting-glow-serum-dlja-litsa-50-ml-121900236/?c=750000000&sr=6&qid=ee07e941920b0facb9ccd11de50c333b&ref=shared_link', 
          likes: 0 },
        { id:2 ,
          name:"Celimax The real Noni Energy Ampoule",
          description:"Восстанавливающая сыворотка",
          rating:"4.9⭐",
          photo:"/assets/2.jpg",
          link:"https://kaspi.kz/shop/p/celimax-syvorotka-the-real-noni-energy-ampoule-dlja-litsa-30-ml-121227888/?c=750000000&sr=9&qid=b8416b073330d663cf4406abfea8198f&ref=shared_link",
          likes: 0 
        },
        { id:3 ,
            name:"Celimax Pore Dark Spot Brightening",
            description:"Сыворотка против пигментации",
            rating:"4.9⭐",
            photo:"/assets/3.jpg",
            link:"https://kaspi.kz/shop/p/celimax-syvorotka-pore-dark-spot-brightening-dlja-litsa-30-ml-115318389/?c=750000000&sr=10&qid=b8416b073330d663cf4406abfea8198f&ref=shared_link",
            likes: 0 
        },
        { id:9 ,
        name:"Celimax Cica Niacinamide AC Calming",
        description:"Сыворотка с ниацинамидом",
        rating:"4.9⭐",
        photo:"/assets/9.jpg",
        link:"https://kaspi.kz/shop/p/celimax-mist-noni-energy-50-ml-110214182/?c=750000000&sr=34&qid=b8416b073330d663cf4406abfea8198f&ref=shared_link",
        likes: 0 
        },  
        
      ]
    },
    {
      id: 2, name: 'Creams', products: [
        { id:1 ,
          name: 'Celimax Dual Barrier Skin Wearable',
          description: 'Увлажняющий крем', 
          rating: '4.9⭐', 
          photo: '/assets/1.jpg', 
          link: 'https://kaspi.kz/shop/p/celimax-krem-dual-barrier-skin-wearable-cream-dlja-litsa-50-ml-108389249/?c=750000000&sr=2&qid=b8416b073330d663cf4406abfea8198f&ref=shared_link', 
          likes: 0 },
        { id:5 , 
          name: 'Celimax Noni Energy Repair', 
          description: 'Восстанавливающий крем для лица', 
          rating: '4.9⭐', 
          photo: '/assets/5.jpg', 
          link: 'https://kaspi.kz/shop/p/celimax-krem-noni-energy-repair-dlja-litsa-50-ml-104887950/?c=750000000&sr=15&qid=b8416b073330d663cf4406abfea8198f&ref=shared_link', 
          likes: 0 },
        { id: 6 , 
          name: 'Celimax Oil Control Light', 
          description: 'Солнцезащитный крем', 
          rating: '4.9⭐', 
          photo: '/assets/6.jpg', 
          link: 'https://kaspi.kz/shop/p/celimax-krem-oil-control-light-sunscreen-spf50-dlja-litsa-40-ml-110342465/?c=750000000&m=1046035&sr=9&qid=b8416b073330d663cf4406abfea8198f&isPromoted=true&ref=shared_link', 
          likes: 0 },
        { id: 7, 
          name: 'Celimax The Real Cica Soothing', 
          description: 'Крем на основе центеллы', 
          rating: '4.9⭐', photo: '/assets/7.jpg', 
          link: 'https://kaspi.kz/shop/p/celimax-krem-oil-control-light-sunscreen-spf50-dlja-litsa-40-ml-110342465/?c=750000000&m=1046035&sr=9&qid=b8416b073330d663cf4406abfea8198f&isPromoted=true&ref=shared_link', 
          likes: 0 },
        { id: 8, 
          name: 'Dr.Althea 345 Relief', 
          description: 'Восстанавливающий крем с ниацинамидом', 
          rating: '4.9⭐', 
          photo: '/assets/8.jpg', 
          link: 'https://kaspi.kz/shop/p/dr-althea-krem-345-relief-dlja-litsa-50-ml-115616909/?c=750000000&sr=9&qid=4a7927bfea8ba0a70923bcd3794ddfc9&ref=shared_link', 
          likes: 0 }
      ]
    },
    {
      id: 3, name: 'Peeling', products: [
        { id:12 , 
          name: 'MANYO Bifida Biome Ampoule Pad', 
          description: 'Тонер пэды с бифидобактериями', 
          rating: '4.9⭐', 
          photo: '/assets/12.jpg', 
          link: 'https://kaspi.kz/shop/p/manyo-toner-bifida-cica-herb-210-ml-102054505/?c=750000000&sr=27&qid=f62401a41a7a7767821d60c0c9e741ec&ref=shared_link', 
          likes: 0 },
        { id:13 , 
          name: 'ANGIOPHARM Weekend Peeling', 
          description: 'Мягкий пилинг', 
          rating: '4.9⭐', 
          photo: '/assets/13.jpg', 
          link: 'https://kaspi.kz/shop/p/angiopharm-piling-weekend-peeling-ph-3-0-3-5-15-ml-116707433/?0&c=750000000&ref=shared_link', 
          likes: 0 },
        { id:14 , 
          name: 'EUNYUL Vita Balance Green Tangerine', 
          description: 'Тонер-пэды с экстрактом зелёного мандарина', 
          rating: '4.9⭐', 
          photo: '/assets/14.jpg', 
          link: 'https://kaspi.kz/shop/p/eunyul-toner-vita-balance-green-tangerine-piling-pedy-190-ml-106796392/?c=750000000&sr=8&qid=d8ba4f16c71a2e3b39424950957d4c55&ref=shared_link', 
          likes: 0 },
        { id:15 , 
          name: 'The Ordinary Latic Acid 10% +HA', 
          description: 'Нежный кислотный пилинг для лица', 
          rating: '4.9⭐', 
          photo: '/assets/15.jpg', 
          link: 'https://kaspi.kz/shop/p/the-ordinary-piling-lactic-acid-10-30-103428670/?0&c=750000000&ref=shared_link', 
          likes: 0 },
        { id:16 , 
          name: 'Celimax PoreDark Spot Brightening Pad', 
          description: 'Осветляющие тонер-пэды', 
          rating: '', 
          photo: '/assets/16.jpg', 
          link: 'https://kaspi.kz/shop/p/celimax-toner-diski-pedy-poredark-spot-brightening-pad-40-sht-115319464/?c=750000000&sr=1&qid=c7c49e21bdd4f3e04c80d8293a77063a&ref=shared_link', 
          likes: 0 }
      ]
    },
    {
      id: 4, name: 'Toners', products: [
        { id: 0, name: 'Celimax Dual Barrier', 
          description: 'Тонер кремовый', 
          rating: '4.9⭐', 
          photo: '/assets/0.jpg', 
          link: 'https://kaspi.kz/shop/p/celimax-toner-dual-barrier-150-ml-108098827/?c=750000000&sr=1&qid=b8416b073330d663cf4406abfea8198f&ref=shared_link', 
          likes: 0 },
        { id:4 , 
          name: 'Celimax The Real Noni Moisture Balancing Toner', 
          description: 'Тонер с экстрактом Noni', 
          rating: '4.9⭐', 
          photo: '/assets/4.jpg', 
          link: 'https://kaspi.kz/shop/p/celimax-toner-the-real-noni-moisture-balancing-toner-150-ml-104887944/?c=750000000&sr=11&qid=b8416b073330d663cf4406abfea8198f&ref=shared_link', 
          likes: 0 },
        { id:17 , 
          name: 'MANYO Bifida Cica Herb', 
          description: 'Очищающий тоник для чувствительной кожи', 
          rating: '4.9⭐', 
          photo: '/assets/17.jpg', 
          link: 'https://kaspi.kz/shop/p/manyo-toner-bifida-cica-herb-210-ml-102054505/?c=750000000&sr=27&qid=f62401a41a7a7767821d60c0c9e741ec&ref=shared_link', 
          likes: 0 },
        { id:18 , 
          name: 'MANYO Blackhead & Pore Toner', 
          description: 'Очищающий тонер против черных точек', 
          rating: '4.9⭐', 
          photo: '/assets/18.jpg', 
          link: 'https://kaspi.kz/shop/p/manyo-toner-blackhead-pore-210-ml-103047036/?c=750000000&sr=27&qid=f62401a41a7a7767821d60c0c9e741ec&ref=shared_link', 
          likes: 0 },
        { id:19 , 
          name: 'MANYO Bifida Biome Ampoule Toner', 
          description: 'Ампульный укрепляющий тонер с бифидобактериями ', 
          rating: '4.9⭐', 
          photo: '/assets/19.jpg', 
          link: 'https://kaspi.kz/shop/p/manyo-toner-bifida-biome-ampoule-210-ml-110629719/?c=750000000&sr=27&qid=f62401a41a7a7767821d60c0c9e741ec&ref=shared_link', 
          likes: 0 }
      ]
    }
  ];
  
  selectedCategory?: Category;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(productId: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p.id !== productId);
    }
  }
  
}

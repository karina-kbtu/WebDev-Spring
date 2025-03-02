import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Photo } from '../services/albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  standalone: true,
  imports: [CommonModule] // ✅ Добавили CommonModule для *ngFor
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotosByAlbumId(albumId).subscribe((photos) => {
      this.photos = photos;
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}

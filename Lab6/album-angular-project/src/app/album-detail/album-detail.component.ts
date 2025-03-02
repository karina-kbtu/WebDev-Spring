import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService, Album } from '../services/albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule] // ✅ Добавили модули
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  editedTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
    private router: Router
  ) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(albumId).subscribe((album) => {
      if (album) {
        this.album = album;
        this.editedTitle = album.title;
      }
    });
  }

  saveTitle() {
    if (this.album) {
      this.album.title = this.editedTitle;
      alert('Title updated successfully!');
    }
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}

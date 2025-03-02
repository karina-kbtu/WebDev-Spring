import { Component, OnInit } from '@angular/core';
import { AlbumsService, Album } from '../services/albums.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule] // ✅ Добавили модули
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  newAlbumTitle: string = '';

  constructor(private albumsService: AlbumsService, private router: Router) {}

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.albumsService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }

  addAlbum() {
    if (this.newAlbumTitle.trim()) {
      const newAlbum: Album = {
        id: this.albums.length + 1,
        title: this.newAlbumTitle
      };
      this.albums.push(newAlbum);
      this.newAlbumTitle = '';
    }
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
    alert(`Album ${id} deleted!`);
  }
}

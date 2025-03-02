import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AppComponent } from './app.component';  
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home',component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumsComponent },
    { path: 'albums/:id', component: AlbumDetailComponent },
    { path: 'albums/:id/photos', component: AlbumPhotosComponent },
    { path: '**', redirectTo: '' } 
];
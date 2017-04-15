import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ForumCategorieComponent } from './forum-categorie/forum-categorie.component';
import { ForumTagComponent } from './forum-tag/forum-tag.component';
import { ForumDetailComponent } from './forum-detail/forum-detail.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';



const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'blog/:id', component: BlogDetailComponent},
  { path: 'forum', component: ForumCategorieComponent},
  { path: 'forum/:categorie', component: ForumTagComponent},
  { path: 'forum/:categorie/:tag', component: ForumDetailComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'about', component: PresentationComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'contact', component: ContactComponent},
  { path: '**', redirectTo:'' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

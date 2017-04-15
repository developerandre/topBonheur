import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.router';
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
import { AddBlogComponent } from './add-blog/add-blog.component';
import { StatsComponent } from './stats/stats.component';
import { ChatAdminComponent } from './chat-admin/chat-admin.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogDetailComponent,
    ForumCategorieComponent,
    ForumTagComponent,
    ForumDetailComponent,
    ChatComponent,
    LoginComponent,
    SignupComponent,
    PhotosComponent,
    VideosComponent,
    PresentationComponent,
    AdminComponent,
    ContactComponent,
    AddBlogComponent,
    StatsComponent,
    ChatAdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
   DataService    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

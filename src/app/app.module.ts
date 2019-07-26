import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { PostViewComponent } from './post-view/post-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SinglePostComponent } from './single-post/single-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostViewComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  { path: '', component: PostViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService,AuthService],
  bootstrap: [AppComponent]
})



export class AppModule { }

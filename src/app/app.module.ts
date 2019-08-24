import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from './services/post.service';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {FormsModule} from '@angular/forms';
import { PostViewComponent } from './post-view/post-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostViewComponent },
  { path: 'newPost', component: NewPostComponent },
  { path: 'posts/:id', component: SinglePostComponent },
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})



export class AppModule { }

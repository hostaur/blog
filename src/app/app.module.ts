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
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditPostComponent } from './edit-post/edit-post.component';

const appRoutes: Routes = [
  { path: 'posts',canActivate:[AuthGuard], component: PostViewComponent },
  { path: 'editPost',canActivate:[AuthGuard], component: EditPostComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'posts/:id',canActivate:[AuthGuard], component: SinglePostComponent },
  { path: '', component: PostViewComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AuthComponent,
    PostViewComponent,
    SinglePostComponent,
    FourOhFourComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})



export class AppModule { }

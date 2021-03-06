import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from '../app/user.service';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
// import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    
    AppComponent,
    UserComponent,
    RepoComponent,
    FormComponent,
    HighlightDirective,
    // ReversePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

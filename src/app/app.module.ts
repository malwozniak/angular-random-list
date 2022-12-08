import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from '../list/list.component';
import { RandomComponent } from './random/random.component';
import { RandomService } from './random/random.service';
import {
  MatCardModule, MatListModule, MatButtonModule, MatInputModule, MatExpansionModule, MatToolbarModule, MatIconModule, MatSnackBarModule, MatSlideToggleModule, MatChipsModule
} from '@angular/material';
@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatChipsModule],
  declarations: [AppComponent, HelloComponent, ListComponent, RandomComponent],
  bootstrap: [AppComponent],
  providers: [RandomService],
})
export class AppModule {}

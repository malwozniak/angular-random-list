import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListComponent } from '../list/list.component';
import { RandomComponent } from './random/random.component';
import { RandomService } from './random/random.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ListComponent, RandomComponent],
  bootstrap: [AppComponent],
  providers: [RandomService],
})
export class AppModule {}

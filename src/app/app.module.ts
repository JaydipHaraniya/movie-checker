import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatFormFieldModule, MatInputModule, MatCardModule, MatRippleModule} from '@angular/material';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { HttpClientModule} from '@angular/common/http';
import {SearchBoxService} from './search-box.service';
import {HttpModule} from '@angular/http';
import { ShowResultComponent } from './show-result/show-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    ShowResultComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    HttpModule,
    MatRippleModule
  ],
  providers: [SearchBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }

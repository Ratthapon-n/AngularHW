import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component'
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Text1Component } from './text1/text1.component';
import { Text2Component } from './text2/text2.component';
import { Text3Component } from './text3/text3.component';

import { HttpClientModule} from '@angular/common/http';
import { ShareDataService } from './share-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    Text1Component,
    Text2Component,
    Text3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

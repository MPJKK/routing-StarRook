import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {DigitransitService} from './services/digitransit.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyB9kVoYynUd-IIRya2_sqveVGJDNj7qH6M'
    })
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

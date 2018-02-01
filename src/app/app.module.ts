import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SetupComponent } from './setup/setup.component';
import { RoutesComponent } from './routes/routes.component';
import {DigitransitService} from './services/digitransit.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { RouteDirectionPipe } from './pipes/route-direction.pipe';
import { PiippuPipe } from './pipes/piippu.pipe';
import {MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SetupComponent,
    RoutesComponent,
    RouteDirectionPipe,
    PiippuPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyB9kVoYynUd-IIRya2_sqveVGJDNj7qH6M'
    }),
    BrowserAnimationsModule,
      FlexLayoutModule,
      MatButtonModule,
      MatCheckboxModule,
      MatTabsModule,
      MatInputModule,
      MatFormFieldModule,
      MatExpansionModule
  ],
  providers: [DigitransitService],
  bootstrap: [AppComponent]
})
export class AppModule { }

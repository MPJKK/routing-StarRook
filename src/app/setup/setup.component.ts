import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';
import {RoutesComponent} from '../routes/routes.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(public digitransitService: DigitransitService, private router: Router) { }

  ngOnInit() {
  }

  // Kun input fieldissä kirjoitetaan päivitetään digitransit servicen pysakki field
  input(event: any) {
    this.digitransitService.pysakki = event.target.value;
  }

  // Kun käyttäjä etsii pysäkkiä siirretään näkymä routesiin
  moveToRoutes() {
      this.router.navigate(['routes']);
  }

}

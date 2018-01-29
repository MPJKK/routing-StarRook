import { Component, OnInit } from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

    lat = 60.192059;
    lng = 24.945831;
    vastaus: Object;

    constructor(private digitransitService: DigitransitService) {
    }

    ngOnInit() {

        this.digitransitService.getRoutes().subscribe(response => {
            console.log(response.data);
        });

        this.search();
    }

    search() {
        this.digitransitService.getRoutes().subscribe(response => {
            console.log(response.data);
            this.vastaus = response.data['stops'];
        });
    }

    changeLatLng(lat, lng) {
      this.lat = lat;
      this.lng = lng;
      console.log(lat + '---' + lng);
    }

}

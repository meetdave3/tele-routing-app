import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CountryCodeData } from './shared/interface/countryCodeData';

@Injectable()
export class AppService {
    cData: CountryCodeData[] = [];

    constructor(private http: Http) { }

    getCountryCodeData() {
        const apiUrl = './assets/data/api/countryCodeData.json';
        return this.http.get(apiUrl)
        .map(data => {
            const res = data.json();
            this.cData = res;
            return this.cData;
        });
    }
}

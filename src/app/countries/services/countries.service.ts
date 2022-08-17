import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { RestCountriesResponse } from "../interfaces/rest-countries.interface";

@Injectable({
    providedIn: "root"
})
export class CountriesService {

    private apiBaseUrl: string = "https://restcountries.com/v3.1";

    constructor(private httpClient: HttpClient) { }

    public searchCountry(query: string): Observable<RestCountriesResponse[]> {
        return this.search("/name/" + query, true);
    }

    public searchCapital(query: string): Observable<RestCountriesResponse[]> {
        return this.search("/capital/" + query, true);
    }

    public searchByAlpha(alpha: string): Observable<RestCountriesResponse[]> {
        return this.search("/alpha/" + alpha, false);
    }

    public searchRegion(region: string): Observable<RestCountriesResponse[]> {
        return this.search("/region/" + region, true);
    }

    private search(endpoint: string, filter: boolean): Observable<RestCountriesResponse[]> {
        const url: string = this.apiBaseUrl + endpoint;
        const params = new HttpParams();

        if (filter) params.set("fields", "name,capital,cca2,flags,population");

        return this.httpClient.get<RestCountriesResponse[]>(
            url, {
            params: params
        }).pipe(
            tap(console.log)
        );
    }
}
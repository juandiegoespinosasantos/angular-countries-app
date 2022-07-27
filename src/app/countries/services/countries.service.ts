import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { RestCountriesResponse } from "../interfaces/rest-countries.interface";

@Injectable({
    providedIn: "root"
})
export class CountriesService {

    private apiBaseUrl: string = "https://restcountries.com/v3.1";

    constructor(private httpClient: HttpClient) { }

    public searchCountry(query: string): Observable<RestCountriesResponse[]> {
        const url: string = this.apiBaseUrl + "/name/" + query;

        return this.httpClient.get<RestCountriesResponse[]>(url);
    }
}

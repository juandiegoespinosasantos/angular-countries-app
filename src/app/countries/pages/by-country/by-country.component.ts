import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { CountriesService } from "../../services/countries.service";
import { RestCountriesResponse } from "../../interfaces/rest-countries.interface";

@Component({
    selector: "app-by-country",
    templateUrl: "./by-country.component.html"
})
export class ByCountryComponent implements OnInit {

    public placeholder: string = "Buscar país...";
    public query: string = "";
    public ok: boolean = true;

    private _countries: RestCountriesResponse[] = [];

    constructor(private service: CountriesService) {
    }

    ngOnInit(): void {
    }

    public get countries(): RestCountriesResponse[] {
        return [...this._countries];
    }

    public search(query: string): void {
        this.query = query;
        this.ok = true;

        console.log(this.query);

        this.service
            .searchCountry(this.query)
            .subscribe(
                (resp: RestCountriesResponse[]) => {
                    this._countries = resp;
                },
                (err: HttpErrorResponse) => {
                    this.ok = false;

                    console.error(err.message);

                    this._countries = [];
                }
            );
    }

    public sugest(query: string): void {
        this.ok = true;
    }
}

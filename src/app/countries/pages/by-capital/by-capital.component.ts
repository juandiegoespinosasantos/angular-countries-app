import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { RestCountriesResponse } from "../../interfaces/rest-countries.interface";
import { CountriesService } from "../../services/countries.service";

@Component({
    selector: "app-by-capital",
    templateUrl: "./by-capital.component.html"
})
export class ByCapitalComponent implements OnInit {

    public placeholder: string = "Buscar capital...";
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
            .searchCapital(this.query)
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
}

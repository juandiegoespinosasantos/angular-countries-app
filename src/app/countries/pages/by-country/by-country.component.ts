import { Component, OnInit } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { CountriesService } from "../../services/countries.service";
import { RestCountriesResponse } from "../../interfaces/rest-countries.interface";

@Component({
    selector: "app-by-country",
    templateUrl: "./by-country.component.html"
})
export class ByCountryComponent implements OnInit {

    public query: string = "Hola Mundo";
    public ok: boolean = true;

    constructor(private service: CountriesService) { }

    ngOnInit(): void {
    }

    public search(): void {
        this.ok = true;

        console.log(this.query);

        this.service
            .searchCountry(this.query)
            .subscribe(
                (resp: RestCountriesResponse[]) => {
                    resp.forEach(country => {
                        console.log("Se encontró: ", country.name.official);
                    });
                },
                (err: HttpErrorResponse) => {
                    console.error(err.message);

                    this.ok = false;
                }
            );
    }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap } from "rxjs/operators";

import { RestCountriesResponse } from "../../interfaces/rest-countries.interface";
import { CountriesService } from "../../services/countries.service";

@Component({
    selector: "app-view-country",
    templateUrl: "./view-country.component.html"
})
export class ViewCountryComponent implements OnInit {

    private _country!: RestCountriesResponse;

    constructor(private activedRoute: ActivatedRoute, private countriesService: CountriesService) { }

    public get country(): RestCountriesResponse {
        return this._country;
    }

    ngOnInit(): void {
        this.activedRoute
            .params
            .pipe(
                switchMap((param: any) => this.countriesService.searchByAlpha(param.id)),
                tap(console.log)
            )
            .subscribe((resp: RestCountriesResponse[]) => {
                this._country = resp[0];
            });
    }
}

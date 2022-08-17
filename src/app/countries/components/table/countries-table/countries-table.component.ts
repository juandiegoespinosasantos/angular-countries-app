import { Component, Input, OnInit } from "@angular/core";
import { RestCountriesResponse } from "src/app/countries/interfaces/rest-countries.interface";

@Component({
    selector: "app-countries-table",
    templateUrl: "./countries-table.component.html"
})
export class CountriesTableComponent implements OnInit {

    @Input()
    public countries: RestCountriesResponse[] = [];

    constructor() { }

    ngOnInit(): void {
    }
}

import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { RestCountriesResponse } from "../../interfaces/rest-countries.interface";
import { CountriesService } from "../../services/countries.service";

@Component({
    selector: "app-by-region",
    templateUrl: "./by-region.component.html",
    styleUrls: ["./by-region-component.css"]
})
export class ByRegionComponent implements OnInit {

    public regions: string[] = ["africa", "americas", "asia", "europe", "oceania"];
    public activeRegion: string = "";

    private _countries: RestCountriesResponse[] = [];

    constructor(private service: CountriesService) {
    }

    ngOnInit(): void {
    }

    public get countries(): RestCountriesResponse[] {
        return [...this._countries];
    }

    public activateRegion(region: string): void {
        this.activeRegion = region;

        console.log(this.activeRegion);

        this.service
            .searchRegion(this.activeRegion)
            .subscribe(
                (resp: RestCountriesResponse[]) => {
                    this._countries = resp;
                },
                (err: HttpErrorResponse) => {
                    console.error(err.message);

                    this._countries = [];
                }
            );
    }

    public getCSSClass(region: string): string {
        return (this.activeRegion === region) ? "btn-primary" : "btn-outline-primary";
    }
}

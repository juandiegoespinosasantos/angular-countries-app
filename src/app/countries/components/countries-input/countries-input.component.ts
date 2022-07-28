import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

import { RestCountriesResponse } from "../../interfaces/rest-countries.interface";
import { CountriesService } from "../../services/countries.service";

@Component({
    selector: "app-countries-input",
    templateUrl: "./countries-input.component.html"
})
export class CountriesInputComponent implements OnInit {

    public query: string = "";

    @Output()
    public onEnter: EventEmitter<string> = new EventEmitter();

    constructor(private service: CountriesService) {
    }

    ngOnInit(): void {
    }

    public search(): void {
        this.onEnter.emit(this.query);
    }
}

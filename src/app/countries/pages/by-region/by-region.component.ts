import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-by-region",
    templateUrl: "./by-region.component.html",
    styleUrls: ["./by-region-component.css"]
})
export class ByRegionComponent implements OnInit {

    public regions: string[] = ["africa", "americas", "asia", "europe", "oceania"];
    public activeRegion: string = "";

    constructor() { }

    ngOnInit(): void {
    }

    public activateRegion(region: string): void {
        this.activeRegion = region;
    }

    public getCSSClass(region: string): string {
       return (this.activeRegion === region) ? "btn-primary" : "btn-outline-primary";
    }
}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ByCountryComponent } from "./pages/by-country/by-country.component";
import { ByCapitalComponent } from "./pages/by-capital/by-capital.component";
import { ByRegionComponent } from "./pages/by-region/by-region.component";
import { ViewCountryComponent } from "./pages/view-country/view-country.component";

@NgModule({
    declarations: [
        ByCountryComponent,
        ByCapitalComponent,
        ByRegionComponent,
        ViewCountryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        ByCountryComponent,
        ByCapitalComponent,
        ByRegionComponent,
        ViewCountryComponent
    ]
})
export class CountriesModule {    
}
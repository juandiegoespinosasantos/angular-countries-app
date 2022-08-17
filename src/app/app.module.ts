import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CountriesModule } from "./countries/countries.module";
import { SharedModule } from "./shared/shared.module";
import { FooterComponent } from "./footer/footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        CountriesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

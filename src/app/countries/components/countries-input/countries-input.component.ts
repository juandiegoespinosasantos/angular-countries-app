import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: "app-countries-input",
    templateUrl: "./countries-input.component.html"
})
export class CountriesInputComponent implements OnInit {

    @Output()
    public onEnter: EventEmitter<string> = new EventEmitter();

    @Output()
    public onDebounce: EventEmitter<string> = new EventEmitter();

    public query: string = "";
    public debouncer: Subject<string> = new Subject();

    constructor() {
    }

    ngOnInit(): void {
        this.debouncer
            .pipe(debounceTime(500))
            .subscribe((query: string) => {
                this.onDebounce.emit(query);
            });
    }

    public search(): void {
        this.onEnter.emit(this.query);
    }

    public keyPressed(): void {
        this.debouncer.next(this.query);
    }
}

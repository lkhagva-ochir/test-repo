import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule } from 'devextreme-angular';
import { Service, Employee, State } from './app.service';


@Component({
    selector: 'demo-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Service]
})
export class AppComponent {
    dataSource: Employee[];
    states: State[];

    constructor(service: Service) {
        this.dataSource = service.getEmployees();
        this.states = service.getStates();
    }
}

@NgModule({
    imports: [
        BrowserModule,
        DxDataGridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
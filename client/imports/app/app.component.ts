import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'angular-app',
    templateUrl: './app.html',
    styleUrls: [ './app.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent { }

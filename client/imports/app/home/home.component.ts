import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'home-component',
    templateUrl: './home.html',
    styleUrls: [ './home.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent { }

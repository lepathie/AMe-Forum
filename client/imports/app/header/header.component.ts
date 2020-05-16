import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'header-component',
    templateUrl: './header.html',
    styleUrls: [ './header.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }

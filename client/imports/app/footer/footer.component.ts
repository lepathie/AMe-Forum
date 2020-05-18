import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'footer-component',
    templateUrl: './footer.html',
    styleUrls: [ './footer.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent { }

import { Component, ChangeDetectionStrategy } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
    selector: 'angular-app',
    templateUrl: './app.html',
    styleUrls: [ './app.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    /**
     * Constructor
     * @param translate Translation service for internalization
     */
    constructor(translate: TranslateService) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en')

         // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en')
    }
 }

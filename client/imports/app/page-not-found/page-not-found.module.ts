import { NgModule } from "@angular/core"
import { PageNotFoundComponent } from './page-not-found.component'
import { SharedModule } from '../shared/shared.module'

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        PageNotFoundComponent
    ]
})
export class PageNotFoundModule { }

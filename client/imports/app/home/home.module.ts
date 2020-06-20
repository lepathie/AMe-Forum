import { NgModule } from "@angular/core"
import { HomeComponent } from './home.component'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetModule } from '../forums-widget/forums-widget.module'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        ForumsWidgetModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }

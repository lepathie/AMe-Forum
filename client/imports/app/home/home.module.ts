import { NgModule } from "@angular/core"
import { HomeComponent } from './home.component'
import { FooterModule } from '../footer/footer.module'
import { HeaderModule } from '../header/header.module'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetModule } from '../forums-widget/forums-widget.module'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        HeaderModule,
        FooterModule,
        ForumsWidgetModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }

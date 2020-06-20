import { NgModule } from "@angular/core"
import { HomeComponent } from './home.component'
import { FooterModule } from '../footer/footer.module'
import { HeaderModule } from '../header/header.module'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetModule } from '../forums-widget/forums-widget.module'
import { LoginRegistrationModule } from '../login-registration/login-registration.module'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        HeaderModule,
        FooterModule,
        LoginRegistrationModule,
        ForumsWidgetModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }

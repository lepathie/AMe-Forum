import { NgModule } from "@angular/core"
import { HomeComponent } from './home.component'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetModule } from '../forums-widget/forums-widget.module'
import { LoginRegistrationModule } from '../login-registration/login-registration.module'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        LoginRegistrationModule,
        ForumsWidgetModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }

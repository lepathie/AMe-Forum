import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { LoginRegistrationComponent } from './login-registration.component'
import { FrameModule } from '../frame/frame.module'
import { AccountsModule } from 'angular2-meteor-accounts-ui'

@NgModule({
    declarations: [
        LoginRegistrationComponent
    ],
    imports: [
        SharedModule,
        AccountsModule,
        FrameModule
    ],
    exports: [
        LoginRegistrationComponent
    ]
})
export class LoginRegistrationModule { }

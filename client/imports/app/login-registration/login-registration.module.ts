import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { LoginRegistrationComponent } from './login-registration.component'
import { FrameModule } from '../frame/frame.module'

@NgModule({
    declarations: [
        LoginRegistrationComponent
    ],
    imports: [
        SharedModule,
        FrameModule
    ],
    exports: [
        LoginRegistrationComponent
    ]
})
export class LoginRegistrationModule { }

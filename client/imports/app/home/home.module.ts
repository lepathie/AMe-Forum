import { NgModule } from "@angular/core"
import { HomeComponent } from './home.component'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetModule } from '../forums-widget/forums-widget.module'
import { LoginRegistrationModule } from '../login-registration/login-registration.module'
import { MatButtonModule } from '@angular/material/button'
import { FrameModule } from '../frame/frame.module'
import { RouterModule } from '@angular/router'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        LoginRegistrationModule,
        ForumsWidgetModule,
        MatButtonModule,
        FrameModule,
        RouterModule,
        MatDividerModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }

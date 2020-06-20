import { NgModule } from "@angular/core"
import { HomeComponent } from './home.component'
import { FooterModule } from '../footer/footer.module'
import { HeaderModule } from '../header/header.module'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatChipsModule } from '@angular/material/chips'
import { BrowserModule } from '@angular/platform-browser'

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        SharedModule,
        HeaderModule,
        FooterModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatCheckboxModule,
        MatChipsModule

    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }

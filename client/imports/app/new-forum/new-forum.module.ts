import { NgModule } from "@angular/core"
import { NewForumComponent } from './new-forum.component'
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
import { FrameModule } from '../frame/frame.module'

@NgModule({
    declarations: [
        NewForumComponent
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
        MatChipsModule,
        FrameModule

    ],
    exports: [
        NewForumComponent
    ]
})
export class NewForumModule { }

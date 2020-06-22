import { NgModule } from "@angular/core"
import { NewThreadComponent } from './new-post.component'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FrameModule } from '../frame/frame.module'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [
        NewThreadComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        FrameModule
    ],
    exports: [
        NewThreadComponent
    ]
})
export class NewThreadModule { }

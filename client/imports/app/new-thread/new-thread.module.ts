import { NgModule } from "@angular/core"
import { NewThreadComponent } from './new-thread.component'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FrameModule } from '../frame/frame.module'

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

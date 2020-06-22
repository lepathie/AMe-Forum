import { NgModule } from "@angular/core"
import { NewForumComponent } from './new-forum.component'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FrameModule } from '../frame/frame.module'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [
        NewForumComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        FrameModule,
        RouterModule
    ],
    exports: [
        NewForumComponent
    ]
})
export class NewForumModule { }

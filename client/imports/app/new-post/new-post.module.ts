import { NgModule } from "@angular/core"
import { NewPostComponent } from './new-post.component'
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FrameModule } from '../frame/frame.module'

@NgModule({
    declarations: [
        NewPostComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        FrameModule
    ],
    exports: [
        NewPostComponent
    ]
})
export class NewPostModule { }

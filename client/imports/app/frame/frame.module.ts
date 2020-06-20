import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { FrameComponent } from './frame.component'

@NgModule({
    declarations: [
        FrameComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        FrameComponent
    ]
})
export class FrameModule { }

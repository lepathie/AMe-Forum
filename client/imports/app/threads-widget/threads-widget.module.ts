import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ThreadsWidgetComponent } from './threads-widget.component'
import { FrameModule } from '../frame/frame.module'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [
        ThreadsWidgetComponent
    ],
    imports: [
        SharedModule,
        FrameModule,
        RouterModule
    ],
    exports: [
        ThreadsWidgetComponent
    ]
})
export class ThreadsWidgetModule { }

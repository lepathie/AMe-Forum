import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetComponent } from './forums-widget.component'
import { FrameModule } from '../frame/frame.module'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [
        ForumsWidgetComponent
    ],
    imports: [
        SharedModule,
        FrameModule,
        RouterModule
    ],
    exports: [
        ForumsWidgetComponent
    ]
})
export class ForumsWidgetModule { }

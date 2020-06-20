import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetComponent } from './forums-widget.component'
import { FrameModule } from '../frame/frame.module'

@NgModule({
    declarations: [
        ForumsWidgetComponent
    ],
    imports: [
        SharedModule,
        FrameModule
    ],
    exports: [
        ForumsWidgetComponent
    ]
})
export class ForumsWidgetModule { }

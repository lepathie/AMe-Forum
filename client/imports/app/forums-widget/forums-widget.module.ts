import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ForumsWidgetComponent } from './forums-widget.component'
import { ControlgroupModule } from '../controlgroup/controlgroup.module'

@NgModule({
    declarations: [
        ForumsWidgetComponent
    ],
    imports: [
        SharedModule,
        ControlgroupModule
    ],
    exports: [
        ForumsWidgetComponent
    ]
})
export class ForumsWidgetModule { }

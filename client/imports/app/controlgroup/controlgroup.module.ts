import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { ControlgroupComponent } from './controlgroup.component'

@NgModule({
    declarations: [
        ControlgroupComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        ControlgroupComponent
    ]
})
export class ControlgroupModule { }

import { NgModule } from "@angular/core"
import { ThreadComponent } from './thread.component'
import { SharedModule } from '../shared/shared.module'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
    declarations: [
        ThreadComponent
    ],
    imports: [
        SharedModule,
        MatDividerModule
    ],
    exports: [
        ThreadComponent
    ]
})
export class ThreadModule { }

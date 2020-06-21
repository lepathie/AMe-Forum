import { NgModule } from "@angular/core"
import { ForumComponent } from './forum.component'
import { SharedModule } from '../shared/shared.module'
import { MatDividerModule } from '@angular/material/divider'
import { NewThreadModule } from '../new-thread/new-thread.module'

@NgModule({
    declarations: [
        ForumComponent
    ],
    imports: [
        SharedModule,
        MatDividerModule,
        NewThreadModule
    ],
    exports: [
        ForumComponent
    ]
})
export class ForumModule { }

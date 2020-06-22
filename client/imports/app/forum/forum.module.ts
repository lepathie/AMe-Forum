import { NgModule } from "@angular/core"
import { ForumComponent } from './forum.component'
import { SharedModule } from '../shared/shared.module'
import { MatDividerModule } from '@angular/material/divider'
import { ThreadsWidgetModule } from '../threads-widget/threads-widget.module'
import { NewThreadModule } from '../new-thread/new-thread.module'

@NgModule({
    declarations: [
        ForumComponent
    ],
    imports: [
        SharedModule,
        MatDividerModule,
        ThreadsWidgetModule,
        NewThreadModule
    ],
    exports: [
        ForumComponent
    ]
})
export class ForumModule { }

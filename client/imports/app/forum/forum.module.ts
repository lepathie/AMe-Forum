import { NgModule } from "@angular/core"
import { ForumComponent } from './forum.component'
import { SharedModule } from '../shared/shared.module'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
    declarations: [
        ForumComponent
    ],
    imports: [
        SharedModule,
        MatDividerModule
    ],
    exports: [
        ForumComponent
    ]
})
export class ForumModule { }

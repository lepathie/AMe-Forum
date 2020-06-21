import { NgModule } from "@angular/core"
import { AdminComponent } from './admin.component'
import { SharedModule } from '../shared/shared.module'
import { MatDividerModule } from '@angular/material/divider'
import { NewForumModule } from '../new-forum/new-forum.module'

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        SharedModule,
        MatDividerModule,
        NewForumModule
    ],
    exports: [
        AdminComponent
    ]
})
export class AdminModule { }

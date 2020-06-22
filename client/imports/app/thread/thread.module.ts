import { NgModule } from "@angular/core"
import { ThreadComponent } from './thread.component'
import { SharedModule } from '../shared/shared.module'
import { MatDividerModule } from '@angular/material/divider'
import { PostsModule } from '../posts/posts.module'

@NgModule({
    declarations: [
        ThreadComponent
    ],
    imports: [
        SharedModule,
        MatDividerModule,
        PostsModule
    ],
    exports: [
        ThreadComponent
    ]
})
export class ThreadModule { }

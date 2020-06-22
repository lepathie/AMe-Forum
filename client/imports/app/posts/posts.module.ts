import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { PostsComponent } from './posts.component'
import { FrameModule } from '../frame/frame.module'
import { RouterModule } from '@angular/router'
import { MatDividerModule } from '@angular/material/divider'
import { NewPostModule } from '../new-post/new-post.module'

@NgModule({
    declarations: [
        PostsComponent
    ],
    imports: [
        SharedModule,
        FrameModule,
        RouterModule,
        MatDividerModule,
        NewPostModule
    ],
    exports: [
        PostsComponent
    ]
})
export class PostsModule { }

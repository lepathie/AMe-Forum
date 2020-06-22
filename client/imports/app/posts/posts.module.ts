import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { PostsComponent } from './posts.component'
import { FrameModule } from '../frame/frame.module'
import { RouterModule } from '@angular/router'
import { MarkedPipe } from '../shared/marked.pipe'
import { MatDividerModule } from '@angular/material/divider'

@NgModule({
    declarations: [
        PostsComponent
    ],
    imports: [
        SharedModule,
        FrameModule,
        RouterModule,
        MatDividerModule
    ],
    exports: [
        PostsComponent
    ]
})
export class PostsModule { }

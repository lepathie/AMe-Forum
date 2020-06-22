import { Component, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, OnDestroy, OnInit, Input } from "@angular/core"

import { Observable, Subscription } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'

import { Posts } from '../../../../imports/collections/posts'
import { Post } from '../../../../imports/models/post'

@Component({
  selector: "posts-component",
  templateUrl: "./posts.html",
  styleUrls: ["./posts.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent implements OnInit, OnDestroy  {
    @Input() threadId

    posts: Observable<Post[]>
    threadListSubscription: Subscription

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.threadListSubscription = MeteorObservable.subscribe('posts').subscribe(() => {
            this.posts = Posts.find({ threadId: this.threadId }, { sort: { date: 1}})
            this.changeDetectorRef.markForCheck()
        })
    }

    ngOnDestroy() {
        if (this.threadListSubscription) {
            this.threadListSubscription.unsubscribe()
        }
    }

    identify(índex, item: Post) {
        return item._id
    }
}

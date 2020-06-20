import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { Forum } from 'imports/models/forum'
import { Forums } from 'imports/collections/forums'
import { MeteorObservable } from 'meteor-rxjs'

@Component({
    selector: 'forum-component',
    templateUrl: './forum.html',
    styleUrls: [ './forum.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForumComponent implements OnInit {
    forums: Observable<Forum[]>
    forum: Forum

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const id = params.id

            MeteorObservable.subscribe('forums').subscribe(() => {
                this.forums = Forums.find({ _id: id }, { sort: { name: 1}})
                this.forums.subscribe(forums => {
                    if (forums.length === 1) {
                        this.forum = forums[0]
                        this.changeDetectorRef.markForCheck()
                    } else {
                        this.router.navigateByUrl('/404')
                    }
                })
            })

            // TODO: Move following into seperate module
            /*this.threadListSubscription = MeteorObservable.subscribe('threads').subscribe(() => {
                this.threads = Threads.find({ forumID: id}, { sort: { name: 1}})
                this.changeDetectorRef.markForCheck()
            })*/
        })
    }
}

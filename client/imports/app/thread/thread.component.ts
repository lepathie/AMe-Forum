import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { Thread } from 'imports/models/thread'
import { Threads } from 'imports/collections/threads'
import { MeteorObservable } from 'meteor-rxjs'

@Component({
    selector: 'thread-component',
    templateUrl: './thread.html',
    styleUrls: [ './thread.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadComponent implements OnInit, OnDestroy {
    threads: Observable<Thread[]>
    threadsListSubscription: Subscription
    thread: Thread

    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router)        {
        }

    ngOnInit() {
        this.getThread()
    }

    getThread() {
        this.route.params.subscribe(params => {
            const id = params.id
            const forumId = params.forumId

            this.threadsListSubscription = MeteorObservable.subscribe('threads').subscribe(() => {
                this.threads = Threads.find({ _id: id }, { sort: { name: 1 } })
                this.threads.subscribe(threads => {
                    if (threads.length === 1) {
                        this.thread = threads[0]
                        this.changeDetectorRef.markForCheck()
                    }
                    else {
                        if (!this.threadsListSubscription.closed) {
                            this.router.navigateByUrl('/404')
                        }
                    }
                })
            })

        })
    }

    ngOnDestroy() {
        if (this.threadsListSubscription) {
            this.threadsListSubscription.unsubscribe()
        }
    }
}

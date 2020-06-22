import { Component, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, OnDestroy, OnInit, Input } from "@angular/core"

import { Observable, Subscription } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'

import { Threads } from '../../../../imports/collections/threads'
import { Thread } from '../../../../imports/models/thread'

@Component({
  selector: "threads-widget",
  templateUrl: "./threads-widget.html",
  styleUrls: ["./threads-widget.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadsWidgetComponent implements OnInit, OnDestroy  {
    @Input() forumId

    threads: Observable<Thread[]>
    threadListSubscription: Subscription

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.threadListSubscription = MeteorObservable.subscribe('threads').subscribe(() => {
            this.threads = Threads.find({ forumId: this.forumId }, { sort: { date: 1}})
            this.changeDetectorRef.markForCheck()
        })
    }

    ngOnDestroy() {
        if (this.threadListSubscription) {
            this.threadListSubscription.unsubscribe()
        }
    }

    identify(índex, item: Thread) {
        return item._id
    }
}

import { Component, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef, OnDestroy, OnInit } from "@angular/core"

import { Observable, Subscription } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'

import { Forums } from '../../../../imports/collections/forums'
import { Forum } from '../../../../imports/models/forum'

@Component({
  selector: "forums-widget",
  templateUrl: "./forums-widget.html",
  styleUrls: ["./forums-widget.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForumsWidgetComponent implements OnInit, OnDestroy  {
    forums: Observable<Forum[]>
    forumListSubscription: Subscription

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.forumListSubscription = MeteorObservable.subscribe('forums').subscribe(() => {
            this.forums = Forums.find({ }, { sort: { name: 1}})
            this.changeDetectorRef.markForCheck()
        })
    }

    ngOnDestroy() {
        if (this.forumListSubscription) {
            this.forumListSubscription.unsubscribe()
        }
    }

    identify(índex, item: Forum) {
        return item._id
    }
}

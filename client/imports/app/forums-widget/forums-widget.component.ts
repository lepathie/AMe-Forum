import { Component, ChangeDetectionStrategy, TemplateRef, ChangeDetectorRef } from "@angular/core"

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
export class ForumsWidgetComponent {
    forums: Observable<Forum[]>
    forumListSubscription: Subscription

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    OnInit() {
        this.forumListSubscription = MeteorObservable.subscribe('forums').subscribe(() => {
            this.forums = Forums.find({ }, { sort: { name: 1}})
            this.changeDetectorRef.markForCheck()
        })
    }

    OnDestroy() {
        if (this.forumListSubscription) {
            this.forumListSubscription.unsubscribe()
        }
    }
}

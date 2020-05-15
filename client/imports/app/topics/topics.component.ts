import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core'

import { Observable, Subscription } from 'rxjs'

import { Meteor } from 'meteor/meteor'
import { MeteorObservable } from 'meteor-rxjs'

import { Topics } from '../../../../imports/collections/topics'
import { Topic } from '../../../../imports/models/topic'

@Component({
    selector: 'topic-list',
    templateUrl: './topics.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TopicsComponent implements OnInit, OnDestroy {
    topics: Observable<Topic[]>
    topicListSubscription: Subscription

    constructor(private changeDetectorRef: ChangeDetectorRef) { }

    ngOnInit() {
        this.topicListSubscription = MeteorObservable.subscribe('topics').subscribe(() => {
            this.topics = Topics.find({ }, { sort: { name: 1}})
            this.changeDetectorRef.markForCheck()
        })
    }

    ngOnDestroy() {
        if (this.topicListSubscription) {
            this.topicListSubscription.unsubscribe()
        }
    }
}

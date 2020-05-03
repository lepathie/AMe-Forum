import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';

import { Topics } from '../../../../imports/collections/topics';
import { Topic } from '../../../../imports/models/topic';



@Component({
  selector: 'topics',
  templateUrl: 'topics.html'
})
export class TopicsComponent implements OnInit, OnDestroy {
    topics: Observable<Topic[]>;
    topicListSubscription: Subscription;

    ngOnInit() {
        this.topicListSubscription = MeteorObservable.subscribe('topics').subscribe(()=>{
            this.topics = Topics.find();
        });
    }

    ngOnDestroy() {
        if (this.topicListSubscription) {
            this.topicListSubscription.unsubscribe();
        }
    }
 }

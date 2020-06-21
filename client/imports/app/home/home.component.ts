import { Component, ChangeDetectionStrategy, OnChanges, OnInit } from '@angular/core'
import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'

@Component({
    selector: 'home-component',
    templateUrl: './home.html',
    styleUrls: [ './home.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit{
    user

    ngOnInit() {
        Tracker.autorun(() => {
            this.user = Meteor.user()
        })
    }
}

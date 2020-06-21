import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core'
import { Meteor } from 'meteor/meteor'
import { Roles } from 'meteor/alanning:roles'
import { Router } from '@angular/router'

@Component({
    selector: 'admin-component',
    templateUrl: './admin.html',
    styleUrls: [ './admin.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {
    constructor(private router: Router) { }

    user

    ngOnInit() {
        Tracker.autorun(() => {
            this.user = Meteor.user()
        })

        if (!Roles.userIsInRole(this.user, ['admin', 'mod'])) {
            this.router.navigateByUrl('/home')
        }
    }
}

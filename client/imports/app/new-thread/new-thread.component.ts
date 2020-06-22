import { Component, ChangeDetectionStrategy, OnInit, Input, ChangeDetectorRef } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Thread } from 'imports/models/thread'

@Component({
    selector: 'new-thread-component',
    templateUrl: './new-thread.html',
    styleUrls: [ './new-thread.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewThreadComponent implements OnInit{
    @Input() forumId

    threadForm: FormGroup
    user: Meteor.User

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        Tracker.autorun(() => {
            this.user = Meteor.user()
        })
        this.threadForm = this.fb.group({
            title: '',
            text: ''
        })
    }

    onSubmit() {
        const formValue = this.threadForm.value
        if (formValue.title && formValue.title !== '' && formValue.text && formValue.text !== '') {
            Meteor.call("createThread", this.forumId, formValue.title, formValue.text, (error, result) => {
                if ( error ) {
                    throw new Meteor.Error(error.message)
                } else if ( result ) {
                    Meteor.call("createPost", result, "", "", formValue.text, (postError, postResult) => {
                        if (postError ) {
                            throw new Meteor.Error(postError.message)
                        } else if ( postResult ) {
                            this.clearForm()
                        }
                    })
                }
            })
        }
    }

    private clearForm() {
        this.threadForm.reset({ title: '', text: ''})
    }
}

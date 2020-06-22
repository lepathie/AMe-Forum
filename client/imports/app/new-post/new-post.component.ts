import { Component, ChangeDetectionStrategy, OnInit, Input, ChangeDetectorRef } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Post } from 'imports/models/post'

@Component({
    selector: 'new-post-component',
    templateUrl: './new-post.html',
    styleUrls: [ './new-post.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewThreadComponent implements OnInit{
    @Input() threadId

    postForm: FormGroup

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        this.postForm = this.fb.group({
            title: '',
            text: ''
        })
    }

    onSubmit() {
        const formValue = this.postForm.value
        if (formValue.title !== '' && formValue.text !== '') {
            Meteor.call("createPost", this.threadId, formValue.title, formValue.text, (error, result) => {
                if ( error ) {
                    throw new Meteor.Error(error.message)
                } else if ( result ) {
                   
                }
            })
        }
    }

    private clearForm() {
        this.postForm.reset()
    }
}

import { Component, ChangeDetectionStrategy, OnInit, Input, ChangeDetectorRef, OnDestroy } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { Router } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { Post } from 'imports/models/post'
import { MeteorObservable } from 'meteor-rxjs'
import { Posts } from 'imports/collections/posts'

@Component({
    selector: 'new-post-component',
    templateUrl: './new-post.html',
    styleUrls: [ './new-post.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPostComponent implements OnInit, OnDestroy{
    @Input() threadId
    @Input() refPostId

    postForm: FormGroup
    refPost: Post
    postsSubscription: Subscription

    user: Meteor.User

    constructor(private fb: FormBuilder) { }

    ngOnInit() {
        Tracker.autorun(() => {
            this.user = Meteor.user()
        })
        this.postForm = this.fb.group({
            text: ''
        })
        if (this.refPostId) {
            this.postsSubscription = MeteorObservable.subscribe('posts').subscribe( () => {
                this.refPost = Posts.findOne({ _id: this.refPostId })
            })
        }
    }

    ngOnDestroy() {
        if (this.postsSubscription) {
            this.postsSubscription.unsubscribe()
        }
    }

    onSubmit() {
        const formValue = this.postForm.value
        if (formValue.text && formValue.text !== '') {
            Meteor.call("createPost", this.threadId, this.refPost ? this.refPost._id : "", this.refPost ? this.refPost.content : "", formValue.text, (error, result) => {
                if ( error ) {
                    throw new Meteor.Error(error.message)
                } else if ( result ) {
                    this.clearForm()
                }
            })
        }
    }

    private clearForm() {
        this.postForm.reset({ text: ''})
    }
}

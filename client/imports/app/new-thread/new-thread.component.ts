import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core'
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
myForm: FormGroup
constructor(private fb: FormBuilder) { }
ngOnInit() {
    this.myForm = this.fb.group({
        title: '',
        text: ''
    })
}

onSubmit() {
    const formValue = this.myForm.value
    if (formValue.title !== '' && formValue.text !== '') {
        Meteor.call("createThread", this.forumId, formValue.title, formValue.text, (error, result) => {
            if (error ) {
                throw new Meteor.Error(error.message)
            } else if (result) {
                console.log(result)

                Meteor.call("addPost", result, "", "", formValue.text)
                alert("Thread Created \"" + formValue.title + "\"")
                // => Route zum erstellten Thread?
            }
            })
    }
    else {
        alert('Please fill all fields')
    }
}
}

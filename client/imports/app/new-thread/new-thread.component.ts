import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { Router } from '@angular/router'

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
    if (formValue.title !== '') {
        Meteor.call("createThread", this.forumId, formValue.title, formValue.text, (error, result) => {
            if (error ) {
                alert('Could not create Thread')
                return
              }
              // result is the threadId-String at the moment => will be an observable in the future
            Meteor.call("addPost", result, "", "", formValue.text)
            alert("Thread Created \"" + formValue.title + "\"")
            // => Route zum erstellten Thread?
            })
    }
    else {
        alert('Please fill all fields')
    }
}
}

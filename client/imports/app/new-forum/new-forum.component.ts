import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
    selector: 'new-forum-component',
    templateUrl: './new-forum.html',
    styleUrls: [ './new-forum.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewForumComponent implements OnInit{

myForm: FormGroup

constructor(private fb: FormBuilder, private router: Router) { }
ngOnInit() {
    this.myForm = this.fb.group({
        title: '',
        description: ''
    })
}

onSubmit() {
    // TODO: Add Authority-check
    const formValue = this.myForm.value
    if (formValue.title !== '' && formValue.description !== '') {
        const response = Meteor.call("createForum", formValue.titel, formValue.beschreibung)
        // TODO: Check response and show OK-Message with routelink to created forum
        this.router.navigateByUrl('/home')
    }
    else {
        // TODO: Replace with literal
        alert('Please fill out all fields')
    }
}
}

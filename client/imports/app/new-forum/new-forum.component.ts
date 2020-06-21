import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { Router } from '@angular/router'
import { HomeComponent } from '../home/home.component'

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
    const formValue = this.myForm.value
    if (formValue.title !== '' && formValue.description !== '') {
        // const forumId = Meteor.call("createForum", formValue.title, formValue.description)
        Meteor.call("createForum", formValue.title, formValue.description, (error, result) => {
            if (error ) {
                alert('Could not create Forum:\nMaybe you are not logged-in or you don\'t have the permission to create one')
                return
            }
            alert('Froum: "' + formValue.title + '" created')
        })
        this.router.navigateByUrl('/home')
    }
    else {
        alert('Bitte alle Felder ausfüllen')
    }
}
}

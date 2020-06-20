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
    // fehlender Berechtigungscheck
    const formValue = this.myForm.value
    if (formValue.title !== '' && formValue.description !== '') {
        const forumId = Meteor.call("createForum", formValue.titel, formValue.beschreibung)
        this.router.navigateByUrl('/home')
    }
    else {
        alert('Bitte alle Felder ausfüllen')
    }
}
}

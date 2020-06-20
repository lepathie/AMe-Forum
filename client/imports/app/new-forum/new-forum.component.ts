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

constructor(private fb: FormBuilder) { }
ngOnInit() {
    this.myForm = this.fb.group({
        titel: '',
        beschreibung: ''
    })
}

onSubmit() {
    // fehlender Berechtigungscheck
    const formValue = this.myForm.value
    if (formValue.title !== '' && formValue.beschreibung !== '') {
        const forumId = Meteor.call("createForum", formValue.titel, formValue.beschreibung)
        window.location.href = '/home'
    }
    else {
        alert('Bitte alle Felder ausfüllen')
    }
}
}

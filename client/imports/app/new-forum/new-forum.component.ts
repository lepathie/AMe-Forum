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

    CreateTread: FormGroup

    constructor(private fb: FormBuilder, private router: Router) { }
    ngOnInit() {
        this.CreateTread = this.fb.group({
            title: '',
            description: ''
        })
    }

    onSubmit() {
        const formValue = this.CreateTread.value
        if (formValue.title && formValue.title !== '') {
            // const forumId = Meteor.call("createForum", formValue.title, formValue.description)
            Meteor.call("createForum", formValue.title, formValue.description, (error, result) => {
                if (error ) {
                    alert('Could not create Forum:\nMaybe you are not logged-in or you don\'t have the permission to create one')
                    return
                }
            })
            this.router.navigateByUrl('/home')
        }
    }
}

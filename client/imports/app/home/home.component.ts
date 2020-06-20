import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Forums } from 'imports/collections/forums'
import { Message } from '@angular/compiler/src/i18n/i18n_ast'
import { Forum } from 'imports/models/forum'

@Component({
    selector: 'home-component',
    templateUrl: './home.html',
    styleUrls: [ './home.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
onSubmit() {
    window.location.href = '/new-forum'
}
}

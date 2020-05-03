import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'forum-page',
    templateUrl: './forum.html',
    styleUrls: [ './forum.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForumComponent { }

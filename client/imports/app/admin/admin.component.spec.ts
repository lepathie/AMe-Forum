import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { AdminComponent } from './admin.component'
import { AdminModule } from './admin.module'
import { RouterTestingModule } from '@angular/router/testing'
import { SharedModule } from '../shared/shared.module'
import { MockComponent } from 'ng-mocks'
import { NewForumComponent } from '../new-forum/new-forum.component'

describe(`AdminComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MockComponent(NewForumComponent)],
            imports: [
                RouterTestingModule,
                AdminModule,
                SharedModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(AdminComponent)
        const admin = fixture.debugElement.componentInstance
        expect(admin).to.be.ok
    }))
})

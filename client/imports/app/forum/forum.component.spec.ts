import '../../polyfills.spec'

import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { ForumComponent } from './forum.component'
import { ForumModule } from './forum.module'

describe(`ForumComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                RouterTestingModule,
                ForumModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(ForumComponent)
        const forum = fixture.debugElement.componentInstance
        expect(forum).to.be.ok
    }))
})

import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { ForumComponent } from './forum.component'
import { SharedModule } from '../shared/shared.module'

describe(`ForumComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForumComponent],
            imports: [
                SharedModule,
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

    it(`should contain an '<h1>'` , async(() => {
        const fixture = TestBed.createComponent(ForumComponent)
        fixture.detectChanges()
        const heading = fixture.debugElement.query(By.css('h1'))

        expect(heading).to.be.ok
    }))

})

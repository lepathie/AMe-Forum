import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { NewThreadModule } from './new-post.module'
import { NewThreadComponent } from './new-post.component'
import { RouterTestingModule } from '@angular/router/testing'

describe(`NewThreadComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NewThreadModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(NewThreadComponent)
        const home = fixture.debugElement.componentInstance
        expect(home).to.be.ok
    }))

})

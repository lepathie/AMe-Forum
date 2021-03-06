import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { NewThreadModule } from './new-thread.module'
import { NewThreadComponent } from './new-thread.component'
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
        const newThread = fixture.debugElement.componentInstance
        expect(newThread).to.be.ok
    }))

})

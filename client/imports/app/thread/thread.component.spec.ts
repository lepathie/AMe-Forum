import '../../polyfills.spec'

import { RouterTestingModule } from '@angular/router/testing'
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { ThreadComponent } from './thread.component'
import { ThreadModule } from './thread.module'

describe(`ThreadComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                RouterTestingModule,
                ThreadModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(ThreadComponent)
        const thread = fixture.debugElement.componentInstance
        expect(thread).to.be.ok
    }))
})

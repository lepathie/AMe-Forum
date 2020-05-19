import '../../polyfills.spec.ts'

import { getTestBed, TestBed, async } from '@angular/core/testing'

import { expect } from 'chai'
import { TranslateModule } from '@ngx-translate/core'
import { PageNotFoundModule } from './page-not-found.module'
import { PageNotFoundComponent } from './page-not-found.component'

describe(`PageNotFoundComponent`, () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                PageNotFoundModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(PageNotFoundComponent)
        const pageNotFound = fixture.debugElement.componentInstance
        expect(pageNotFound).to.be.ok
    }))

})

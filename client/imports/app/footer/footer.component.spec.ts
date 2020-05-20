import '../../polyfills.spec.ts'

import { getTestBed, TestBed, async } from '@angular/core/testing'

import { expect } from 'chai'
import { FooterModule } from './footer.module'
import { FooterComponent } from './footer.component'

describe(`FooterComponent`, () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FooterModule
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(FooterComponent)
        const footer = fixture.debugElement.componentInstance
        expect(footer).to.be.ok
    }))

})

import '../../polyfills.spec'

import { ControlgroupModule } from "./controlgroup.module"
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { ControlgroupComponent } from './controlgroup.component'
import { expect } from 'chai'
import { TranslateModule } from '@ngx-translate/core'

describe(`ControlgroupComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ControlgroupModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(ControlgroupComponent)
        const Controlgroup = fixture.debugElement.componentInstance
        expect(Controlgroup).to.be.ok
    }))

})

import '../../polyfills.spec'

import { FrameModule } from "./frame.module"
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { FrameComponent } from './frame.component'
import { expect } from 'chai'
import { TranslateModule } from '@ngx-translate/core'

describe(`ControlgroupComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FrameModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(FrameComponent)
        const frame = fixture.debugElement.componentInstance
        expect(frame).to.be.ok
    }))

})

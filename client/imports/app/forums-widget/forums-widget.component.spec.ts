import '../../polyfills.spec'

import { ForumsWidgetModule } from "./forums-widget.module"
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { ForumsWidgetComponent } from './forums-widget.component'
import { expect } from 'chai'
import { TranslateModule } from '@ngx-translate/core'

describe(`ForumsWidgetComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ForumsWidgetModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(ForumsWidgetComponent)
        const ForumsWidget = fixture.debugElement.componentInstance
        expect(ForumsWidget).to.be.ok
    }))

})

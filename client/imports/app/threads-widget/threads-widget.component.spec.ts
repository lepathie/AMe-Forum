import '../../polyfills.spec'

import { ThreadsWidgetModule } from "./threads-widget.module"
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { ThreadsWidgetComponent } from './threads-widget.component'
import { expect } from 'chai'
import { TranslateModule } from '@ngx-translate/core'

describe(`ThreadsWidgetComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ThreadsWidgetModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(ThreadsWidgetComponent)
        const ThreadsWidget = fixture.debugElement.componentInstance
        expect(ThreadsWidget).to.be.ok
    }))

})

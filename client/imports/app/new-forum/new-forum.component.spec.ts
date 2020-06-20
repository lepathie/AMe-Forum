import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { NewForumModule } from './new-forum.module'
import { NewForumComponent } from './new-forum.component'

describe(`NewForumComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NewForumModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(NewForumComponent)
        const home = fixture.debugElement.componentInstance
        expect(home).to.be.ok
    }))

    it(`should contain an '<aside>'` , async(() => {
        const fixture = TestBed.createComponent(NewForumComponent)
        fixture.detectChanges()
        const aside = fixture.debugElement.query(By.css('aside'))

        expect(aside).to.be.ok
    }))

    it(`should contain an '<main>'` , async(() => {
        const fixture = TestBed.createComponent(NewForumComponent)
        fixture.detectChanges()
        const main = fixture.debugElement.query(By.css('main'))

        expect(main).to.be.ok
    }))

})

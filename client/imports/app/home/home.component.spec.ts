import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { HomeModule } from './home.module'
import { HomeComponent } from './home.component'
import { Directive } from '@angular/core'

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: 'forums-widget'
  })
  class ForumsWidgetDirective {
  }

describe(`HomeComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForumsWidgetDirective],
            imports: [
                HomeModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(HomeComponent)
        const home = fixture.debugElement.componentInstance
        expect(home).to.be.ok
    }))

    it(`should contain an '<aside>'` , async(() => {
        const fixture = TestBed.createComponent(HomeComponent)
        fixture.detectChanges()
        const aside = fixture.debugElement.query(By.css('aside'))

        expect(aside).to.be.ok
    }))

    it(`should contain an '<main>'` , async(() => {
        const fixture = TestBed.createComponent(HomeComponent)
        fixture.detectChanges()
        const main = fixture.debugElement.query(By.css('main'))

        expect(main).to.be.ok
    }))

    it(`should contain an '<forums-widget>'` , async(() => {
        const fixture = TestBed.createComponent(HomeComponent)
        fixture.detectChanges()
        const forumsWidget = fixture.debugElement.query(By.css('forums-widget'))

        expect(forumsWidget).to.be.ok
    }))

})

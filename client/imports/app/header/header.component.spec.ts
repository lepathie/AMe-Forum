import '../../polyfills.spec'

import { RouterTestingModule } from '@angular/router/testing'
import { HeaderModule } from "./header.module"
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'

describe(`HeaderComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HeaderModule,
                RouterTestingModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(HeaderComponent)
        const header = fixture.debugElement.componentInstance
        expect(header).to.be.ok
    }))

    it(`should contain the logo` , async(() => {
        const fixture = TestBed.createComponent(HeaderComponent)
        fixture.detectChanges()
        const logo = fixture.debugElement.query(By.css('#logo'))

        expect(logo).to.be.ok
    }))

    it(`should contain a reference to 'home'` , async(() => {
        const fixture = TestBed.createComponent(HeaderComponent)
        fixture.detectChanges()
        const homeLink = fixture.debugElement.query(By.css('a[href="/home"]'))

        expect(homeLink).to.be.ok
    }))

})

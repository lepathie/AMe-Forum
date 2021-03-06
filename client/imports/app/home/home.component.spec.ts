import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { HomeComponent } from './home.component'
import { ForumsWidgetComponent } from '../forums-widget/forums-widget.component'
import { MockComponent } from 'ng-mocks'
import { SharedModule } from '../shared/shared.module'
import { LoginRegistrationComponent } from '../login-registration/login-registration.component'
import { RouterTestingModule } from '@angular/router/testing'
import { FrameComponent } from '../frame/frame.component'
import { MatDividerModule } from '@angular/material/divider'

describe(`HomeComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent, MockComponent(ForumsWidgetComponent), MockComponent(ForumsWidgetComponent), MockComponent(LoginRegistrationComponent), MockComponent(FrameComponent)],
            imports: [
                MatDividerModule,
                RouterTestingModule,
                SharedModule,
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

    it(`should contain an '<login-registration-component>'` , async(() => {
        const fixture = TestBed.createComponent(HomeComponent)
        fixture.detectChanges()
        const loginRegistration = fixture.debugElement.query(By.css('login-registration-component'))

        expect(loginRegistration).to.be.ok
    }))

})

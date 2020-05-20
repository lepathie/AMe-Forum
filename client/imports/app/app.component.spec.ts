import '../polyfills.spec.ts'

import { APP_BASE_HREF } from '@angular/common'
import { getTestBed, TestBed, async } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { By } from '@angular/platform-browser'

import { expect } from 'chai'
import { spy } from 'sinon'
import { HttpClient } from '@angular/common/http'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { AppModule } from './app.module'

describe(`AppComponent`, () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                RouterTestingModule,
                AppModule,
                TranslateModule.forRoot({ })
            ],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: '/home'
                }
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent)
        const app = fixture.debugElement.componentInstance
        expect(app).to.be.ok
    }))

    it(`should contain a 'header-component'` , async(() => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const headerComponent = fixture.debugElement.query(By.css('header-component'))

        expect(headerComponent).to.be.ok
    }))

    it(`should contain a 'footer-component'` , async(() => {
        const fixture = TestBed.createComponent(AppComponent)
        fixture.detectChanges()
        const footerComponent = fixture.debugElement.query(By.css('footer-component'))

        expect(footerComponent).to.be.ok
    }))

})

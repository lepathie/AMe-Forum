import '../../polyfills.spec'

import { LoginRegistrationModule } from "./login-registration.module"
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { LoginRegistrationComponent } from './login-registration.component'
import { expect } from 'chai'
import { TranslateModule } from '@ngx-translate/core'

describe(`ControlgroupComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                LoginRegistrationModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(LoginRegistrationComponent)
        const loginRegistration = fixture.debugElement.componentInstance
        expect(loginRegistration).to.be.ok
    }))

})

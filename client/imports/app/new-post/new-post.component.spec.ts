import '../../polyfills.spec'

import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { NewPostModule } from './new-post.module'
import { NewPostComponent } from './new-post.component'
import { RouterTestingModule } from '@angular/router/testing'

describe(`NewPostComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                NewPostModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(NewPostComponent)
        const newPost = fixture.debugElement.componentInstance
        expect(newPost).to.be.ok
    }))

})

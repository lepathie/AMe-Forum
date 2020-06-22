import '../../polyfills.spec'

import { PostsModule } from "./posts.module"
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { PostsComponent } from './posts.component'
import { expect } from 'chai'
import { TranslateModule } from '@ngx-translate/core'

describe(`PostComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                PostsModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(PostsComponent)
        const posts = fixture.debugElement.componentInstance
        expect(posts).to.be.ok
    }))

})

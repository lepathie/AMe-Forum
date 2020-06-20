import '../../polyfills.spec'

import { RouterTestingModule, SpyNgModuleFactoryLoader } from '@angular/router/testing'
import { TestBed, getTestBed, async } from '@angular/core/testing'
import { expect } from 'chai'
import { By } from '@angular/platform-browser'
import { TranslateModule } from '@ngx-translate/core'
import { ForumComponent } from './forum.component'
import { ForumModule } from './forum.module'

class MockForumComponent extends ForumComponent {
    getForum() {
        this.forum = { active: true, name: "Help", description: "Contains tutorials on usage of the forums." }
    }
}

describe(`ForumComponent`, () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [],
            imports: [
                RouterTestingModule,
                ForumModule,
                TranslateModule.forRoot({ })
            ]
        }).compileComponents() // compile html and css
    }))

    afterEach(() => {
        getTestBed().resetTestingModule()
    })

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(MockForumComponent)
        const forum = fixture.debugElement.componentInstance
        expect(forum).to.be.ok
    }))

    it(`should contain an '<h1>'` , async(() => {
        const fixture = TestBed.createComponent(MockForumComponent)
        fixture.detectChanges()
        const heading = fixture.debugElement.query(By.css('h1'))

        expect(heading).to.be.ok
    }))

    it(`should contain an '<header>'` , async(() => {
        const fixture = TestBed.createComponent(MockForumComponent)
        fixture.detectChanges()
        const header = fixture.debugElement.query(By.css('header'))

        expect(header).to.be.ok
    }))

    it(`should contain an '<mat-divider>'` , async(() => {
        const fixture = TestBed.createComponent(MockForumComponent)
        fixture.detectChanges()
        const divider = fixture.debugElement.query(By.css('mat-divider'))

        expect(divider).to.be.ok
    }))
})

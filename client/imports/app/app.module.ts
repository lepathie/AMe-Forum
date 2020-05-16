import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component'
import { TopicsComponent } from './topics/topics.component'
import { AccountsModule } from 'angular2-meteor-accounts-ui'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            // Home
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            // Topics
            {
                path: 'topics',
                component: TopicsComponent
            },
            // 404 Page
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]),
        AccountsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TopicsComponent,
        PageNotFoundComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

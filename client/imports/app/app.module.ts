import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component'
import { TopicsComponent } from './topics/topics.component'
import { AccountsModule } from 'angular2-meteor-accounts-ui'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json')
  }

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
        AccountsModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TopicsComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

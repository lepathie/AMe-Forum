import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component'
import { AccountsModule, AuthGuard } from 'angular2-meteor-accounts-ui'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { HttpClient } from '@angular/common/http'
import { HomeModule } from './home/home.module'
import { SharedModule } from './shared/shared.module'
import { HeaderModule } from './header/header.module'
import { FooterModule } from './footer/footer.module'
import { PageNotFoundModule } from './page-not-found/page-not-found.module'
import { ForumComponent } from './forum/forum.component'
import { ForumModule } from './forum/forum.module'
import { NewForumComponent } from './new-forum/new-forum.component'
import { NewForumModule } from './new-forum/new-forum.module'
import { AdminComponent } from './admin/admin.component'
import { AdminModule } from './admin/admin.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json')
  }

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SharedModule,
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
            {
                path: 'admin',
                component: AdminComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'forum/:id',
                component: ForumComponent
            },
            // 404 Page
            {
                path: '**',
                component: PageNotFoundComponent
            }
        ]),
        AccountsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        ForumModule,
        HomeModule,
        HeaderModule,
        FooterModule,
        PageNotFoundModule,
        AdminModule,
        NewForumModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

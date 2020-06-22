import { NgModule } from "@angular/core"
import { TranslateModule } from '@ngx-translate/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MarkedPipe } from './marked.pipe'

@NgModule({
    declarations: [
        MarkedPipe
    ],
    exports: [
        // angular modules
        CommonModule,
        HttpClientModule,
        // third party modules
        TranslateModule,
        MarkedPipe
    ]
})
export class SharedModule { }

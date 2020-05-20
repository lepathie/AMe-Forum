import { NgModule } from "@angular/core"
import { TranslateModule } from '@ngx-translate/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    exports: [
        // angular modules
        CommonModule,
        HttpClientModule,
        // third party modules
        TranslateModule
    ]
})
export class SharedModule { }

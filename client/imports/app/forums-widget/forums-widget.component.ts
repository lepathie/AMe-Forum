import { Component, ChangeDetectionStrategy, TemplateRef } from "@angular/core"
import { ControlgroupComponent } from '../controlgroup/controlgroup.component'
import { ControlgroupModule } from '../controlgroup/controlgroup.module'

@Component({
  selector: "forums-widget",
  templateUrl: "./forums-widget.html",
  styleUrls: ["./forums-widget.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForumsWidgetComponent {
    controlgroup: ControlgroupModule

    title = "Forums"
    content = "<p>test</p>"
    ctx = { title: this.title, content: this.content }
}

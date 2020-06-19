import { Component, ChangeDetectionStrategy, Input } from "@angular/core"

@Component({
  selector: "controlgroup-component",
  templateUrl: "./controlgroup.html",
  styleUrls: ["./controlgroup.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlgroupComponent {
  @Input() title
}

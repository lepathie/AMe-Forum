import { Component, ChangeDetectionStrategy, Input } from "@angular/core"

@Component({
  selector: "frame-component",
  templateUrl: "./frame.html",
  styleUrls: ["./frame.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FrameComponent {
  @Input() title
}

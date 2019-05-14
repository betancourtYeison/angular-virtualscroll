import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";

@Component({
  selector: "app-virtual",
  templateUrl: "./virtual.component.html",
  styleUrls: ["./virtual.component.css"]
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  items = Array(1000).fill(Math.round(Math.random() * 100));

  constructor() {}

  ngOnInit() {}

  toEnd() {
    this.viewport.scrollToIndex(this.items.length);
  }

  toStart() {
    this.viewport.scrollToIndex(0);
  }

  toMiddle() {
    this.viewport.scrollToIndex(this.items.length / 2);
  }
}

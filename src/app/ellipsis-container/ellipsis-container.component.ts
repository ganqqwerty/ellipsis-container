import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ellipsis-container',
  templateUrl: './ellipsis-container.component.html',
  styleUrls: ['./ellipsis-container.component.css']
})
export class EllipsisContainerComponent implements OnInit {

  @Input()
  children: string;

  /**
   * amount of the rightmost symbols always shown
   */
  @Input()
  tailLength: number;

  /**
   * show this text on hover
   */
  @Input()
  title: string;

  /**
   * Container css class
   */
  @Input()
  className: string;

  /**
   * The tail of the `children` of the length `tailLength`
   */
  private tail: string;

  /**
   * The first part of `children` string that will be cut
   */
  private head: string;

  ngOnInit() {
    this.tail = this.children.slice(-1 * this.tailLength);
    this.head = this.children.slice(0, this.children.length - this.tailLength);
  }
}

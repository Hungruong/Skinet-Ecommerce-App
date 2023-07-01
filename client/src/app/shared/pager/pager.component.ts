import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent {
  @Input() pageSize?: number;
  @Input() totalCount?: number;
  @Input() pageNumber?: number;
  @Output() pageChanged = new EventEmitter<number>();
  onPageChanged(event: any) {
    this.pageChanged.emit(event.page);
  }

}

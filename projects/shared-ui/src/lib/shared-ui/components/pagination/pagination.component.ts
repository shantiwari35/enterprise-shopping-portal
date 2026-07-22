import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  @Input() page = 1;

  @Input() pageSize = 10;

  @Input() totalItems = 0;

  @Input() pageSizeOptions = [10, 20, 50, 100];

  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  @Output() pageChange = new EventEmitter<number>();

  @Output() pageSizeChange = new EventEmitter<number>();
  Math: Math = Math;

  pages: number[] = [];

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalItems / this.pageSize));
  }

  ngOnChanges(): void {
    this.generatePages();
  }

  private generatePages(): void {
    const total = this.totalPages;

    const start = Math.max(1, this.page - 2);

    const end = Math.min(total, this.page + 2);

    this.pages = [];

    for (let i = start; i <= end; i++) {
      this.pages.push(i);
    }
  }

  goTo(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.page = page;

    this.generatePages();

    this.pageChange.emit(page);
  }

  changePageSize(size: number): void {
    this.pageSize = Number(size);

    this.page = 1;

    this.generatePages();

    this.pageSizeChange.emit(this.pageSize);
  }
}

import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  expanded = false;

  value = '';

  @Output()
  search = new EventEmitter<string>();

  toggle(): void {
    this.expanded = !this.expanded;

    if (!this.expanded) {
      this.value = '';

      this.search.emit('');
    }
  }

  onSearch(): void {
    this.search.emit(this.value);
  }
}

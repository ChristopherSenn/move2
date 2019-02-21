import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UniversityDetailOnMap } from '@app/core';

@Component({
  selector: 'app-university-detail-modal',
  templateUrl: './university-detail-modal.component.html',
  styleUrls: ['./university-detail-modal.component.scss']
})
export class UniversityDetailModalComponent implements OnInit {
  @Input() data: UniversityDetailOnMap;

  @Output() toggleUniversityDetailModal: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  private toggleModal() {
    this.toggleUniversityDetailModal.emit();
  }

}

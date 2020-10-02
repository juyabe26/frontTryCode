import { Component, ViewChild, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'wkr-table-dynamic',
  templateUrl: './table-dynamic.component.html',
  styleUrls: ['./table-dynamic.component.scss']
})
export class TableDynamicComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() inColumns$: Observable<{ id: string, description: string }[]>;
  @Input() inData$: Observable<any[]>;
  @Output() outClickButton = new EventEmitter<any>();

  displayedColumns$ = new BehaviorSubject([]);
  dataSource = new MatTableDataSource([]);

  ngOnInit(): void {
    this.listenInfoTable();
  }

  private listenInfoTable() {
    combineLatest([this.inColumns$, this.inData$])
      .subscribe(this.eatCombine());
  }

  private eatCombine(): (value: [{ id: string; description: string; }[], any[]]) => void {
    return ([m, d]) => {
      if (m && d) {
        this.displayedColumns$.next(m.map(n => n.id));
        this.dataSource = new MatTableDataSource(d);
      }
    };
  }

  onClickButton(row) {
    this.outClickButton.emit(row);
  }
}

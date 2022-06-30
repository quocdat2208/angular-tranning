import { Account } from './../../model/account.model';
import {Component, Input, OnInit, VERSION, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import * as faker from 'faker';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  expandedElement : Account | null
  @Input('dataSource') dataSource : any;
  @Input('displayedColumns') displayedColumns : any;
  @Input('dataSearch') input : any;
  listRows = null // Dữ liệu bank accounts

  listColumns = [
    {
      field: 'name',
      label: 'Name',
      width: '100px'
    },
    {
      field: 'account_number',
      label: 'Account number',
      width: '150px'
    },
    {
      field: 'balance',
      label: 'Balance',
      width: '140px'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getColumns()
  }
  getColumns(){
    this.listColumns.map( data => {
      return 
    })
  }
}

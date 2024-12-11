import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TableTransactionsBank } from '../../../_models/shared';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const NAMES: string[] = ['Maia','Asher','Olivia','Atticus','Amelia','Jack','Charlotte','Theodore','Isla',
  'Oliver','Isabella','Jasper','Cora','Levi','Violet','Arthur','Mia','Thomas','Elizabeth'];
const TYPES = ["payment", "transfer", "charge", "deposit"];

@Component({
  selector: 'table-basic-bank',
  imports: [ MatInputModule, MatFormFieldModule, MatTableModule, MatSortModule, MatPaginatorModule,MatButtonModule, MatIconModule],
  templateUrl: './tableBasicBank.component.html',
  styleUrl: './tableBasicBank.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableBasicBankComponent {

  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  displayedColumns: string[] = ['Id', 'Name','Action', 'Account', 'Amount'];
  dataSource!: MatTableDataSource<TableTransactionsBank>;

  constructor() {
    // Create 100 transactions
    const transactions = Array.from({length : 100}, ( _, k) => getTransaction(k+1));
     // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(transactions);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
    this.dataSource.sort = this.sort!;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}


/** Builds and returns a new Transaction. */
function getTransaction(id: number): TableTransactionsBank {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    Id: id,
    name: name,
    action: TYPES[Math.round(Math.random() * (TYPES.length - 1))],
    amount: Math.round(Math.random() * 100).toString(),
    account: Math.round(Math.random() * 100).toString(),
  };
}

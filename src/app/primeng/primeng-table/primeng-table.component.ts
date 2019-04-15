import {Component, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';
import {DomHandler} from 'primeng/api';

@Component({
  selector: 'app-primeng-table',
  templateUrl: './primeng-table.component.html',
  styleUrls: ['./primeng-table.component.css']
})
export class PrimengTableComponent implements OnInit {

  @ViewChild('table') table: Table;

  sales: any[];
  cols: any[];

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.sales = [
      {brand: {value: 'Apple', span: 'col'}, year: {value: '2015', span: 'col'}, lastYearSale: {value: '51%', span: 'no'}, thisYearSale: {value: '40%', span: 'no'}, lastYearProfit: {value: '$54,406.00', span: 'no'}, thisYearProfit: {value: '$43,342', span: 'no'}},
      {brand: {value: 'Apple', span: 'col'}, year: {value: '2015', span: 'no'}, lastYearSale: {value: '83%', span: 'no'}, thisYearSale: {value: '96%', span: 'no'}, lastYearProfit: {value: '$423,132', span: 'no'}, thisYearProfit: {value: '$312,122', span: 'no'}},
      {brand: {value: 'Apple', span: 'col'}, year: {value: '2016', span: 'col'}, lastYearSale: {value: '38%', span: 'no'}, thisYearSale: {value: '5%', span: 'no'}, lastYearProfit: {value: '$12,321', span: 'col'}, thisYearProfit: {value: '$8,500', span: 'no'}},
      {brand: {value: 'Apple', span: 'no'}, year: {value: '2016', span: 'col'}, lastYearSale: {value: '49%', span: 'no'}, thisYearSale: {value: '22%', span: 'no'}, lastYearProfit: {value: '$745,232', span: 'col'}, thisYearProfit: {value: '$650,323,', span: 'no'}},
      {brand: {value: 'Song', span: 'no'}, year: {value: '2015', span: 'no'}, lastYearSale: { value: '17%', span: 'no'}, thisYearSale: {value: '79%', span: 'no'}, lastYearProfit: {value: '$643,242', span: 'no'}, thisYearProfit: {value: '500,332', span: 'no'}},
      {brand: {value: 'LG', span: 'no'}, year: {value: '2016', span: 'no'}, lastYearSale: {value: '52%', span: 'no'}, thisYearSale: {value: '65%', span: 'no'}, lastYearProfit: {value: '$421,132', span: 'no'}, thisYearProfit: {value: '$150,005', span: 'no'}},
      {brand: {value: 'Sharp', span: 'no'}, year: {value: '2017', span: 'no'}, lastYearSale: {value: '82%', span: 'no'}, thisYearSale: {value: '12%', span: 'no'}, lastYearProfit: {value: '$131,211', span: 'no'}, thisYearProfit: {value: '$100,214', span: 'no'}},
      {brand: {value: 'HTC', span: 'col'}, year: {value: '2014', span: 'col'}, lastYearSale: {value: '44%', span: 'no'}, thisYearSale: {value: '45%', span: 'no'}, lastYearProfit: {value: '$66,442', span: 'no'}, thisYearProfit: {value: '$53,322', span: 'no'}},
      {brand: {value: 'HTC', span: 'no'}, year: {value: '2014', span: 'no'}, lastYearSale: {value: '90%', span: 'no'}, thisYearSale: {value: '56%', span: 'no'}, lastYearProfit: {value: '$765,442', span: 'no'}, thisYearProfit: {value: '$296,232', span: 'no'}},
      {brand: {value: 'Toshiba', span: 'no'}, year: {value: '2015', span: 'no'}, lastYearSale: {value: '75%', span: 'no'}, thisYearSale: {value: '54%', span: 'no'}, lastYearProfit: {value: '$21,212', span: 'no'}, thisYearProfit: {value: '$12,533', span: 'no'}}
    ];

    this.cols = [
      {field: 'brand', header: 'Brand', width: '130px'},
      {field: 'year', header: 'Year', width: '130px'},
      {field: 'lastYearSale', header: 'Last Year', width: '150px'},
      {field: 'thisYearSale', header: 'This Year', width: '180px'},
      {field: 'lastYearProfit', header: 'Last Year', width: '150px'},
      {field: 'thisYearProfit', header: 'This Year', width: 'auto'},
    ];
  }

  handleColResize(event): void {

    const cellIndex = +event.element.id;
    const nextIndex = cellIndex + 1;
    this.cols[cellIndex].width = (+(this.cols[cellIndex].width.substring(0, this.cols[cellIndex].width.length - 2)) + event.delta) + 'px';
    this.cols[nextIndex].width = (+(this.cols[nextIndex].width.substring(0, this.cols[nextIndex].width.length - 2)) - event.delta) + 'px';

    if (this.table.scrollable) {
      const scrollableView = event.element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      const scrollableBodyTable = DomHandler.findSingle(scrollableView, 'table.ui-table-scrollable-body-table');
      const scrollableHeaderTable = DomHandler.findSingle(scrollableView, 'table.ui-table-scrollable-header-table');
      const scrollableFooterTable = DomHandler.findSingle(scrollableView, 'table.ui-table-scrollable-footer-table');
      this.resizeColGroup(scrollableHeaderTable);
      this.resizeColGroup(scrollableBodyTable);
      this.resizeColGroup(scrollableFooterTable);
    }
  }

  resizeColGroup(table): void {
    if (table) {
      const colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
      for (let i = 0; i < this.cols.length; i++) {
        if (colGroup) {
          const col = colGroup.children[i];
          col.style.width = this.cols[i].width;
        }
      }
    }
  }

  fieldValue(rowIndex, col): string {
    let value = this.sales[rowIndex][col.field].value;
    if (rowIndex > 0) {
      const previous = this.sales[rowIndex - 1];
      if (previous[col.field].span === 'col') {
        value = '';
      }
    }
    return value;
  }

  fieldStyle(rowIndex, col): object {
    const style = {width: col.width};
    if (this.sales[rowIndex][col.field].span === 'col') {
      style['border-bottom-color'] = '#ffffff';
    }
    return style;
  }
}

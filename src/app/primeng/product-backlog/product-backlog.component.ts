import {Component, OnInit} from '@angular/core';
import {ProductBacklog} from '../product-backlog';
import {PrimeNgDataService} from '../primeng-data.service';

@Component({
  selector: 'app-product-backlog',
  templateUrl: './product-backlog.component.html',
  styleUrls: ['./product-backlog.component.css']
})
export class ProductBacklogComponent implements OnInit {

  backlog: ProductBacklog[];

  cols: any[];

  span: number[];

  constructor(private dataService: PrimeNgDataService) {
  }

  /**
   * 加载Product backlog。
   * 初期化列表的列表示参数。
   */
  ngOnInit() {
    this.dataService.getSprintBacklog().subscribe((backlog) => {
      this.backlog = backlog as ProductBacklog[];
      // 分组的第一种方法
      // this.backlog.sort(this.onSort);
      // const attr = this.groupList(this.backlog);

      // 分组的第二种方法
      const attr = this.groupBy(this.backlog, function (item) {
        return [item.release];
      });

      this.span = this.updateSpan(attr);
    });

    this.cols = [
      {field: 'release', header: 'Release', width: '150px', textAlign: 'center'},
      {field: 'index', header: 'No.', width: '80px', textAlign: 'center'},
      {field: 'userStory', header: 'User Story', width: 'auto', textAlign: 'left'},
      {field: 'priority', header: 'Priority', width: '150px', textAlign: 'center'},
      {field: 'estimate', header: 'Estimate <br>(Story Point)', width: '150px', textAlign: 'center'},
      {field: 'status', header: 'Status', width: '150px', textAlign: 'center'}
    ];
  }

  /**
   * 按照release字段对数组进行排序。
   * @param data1 第一个数据
   * @param data2 第二个数据
   */
  private onSort(data1, data2): number {

    const value1 = data1['release'];
    const value2 = data2['release'];
    let result = null;

    if (value1 == null && value2 != null) {
      result = -1;
    } else if (value1 != null && value2 == null) {
      result = 1;
    } else if (value1 == null && value2 == null) {
      result = 0;
    } else if (typeof value1 === 'string' && typeof value2 === 'string') {
      result = value1.localeCompare(value2);
    } else {
      result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
    }
    return result;
  }

  /**
   * 根据分组后的数组，设置span信息。
   * @param attr 分组后的列表
   */
  private updateSpan(attr): number[] {
    const span = [];
    for (let i = 0; i < attr.length; i++) {
      let l = attr[i].length;
      span.push(l);
      while (l > 1) {
        span.push(0);
        l--;
      }
    }

    return span;
  }

  /**
   * 对排序后的列表进行分组处理。
   * @param backlog 待分组的列表
   */
  private groupList(backlog: ProductBacklog[]): ProductBacklog[][] {
    let n = -1;
    const hash = {};
    const attr = [];
    const length = backlog.length;
    for (let i = 0; i < length; i++) {
      if (!hash[backlog[i].release]) {
        n++;
        hash[backlog[i].release] = true;
        attr[n] = [];
      }
      attr[n].push(backlog[i]);
    }
    return attr;
  }

  /**
   * 对列表进行分组。
   * @param array 待分组的列表。
   * @param f 匿名函数返回分组字段。
   */
  private groupBy(array, f) {
    const groups = {};
    array.forEach(function (o) {
      const group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
      return groups[group];
    });
  }
}

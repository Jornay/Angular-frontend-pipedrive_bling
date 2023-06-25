import { Component } from '@angular/core';
import { DealsService } from '../services/deals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_pipedrive_bling';
  dealsData: any = [];
  pagedDealsData: any = [];
  currentPage = 1;
  pageSize = 10;
  index = 0

  constructor(private dealsService: DealsService) { }

  ngOnInit() {
    this.getAllDeals();
    this.updatePageData();
  }


  getAllDeals(): void {
    this.dealsService.getAll()
      .then(deals => this.dealsData = deals)
      .catch(error => console.error(error));
  }

  onPageChange(event: number) {
    this.currentPage = event;
    this.updatePageData();
  }

  getRelativeIndex(index: number): number {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return startIndex + index;
  }

  updatePageData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.pagedDealsData = this.dealsData.slice(startIndex, startIndex + this.pageSize);
  }
}

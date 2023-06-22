import { Component } from '@angular/core';
import { DealsService } from '../services/deals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_pipedrive_bling';
  dealsData: any = []

  constructor(private dealsService: DealsService) {
  }

  ngOnInit(): void {
    this.getAllDeals();
  }

  getAllDeals(): void {
    this.dealsService.getAll()
      .then(deals => this.dealsData = deals)
      .catch(error => console.error(error));
  }
}

import { Component } from '@angular/core';
import { DealsService } from './deals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_pipedrive_bling';

  constructor(private dealsService: DealsService ){

  }

  getAllDeals(){
    this.dealsService.getAll()
    .then(deals => console.log(deals))
    .catch(error => console.error(error));
  }
}

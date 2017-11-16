import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AngularEchartsModule } from 'ngx-echarts';
import { SmartTableService } from '../../@core/data/smart-table.service';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './orders/orders.component';



@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    AngularEchartsModule,
  ],
  declarations: [
    DashboardComponent,
    OrdersComponent,
  ],
  providers: [
    SmartTableService,
  ],
})
export class DashboardModule { }

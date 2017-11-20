import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
// import { DashboardModule } from './dashboard/dashboard.module';
import { UserRoutingModule } from './user-routing.module';
// import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  UserComponent,
];

@NgModule({
  imports: [
    UserRoutingModule,
    // ThemeModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class UserModule {
}

import { MainbodyComponent } from './mainbody/mainbody.component';
import { UsersComponent } from './users/users.component';
import { AddheadingComponent } from './addheading/addheading.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { SearchdisplayComponent } from './searchdisplay/searchdisplay.component';
import { ShowdataComponent } from './showdata/showdata.component';
import { CanActivateViaAuthGuard , AuthenticationService } from './services/authentication.service';


export class Configuration {


    public UrlObj = {
        TitlesUrl: 'http://192.168.15.148:4000/api/v1/titles',
        HeadingUrl: 'http://192.168.15.148:4000/api/v1/headings',
        SearchUrl: 'http://192.168.15.148:4000/api/v1/search/',
        UsersUr: 'http://192.168.15.148:4000/api/v1/users',
        CheckUrl: 'http://192.168.15.148:4000/api/v1/Check',
    }


}
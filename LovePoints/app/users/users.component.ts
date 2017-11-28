import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { KnowledgebasedataService } from '../services/knowledgebasedata.service';
import { CanActivateViaAuthGuard } from '../services/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  sending;
  UserLogin: {
    username: string,
    password: string
  } = {
    username: "",
    password: ""
  }
  public UserForm: FormGroup;        // This  is the UserForm of type FormGroup.

  constructor(public test:CanActivateViaAuthGuard,public FormValidation: FormBuilder, public send: AuthenticationService, public SendData: KnowledgebasedataService) {


    this.UserForm = this.FormValidation.group({
      username: [null, [Validators.required, Validators.pattern('[a-z]|[A-Z]')]],
      password: [null, [Validators.required]]   // This give the Validation for the UserForm. 
    });

  }
  ngOnInit() { }

  check(UserForm) {
    console.log(UserForm);
    this.send.set(this.UserLogin);
    this.sending = this.send.Postlogin(UserForm).subscribe(res => {

      console.log(UserForm);
      console.log(res);
    },

      errorr => {
        alert("Error");
      });
    //  this.sending = this.SendData.test();
    // alert(this.sending._body);
    if (this.sending._body == "true") {
      console.log("this is working");
    }
    else if (UserForm.Username == null || UserForm.Password == null) {
      console.log("Enter some data");
      return false;
    }
    else {
      console.log("user doenot exist");
    }
  }


}



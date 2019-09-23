import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    status=JSON.parse(localStorage.getItem('loggedIn'));
    console.log(' In welcome page '+ status);
if(status==="null"){
  console.log('fd');
  this.router.navigateByUrl('login');
}else{

// localStorage.removeItem('loggedIn');
}

// COMBAK:

  }

}

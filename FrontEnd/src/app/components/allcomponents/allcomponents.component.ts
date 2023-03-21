import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allcomponents',
  templateUrl: './allcomponents.component.html',
  styleUrls: ['./allcomponents.component.css']
})
export class AllcomponentsComponent implements OnInit {

  constructor(private tokenService:TokenService,private router:Router) { }

  ngOnInit(): void {
  }

}

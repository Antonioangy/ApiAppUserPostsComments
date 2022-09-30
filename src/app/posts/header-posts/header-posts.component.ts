import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services.service';

@Component({
  selector: 'app-header-posts',
  templateUrl: './header-posts.component.html',
  styleUrls: ['./header-posts.component.css']
})
export class HeaderPostsComponent implements OnInit {

  constructor(public service:AppService) { }

  ngOnInit(): void {
  }

}

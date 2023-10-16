import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  title= 'pagination'
  POSTS:any;
  page: number=1
  count: number=0
  tableSize: number=10
  tablesizes: any=[10,20,30]

  constructor(private service:UsersService) { 

  }

  ngOnInit() {
    this.getPosts()
  }
  getPosts()
  {
    this.service.getPost().subscribe((res)=>{
      this.POSTS=res;
      console.log(res)
    })
  }

  onTableDataChange(event: any)
  {
    
    this.page=event;
    this.getPosts()
  }

  onTableSizeChange(event: any)
  {
    this.tableSize=event.target.value
    this.page=1
    this.getPosts();
  }

}
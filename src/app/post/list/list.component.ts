import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgxPaginationModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  posts: Post[] = [];
  public page: number = 1;
  postsPerPage: number = 10; 
  
  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts()  ;
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
    })
  }
  loadPosts(): void{
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
    }) 
  }

/* Esta sería la otra forma de paginar, pero no conseguia hacer funcionar el html
  loadPosts(): void{
    this.postService.getPaginatedPosts(this.page, this.postsPerPage).subscribe((data: Post[])=>{
      this.posts = data;
    }) 
  }

  onChangePage(page: number) {
    this.page = page;
    console.log(page);
    this.loadPosts();
  }*/
}

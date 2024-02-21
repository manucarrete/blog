import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  posts: Post[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPosts = 0;
  postsPerPage = 10; 
  
  constructor(public postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts()  ;
  }

  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
    })
  }
/*
  loadPosts(): void{
    this.postService.getPaginatedPosts(this.currentPage, this.postsPerPage).subscribe((data: Post[])=>{
      this.posts = data;
    }) 
  }*/

  loadPosts(): void{
    this.postService.getAll().subscribe((data: Post[])=>{
      this.posts = data;
    }) 
  }

  onChangePage(page: number) {
    this.currentPage = page;
    this.loadPosts();
  }
}

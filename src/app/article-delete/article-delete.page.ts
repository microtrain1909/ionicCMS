import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.page.html',
  styleUrls: ['./article-delete.page.scss'],
})
export class ArticleDeletePage implements OnInit {
  article: Article;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.getArticle(params['articleId']);
      }
    );
  }
  deleteArticle(id: string) :void{
    this.articlesService.deleteArticle(id).subscribe(
      (response:any)=>{
        if(response.success == true){
          this.router.navigate(['/articles']);
        }
      }
    );
  }

  getArticle(id: string): void{
    this.articlesService.getArticle(id).subscribe(
      (response:any)=>{
        this.article = response.article;
      }
    );
  }
}

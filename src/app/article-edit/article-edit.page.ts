import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model'; 

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.page.html',
  styleUrls: ['./article-edit.page.scss'],
})
export class ArticleEditPage implements OnInit {

  article: Article;
  errors: any = {};
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      this.getArticle(params['articleId']);
    });
  }

  response(response): void{
    
    if(response.success===false){
      
      if( response.errors.name == 'MissingArticlenameError' ){
        this.errors.articlename = 'Please enter a articlename';
      }

      if( response.errors.name == 'ArticleExistsError' ){
        this.errors.articlename = 'A article with the given articlename is already registered';
      }

      if( response.errors.email ){
        this.errors.email = response.errors.errors.email.message;
      }

    }

    if(response.success===true){
      this.router.navigate(['/articles']);
    }
  }

  onSubmit(): void{
    this.articlesService.updateArticle(this.article).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

  getArticle(id:string):void {
    this.articlesService.getArticle(id).subscribe(
      (response:any)=>{
        this.article = response.article;
      }
    );
  }
}

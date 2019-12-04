import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ArticlesService } from '../articles.service';
import { Article } from '../article.model'; 

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.page.html',
  styleUrls: ['./article-create.page.scss'],
})
export class ArticleCreatePage implements OnInit {

  article:Article = new Article();
  errors: Array<any> = [];
  errorMessage: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void{}

  response(response:any): void{

    if(response.success===false){
      this.errors = response.error.errors;
      this.errorMessage = response.error._message;
    }

    if(response.success===true){
      this.router.navigate(['/articles']);
    }
  }

  onSubmit(): void{
    this.articlesService.createArticle(this.article).subscribe(
      (response:any) => {
        this.response(response);
      }
    );
  }

}
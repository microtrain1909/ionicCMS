import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  //Set up the URL

  private url: string;

  constructor(private http: HttpClient) {
    let l = window.location;
    let host:string;
    //Are we running under Ionic or in a production environment?
    if(l.port >= '8100'){
      host = 'localhost:3000';
    }else{
      host = l.hostname + ((l.port.length>0)?':' + l.port:'');
    }

    this.url = `${l.protocol}//${host}/api/articles/`;
  }

  getArticles(): Observable<Article>{
    return this.http.get<Article>(this.url, httpOptions);
  }

  getArticle(id:String): Observable<Article>{
    return this.http.get<Article>(`${this.url}${id}`, httpOptions);
  }

  updateArticle(article: Article): Observable<Article>{
    return this.http.put<Article>(this.url, article, httpOptions);
  }

  createArticle (article: Article): Observable<Article> {
    return this.http.post<Article>(this.url, article, httpOptions);
  }

  deleteArticle(id: string): Observable<Article>{
    return this.http.delete<Article>(this.url + id);
  }
}
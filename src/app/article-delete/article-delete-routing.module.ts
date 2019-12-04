import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDeletePage } from './article-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleDeletePageRoutingModule {}

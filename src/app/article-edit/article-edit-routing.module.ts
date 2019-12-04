import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleEditPage } from './article-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleEditPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleCreatePageRoutingModule } from './article-create-routing.module';

import { ArticleCreatePage } from './article-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleCreatePageRoutingModule
  ],
  declarations: [ArticleCreatePage]
})
export class ArticleCreatePageModule {}

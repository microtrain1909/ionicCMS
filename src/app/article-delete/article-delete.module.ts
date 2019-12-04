import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleDeletePageRoutingModule } from './article-delete-routing.module';

import { ArticleDeletePage } from './article-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDeletePageRoutingModule
  ],
  declarations: [ArticleDeletePage]
})
export class ArticleDeletePageModule {}

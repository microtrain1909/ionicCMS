import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleEditPageRoutingModule } from './article-edit-routing.module';

import { ArticleEditPage } from './article-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleEditPageRoutingModule
  ],
  declarations: [ArticleEditPage]
})
export class ArticleEditPageModule {}

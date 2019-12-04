import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticleDeletePage } from './article-delete.page';

describe('ArticleDeletePage', () => {
  let component: ArticleDeletePage;
  let fixture: ComponentFixture<ArticleDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

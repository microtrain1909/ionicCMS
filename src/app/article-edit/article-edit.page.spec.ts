import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArticleEditPage } from './article-edit.page';

describe('ArticleEditPage', () => {
  let component: ArticleEditPage;
  let fixture: ComponentFixture<ArticleEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

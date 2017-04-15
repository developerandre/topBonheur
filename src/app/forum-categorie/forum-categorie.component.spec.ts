import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCategorieComponent } from './forum-categorie.component';

describe('ForumCategorieComponent', () => {
  let component: ForumCategorieComponent;
  let fixture: ComponentFixture<ForumCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

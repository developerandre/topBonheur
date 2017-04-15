import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumTagComponent } from './forum-tag.component';

describe('ForumTagComponent', () => {
  let component: ForumTagComponent;
  let fixture: ComponentFixture<ForumTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

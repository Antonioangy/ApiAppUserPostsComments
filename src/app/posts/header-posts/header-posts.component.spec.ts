import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostsComponent } from './header-posts.component';

describe('HeaderPostsComponent', () => {
  let component: HeaderPostsComponent;
  let fixture: ComponentFixture<HeaderPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

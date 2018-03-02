import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardContainerComponent } from './home-card-container.component';

describe('HomeCardContainerComponent', () => {
  let component: HomeCardContainerComponent;
  let fixture: ComponentFixture<HomeCardContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCardContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

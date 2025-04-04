import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreNowComponent } from './explore-now.component';

describe('ExploreNowComponent', () => {
  let component: ExploreNowComponent;
  let fixture: ComponentFixture<ExploreNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreNowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

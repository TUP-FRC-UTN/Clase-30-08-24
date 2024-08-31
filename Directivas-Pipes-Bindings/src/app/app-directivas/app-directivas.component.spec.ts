import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirectivasComponent } from './app-directivas.component';

describe('AppDirectivasComponent', () => {
  let component: AppDirectivasComponent;
  let fixture: ComponentFixture<AppDirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDirectivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

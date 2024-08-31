import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirectivasNuevasComponent } from './app-directivas-nuevas.component';

describe('AppDirectivasNuevasComponent', () => {
  let component: AppDirectivasNuevasComponent;
  let fixture: ComponentFixture<AppDirectivasNuevasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDirectivasNuevasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDirectivasNuevasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

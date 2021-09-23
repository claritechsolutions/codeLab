import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwnldAppComponent } from './dwnld-app.component';

describe('DwnldAppComponent', () => {
  let component: DwnldAppComponent;
  let fixture: ComponentFixture<DwnldAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwnldAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwnldAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

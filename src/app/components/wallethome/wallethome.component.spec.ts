import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallethomeComponent } from './wallethome.component';

describe('WallethomeComponent', () => {
  let component: WallethomeComponent;
  let fixture: ComponentFixture<WallethomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallethomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallethomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

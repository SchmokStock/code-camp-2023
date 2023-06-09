import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeistungsPaketDisplayComponent } from './leistungs-paket-display.component';

describe('LeistungsPaketDisplayComponent', () => {
  let component: LeistungsPaketDisplayComponent;
  let fixture: ComponentFixture<LeistungsPaketDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeistungsPaketDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeistungsPaketDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

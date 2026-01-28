import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeDrvComponent } from './liste-drv.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListeDrvComponent', () => {
  let component: ListeDrvComponent;
  let fixture: ComponentFixture<ListeDrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListeDrvComponent,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeDrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of demandes', () => {
    expect(component.demandes).toBeDefined();
    expect(component.demandes.length).toBeGreaterThan(0);
  });

  it('should display status badges', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const badges = compiled.querySelectorAll('.status');
    expect(badges.length).toBeGreaterThan(0);
  });
});

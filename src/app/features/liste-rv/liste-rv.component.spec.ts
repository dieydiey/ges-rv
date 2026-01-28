import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeRvComponent } from './liste-rv.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListeRvComponent', () => {
  let component: ListeRvComponent;
  let fixture: ComponentFixture<ListeRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListeRvComponent,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of rendez-vous', () => {
    expect(component.rendezVous).toBeDefined();
    expect(component.rendezVous.length).toBeGreaterThan(0);
  });

  it('should render table rows', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(component.rendezVous.length);
  });
});

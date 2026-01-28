import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaireDemandeComponent } from './faire-demande.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('FaireDemandeComponent', () => {
  let component: FaireDemandeComponent;
  let fixture: ComponentFixture<FaireDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FaireDemandeComponent,
        ReactiveFormsModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FaireDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.demandeForm.valid).toBeFalse();
  });

  it('form should be valid when required fields are filled', () => {
    component.demandeForm.setValue({
      specialite: 'generaliste',
      medecin: '',
      date: '2026-02-01',
      heure: '',
      type: 'premiere',
      urgence: 'normal',
      motif: 'Consultation générale',
      symptomes: '',
      telephone: '770000000',
      email: 'test@email.com'
    });

    expect(component.demandeForm.valid).toBeTrue();
  });

  it('should call envoyer() on submit', () => {
    spyOn(component, 'envoyer');

    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(component.envoyer).toHaveBeenCalled();
  });
});

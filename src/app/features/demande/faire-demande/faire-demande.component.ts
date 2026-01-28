import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-faire-demande',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './faire-demande.component.html',
  
})
export class FaireDemandeComponent {

  demandeForm: ReturnType<FormBuilder['group']>;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.demandeForm = this.fb.group({
      specialite: ['', Validators.required],
      medecin: [''],
      date: ['', Validators.required],
      heure: [''],
      type: ['', Validators.required],
      urgence: ['', Validators.required],
      motif: ['', Validators.required],
      symptomes: [''],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  envoyer() {
    if (this.demandeForm.invalid) {
      this.demandeForm.markAllAsTouched();
      return;
    }

    console.log('Demande envoyée :', this.demandeForm.value);

    // Redirection simple après soumission
    this.router.navigate(['/demandes']);
  }
}

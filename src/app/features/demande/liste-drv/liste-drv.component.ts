import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface DemandeRv {
  id: string;
  titre: string;
  dateCreation: string;
  medecin: string;
  dateSouhaitee: string;
  service: string;
  urgence: string;
  statut: 'pending' | 'approved' | 'rejected';
}

@Component({
  selector: 'app-liste-drv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-drv.component.html',
  
})
export class ListeDrvComponent {

  demandes: DemandeRv[] = [
    {
      id: '2024-001',
      titre: 'Consultation Cardiologie',
      dateCreation: '15 janvier 2026',
      medecin: 'Dr. Martin Bernard',
      dateSouhaitee: '25 janvier 2026',
      service: 'Cardiologie',
      urgence: 'Normale',
      statut: 'pending'
    },
    {
      id: '2024-002',
      titre: 'Suivi Dermatologie',
      dateCreation: '10 janvier 2026',
      medecin: 'Dr. Sophie Dubois',
      dateSouhaitee: '20 janvier 2026 à 14h30',
      service: 'Dermatologie',
      urgence: 'Normale',
      statut: 'approved'
    },
    {
      id: '2024-003',
      titre: 'Consultation Généraliste',
      dateCreation: '5 janvier 2026',
      medecin: 'Dr. Claire Martin',
      dateSouhaitee: '8 janvier 2026',
      service: 'Médecine générale',
      urgence: '—',
      statut: 'rejected'
    }
  ];

  getStatutLabel(statut: DemandeRv['statut']): string {
    switch (statut) {
      case 'pending': return 'En attente';
      case 'approved': return 'Approuvée';
      case 'rejected': return 'Rejetée';
    }
  }
}

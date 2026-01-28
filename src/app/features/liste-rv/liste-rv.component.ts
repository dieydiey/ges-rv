import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface RendezVous {
  jour: string;
  mois: string;
  titre: string;
  heure: string;
  medecin: string;
  lieu: string;
  service: string;
  type: string;
  duree?: string;
  statut: 'upcoming' | 'completed' | 'cancelled';
}

@Component({
  selector: 'app-liste-rv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './liste-rv.component.html',
  
})
export class ListeRvComponent {

  rendezVous: RendezVous[] = [
    {
      jour: '20',
      mois: 'Janvier 2026',
      titre: 'Consultation Dermatologie',
      heure: '14:30',
      medecin: 'Dr. Sophie Dubois',
      lieu: 'Cabinet Centre-Ville',
      service: 'Dermatologie',
      type: 'Consultation de suivi',
      duree: '30 minutes',
      statut: 'upcoming'
    },
    {
      jour: '15',
      mois: 'Janvier 2026',
      titre: 'Consultation Cardiologie',
      heure: '10:00',
      medecin: 'Dr. Martin Bernard',
      lieu: 'Clinique du Parc',
      service: 'Cardiologie',
      type: 'Bilan cardiaque',
      duree: '45 minutes',
      statut: 'completed'
    },
    {
      jour: '22',
      mois: 'Décembre 2025',
      titre: 'Consultation Ophtalmologie',
      heure: '09:30',
      medecin: 'Dr. Pierre Laurent',
      lieu: 'Centre Médical Nord',
      service: 'Ophtalmologie',
      type: '—',
      statut: 'cancelled'
    }
  ];
}

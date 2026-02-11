export interface ListDemandeRv{
    id: number;
    date: string;
    heure: string;
    typeConsultation: string;
    specialite:specialite; 
    statut: statut;
}

export type specialite = 'Généraliste' | 'Cardiologie' | 'Dermatologie' | 'Gastro-entérologie'
export type statut = 'En Attente' | 'Confirmée' | 'Annulée'
import { ListDemandeRv } from "../features/private/models/demande.models";

export const DEMANDES_MOCK:ListDemandeRv[] = [
    {id:1, date:'2024-07-10', heure:'10:00', typeConsultation:'Consultation Générale', specialite:'Généraliste', statut:'En Attente'},
    {id:2, date:'2024-07-12', heure:'14:30', typeConsultation:'Consultation Spécialisée', specialite:'Cardiologie', statut:'Confirmée'},
    {id:3, date:'2024-07-15', heure:'09:00', typeConsultation:'Consultation de Suivi', specialite:'Dermatologie', statut:'Annulée'}  
]


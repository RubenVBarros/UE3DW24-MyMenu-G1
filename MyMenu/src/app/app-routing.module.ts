import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FavorisComponent} from './favoris/favoris.component';
import {CreerRecetteComponent} from './creer-recette/creer-recette.component';
import {ChoixCompteComponent} from './choix-compte/choix-compte.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {SupprimerRecetteComponent} from './supprimer-recette/supprimer-recette.component';
import {ModifierRecetteComponent} from './modifier-recette/modifier-recette.component';
import {AccueilComponent} from './accueil/accueil.component';
import {RecetteDetailComponent} from './recette-detail/recette-detail.component';

const routes: Routes = [
    {path: '',redirectTo:'/accueil',pathMatch:'full'},
    {path: 'accueil', component:AccueilComponent},
    {path: 'favoris', component:FavorisComponent},
    {path: 'creer-recette', component:CreerRecetteComponent},
    {path: 'choix-compte', component:ChoixCompteComponent},  
    {path: 'connexion', component:ConnexionComponent},  
    {path: 'inscription', component:InscriptionComponent},
    {path: 'supprimer-recette', component:SupprimerRecetteComponent},
    {path: 'modifier-recette', component:ModifierRecetteComponent},
    {path: 'detail/:id',component:RecetteDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

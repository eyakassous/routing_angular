import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ListlivresComponent } from './components/listlivres/listlivres.component';
import { ErrorComponent } from './components/error/error.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"presentation",title:"presentation",component:PresentationComponent},
  {path:"listLivres",title:"listlivres",component:ListlivresComponent},
  {path:"aboutUs",title:"about us",component:AboutusComponent},
  {path:"",title:"presentation",component:PresentationComponent},
  {path:"listLivres/:id",title:"/selectedLivre",component:SelectedLivreComponent},
  {path:"**",title:"erreur",component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

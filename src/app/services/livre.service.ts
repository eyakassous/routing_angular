import { Injectable } from '@angular/core';
import { Livre } from '../model/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private livres: Livre[]=[
    new Livre (10, '17 ramadan', 'Gorgi Zaydane', 'historique', 4.3, false),
    new Livre (20, 'pivoine', 'Pearl Buck', 'roman', 24.2, false),
    new Livre (30, 'Vent d\'Est Vent d\'Ouest', 'Pearl Buck', 'roman', 25.3,
    true),
    new Livre (40, 'La tresse', 'Laetitia Colombani', 'roman', 18.6, false),
    new Livre (50, 'Haroun Erachid', 'Gorgi Zaydane', 'historique', 5.8, false),
    new Livre (60, 'Terre chinoise', 'Pearl Buck', 'roman', 26.4, true)
    ];
  constructor() { }
  getLivres(){
    return this.livres;
  }
  liv!:Livre;
  getLivreById(id :number){
    for(let i =0;i<this.livres.length;i++){
      if(this.livres[i].id==id){
        this.liv=this.livres[i];
      }
    }
    return this.liv;
  }
  livr!: Livre[];
  getLivresByCategorie (categ : string) {
    for(let i =0;i<this.livres.length;i++){
      if(this.livres[i].categorie==categ){
        this.livr.push(this.livres[i]);
      }
    }
    return this.liv;
  }
}

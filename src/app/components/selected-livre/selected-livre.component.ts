import { LivreService } from './../../services/livre.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-selected-livre',
  templateUrl: './selected-livre.component.html',
  styleUrls: ['./selected-livre.component.css']
})
export class SelectedLivreComponent implements OnInit {
idlivre:number=0;
  constructor(private activatedRoute:ActivatedRoute,private livreService:LivreService) { }


  ngOnInit(): void {
    this.idlivre=this.activatedRoute.snapshot.params['id'];
  }
  afficher(){
  return this.livreService.getLivreById(this.idlivre);
  }

}

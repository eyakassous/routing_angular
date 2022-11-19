import { LivreService } from './../../services/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from 'src/app/model/livre';

@Component({
  selector: 'app-listlivres',
  templateUrl: './listlivres.component.html',
  styleUrls: ['./listlivres.component.css']
})
export class ListlivresComponent implements OnInit {
  lesLivres!: Livre[];
  constructor(private LivreService:LivreService) { }

  ngOnInit(): void {
    this.lesLivres=this.LivreService.getLivres();
  }

}

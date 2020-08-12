import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonagensService } from '../../services/personagens.service'

@Component({
  selector: 'app-personagem',
  templateUrl: './personagem.component.html',
  styleUrls: ['./personagem.component.css']
})
export class PersonagemComponent implements OnInit {

  id: number;
  personagem: any;

  constructor(private route: ActivatedRoute, private personagensServ: PersonagensService) { }

    ngOnInit(): void {

      this.route.params.subscribe(params => {
          this.id = params['id'];
          console.log(this.id);

         this.personagensServ.getPersonagem(this.id)
         .subscribe(personagem => {
           this.personagem = personagem;
           console.log(this.personagem);
        });
      });



    }
}
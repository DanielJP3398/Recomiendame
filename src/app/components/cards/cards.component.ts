import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = this.CardService.cards;

  constructor(private router: Router, private CardService: CardService) { }

  selectCard(id: string) {
    this.router.navigate(['/perfil', id]);
  }
}

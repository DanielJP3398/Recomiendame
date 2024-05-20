import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../services/card.service';
import { SidebarComponent } from "../sidebar/sidebar.component";


@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [FormsModule, CommonModule, SidebarComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  card: any;
  @Input() contenido?: string;
  publicaciones: string[] = [];
  public imagenes: string[] = [
    './assets/autoUno.avif',
    './assets/autoDos.jfif',
    './assets/autoTres.avif',
    './assets/prueba.jpg',
    './assets/autoUno.avif',
    './assets/autoUno.avif',
    // Agrega más URLs de imágenes aquí
  ];

  newComment?: string;
  comments: string[] = [];

  addComment() {
    if (this.newComment) {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }

  constructor(private route: ActivatedRoute, private cardService: CardService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.card = this.cardService.getCard(id!);
  }
  agregarPublicacion(nuevoComentario: string) {
    this.publicaciones.push(nuevoComentario);
  }
  calificacion: number = 0;

  calificar(valor: number) {
    this.calificacion = valor;
  }

}

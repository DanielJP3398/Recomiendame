import { Component } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { NavComponent } from "../../components/nav/nav.component";
import { SliderComponent } from "../../components/slider/slider.component";
import { CardsComponent } from '../../components/cards/cards.component';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from "../../components/categories/categories.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [SidebarComponent, NavComponent, SliderComponent, CardsComponent, CommonModule, CategoriesComponent]
})
export class HomeComponent {
  darkMode: boolean = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark-mode', this.darkMode);
  }
}

import {HomeComponent} from "./pages/home/home.component";
import {Routes} from "@angular/router";

export const routes: Routes = [
  // Se nenhum caminho for especificado, redireciona para a página inicial (home)
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // Define a rota para a página inicial (home) e especifica o componente a ser carregado
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
];

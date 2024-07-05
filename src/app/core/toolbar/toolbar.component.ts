import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatToolbar,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatButton
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {

}

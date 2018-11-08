import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../model/menu-item';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.css']
})
export class TreeMenuComponent implements OnInit {
  public menuItems$: Observable<MenuItem[]>;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuItems$ = this.menuService.getMenuItems();
  }
}

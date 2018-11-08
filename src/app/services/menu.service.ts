import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../model/menu-item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(private httpClient: HttpClient) { }

  public getMenuItems(): Observable<MenuItem[]> {
    const url = '/assets/menu-structure.json';
    return this.httpClient.get<MenuItem[]>(url).pipe(
      map(items => items.map(MenuItem.fromJSON))
    );
  }
}

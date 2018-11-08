export class MenuItem {
  constructor(public name: string, public icon: string,
              public link: string[], public children: MenuItem[]) { }

  public static fromJSON({name, icon, link, children}: MenuItem): MenuItem {
    return new MenuItem(name, icon, link, children.map(MenuItem.fromJSON));
  }
}

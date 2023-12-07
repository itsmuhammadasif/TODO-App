import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TODO List with Angular!';
  list: any = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn(this.list);
  }
  removeButton(id: number) {
    this.list = this.list.filter((item: { id: number }) => item.id !== id);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentPage = 0;

  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1648614761888-c38cf4b7882b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Praying',
      url: 'https://images.unsplash.com/photo-1648593470206-64f8690efeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      title: 'Natural',
      url: 'https://images.unsplash.com/photo-1647182950502-8dc953740f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    },
    {
      title: 'Darky',
      url: 'https://images.unsplash.com/photo-1648615046492-9ccceec02673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80'
    }
  ]

  checkIndex(index: number){
    return Math.abs(this.currentPage - index) <5;
  }

}
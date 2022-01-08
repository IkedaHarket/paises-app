import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit{

  @Input() title:string = '';


  ngOnInit(): void {
    const element = document.getElementById('text')
    element?.style?.setProperty('width',`${this.title.length + 1}ch`)
  }
}

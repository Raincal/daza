import { Component, OnInit } from '@angular/core';
import { Tags } from './tags';

@Component({
  selector: 'dz-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss']
})
export class TagComponent implements OnInit {
  tags = Tags;
  constructor() { }

  ngOnInit() { }
}

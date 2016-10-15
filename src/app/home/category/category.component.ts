import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dz-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories = [
    {
      'id': 1,
      'name': '新闻',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 2,
      'name': '后端',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 3,
      'name': '前端',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 4,
      'name': '移动端',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 5,
      'name': '数据库',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 6,
      'name': '设计',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 7,
      'name': '产品',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 8,
      'name': '博客',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    },
    {
      'id': 9,
      'name': '其他',
      'slug': null,
      'image_url': '',
      'description': '',
      'topic_count': 0,
      'article_count': 0,
      'created_at': '2016-10-02 15:33:01',
      'updated_at': '2016-10-02 15:33:01'
    }
  ];

  constructor() { }

  ngOnInit() { }

  locationChanged(id) {
  }
}

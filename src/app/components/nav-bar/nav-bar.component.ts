import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('header').style.top = '0';
      } else {
        document.getElementById('header').style.top = '-100px';
      }
      prevScrollpos = currentScrollPos;
    };
  }

  showMenu() {
    document.getElementById('menu-mobile').classList.toggle('active');
    document.getElementById('section').classList.toggle('active');
  }
}

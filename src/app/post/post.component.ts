import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input("text") text: string = "...";
  @Input("username") username: string = "";
  @Input("postdate") post_date: string = "";
}

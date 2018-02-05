import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { action } from "ui/dialogs"
import { DishService } from '../services/dish.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/switchMap';
import * as LocalNotifications from 'nativescript-local-notifications';

import * as SocialShare from "nativescript-social-share";
import { ImageSource, fromUrl } from "image-source";
import { FavoriteService } from '../services/favorite.service';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';



@Component({
  selector: 'app-dishdetail',
    moduleId: module.id,
  templateUrl: './dishdetail.component.html'
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  comment: Comment;
  errMess: string;
  avgstars: string;
  numcomments: number;
  favorite: boolean = false;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions,private favoriteservice: FavoriteService,
    private fonticon: TNSFontIconService, 
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {

    this.route.params
    .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
    .subscribe(dish => { 
        this.dish = dish;
        this.favorite = this.favoriteservice.isFavorite(this.dish.id);
        this.numcomments = this.dish.comments.length;

        let total = 0;
        this.dish.comments.forEach(comment => total += comment.rating);
        this.avgstars = (total/this.numcomments).toFixed(2);
      },
      errmess => { this.dish = null; this.errMess = <any>errmess; });
  }
  addToFavorites() {
    if (!this.favorite) {
      console.log('Adding to Favorites', this.dish.id);
      this.favorite = this.favoriteservice.addFavorite(this.dish.id);
      // const toast = new Toasty("Added Dish "+ this.dish.id, "short", "bottom");
      // toast.show();
    }
  }

  goBack(): void {
    this.routerExtensions.back();
  }
  socialShare() {
    let image: ImageSource;

    fromUrl(this.BaseURL + this.dish.image)
     .then((img: ImageSource) => {
       image = img; 
        SocialShare.shareImage(image, "How would you like to share this image?")
      })
     .catch(()=> { console.log('Error loading image'); });

     LocalNotifications.schedule([{
      title: "Repoto",
      body: 'Dish shared successfully',
      at: new Date(new Date().getTime() + (10 * 1000))
    }])
    .then(() => console.log('Notification scheduled'),
      (error) => console.log('Error showing nofication ' + error));
  

  }
  displayActionDialog() {
    console.log("Inside")
    let options = {
      title: "Actions",
      message: "Choose your Action",
      cancelButtonText: "Cancel",
      actions: ["Social sharing"]
    };
    action(options).then((result) => {
      if(result == "Social sharing") {
        this.socialShare();
      }
    });
  }
}
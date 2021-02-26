import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/classes/image.class';
import { Picture } from 'src/app/models/interfaces/api-gallery-response.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  loading = false;
  pageCount = 0;
  pictureCount = 0;
  currentPage = 1;
  pictures: Picture[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(page: number = 1) {
    console.log(page);
    this.loading = true;
    this.apiService.getImages(page)
    .subscribe(
      res => {
        console.log(res);
        this.loading = false;
        this.pictures = res.pictures;
        this.pictureCount = res.pictures.length;
        this.pageCount = res.pageCount;
      }
    )
  }

  pageUp() {
    this.pictures = [];
    if (this.currentPage < this.pageCount) {
      console.log('entro');
      this.currentPage++
      this.getImages(this.currentPage);
    }
  }

  pageDown() {
    if (this.currentPage > 1) {
      this.pictures = [];
      console.log('entro');
      this.currentPage--
      this.getImages(this.currentPage);
    }
  }


}

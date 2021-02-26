export class Image {

    constructor(
        public id:              string,
        public author:          string,
        public camera:          string,
        public tags:            string,
        public cropped_picture: string,
        public full_picture:    string
    ) { }
}

export interface GalleryResponse {
    pictures:  Picture[];
    page:      number;
    pageCount: number;
    hasMore:   boolean;
}

export interface Picture {
    id:              string;
    cropped_picture: string;
}

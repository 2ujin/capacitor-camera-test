import { Component, NgZone } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraResultType, GalleryImageOptions } from '@capacitor/camera';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private imagePicker: ImagePicker,
    private fileUtil: File,
    private domSanitizer: DomSanitizer,
    private ngZone: NgZone,
    private webview: WebView
  ) {}

  async pick1() {
    // const image = await Camera.getPhoto({
    //   quality: 90,
    //   allowEditing: true,
    //   resultType: CameraResultType.Uri
    // });
    const option: GalleryImageOptions = {
      correctOrientation: true
    };
    Camera.pickImages(option).then((val) => {
      console.log("check-> ", val)
    })
  }
}

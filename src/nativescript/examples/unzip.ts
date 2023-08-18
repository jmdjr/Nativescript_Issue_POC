import { Zip } from '@nativescript/zip'
import { notifyEvent } from "@nativescript/capacitor/bridge"

native.unzip = (source:string, destination:string) => {
    return Zip.unzip({
        archive: source,
        directory:destination,
        onProgress: (progress) => {
          notifyEvent("unzipProgress", progress);
        },
      }).then((filePath) => {
        notifyEvent("unzipComplete", filePath);
      });
}
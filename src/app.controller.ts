import { Controller, Get, Render } from '@nestjs/common';

@Controller('open')
export class AppController {
  private androidScheme = 'screenmirroring://';
  private androidStore =
    'https://play.google.com/store/apps/details?id=screen.mirroring.tv.cast';

  private iosScheme = 'screenmirroring://';
  private iosStore =
    'https://apps.apple.com/app/id1525486257?mt=8';

  @Get('android')
  @Render('open-android')
  openAndroid() {
    return {
      scheme: this.androidScheme,
      store: this.androidStore,
    };
  }

  @Get('ios')
  @Render('open-ios')
  openIos() {
    return {
      scheme: this.iosScheme,
      store: this.iosStore,
    };
  }
}

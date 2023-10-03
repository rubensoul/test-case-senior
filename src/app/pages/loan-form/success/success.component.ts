import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlatformService } from 'src/app/shared/services/platform.service';
import { tap } from 'rxjs/operators';
import { Infos } from 'src/app/shared/types/Info';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuccessComponent implements OnInit {

  private mySubscription: Subscription;
  info: Infos = null;

  constructor(
    private platformService: PlatformService,
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  getInfo(){
    this.mySubscription = this.platformService.postInfo('data').pipe(
      tap((values) => {
        this.info = values;
      })
    ).subscribe();
  }

}

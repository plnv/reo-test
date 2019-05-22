import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DilaogComponent } from '../dilaog/dilaog.component';
import { Wells } from '../shared/class/Well.class';
import { WellService } from '../shared/services/well.service';

function asd(a) {
  return a;
}

@Component({
  selector: 'app-zzz',
  templateUrl: './zzz.component.html',
  styleUrls: ['./zzz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [
  //   {
  //     provide: WellClass,
  //     useClass: WellService,
  //     // useValue: {
  //     //   url: '/zzz/',
  //     // get() {
  //     //   console.log('whuuuut??');
  //     // },
  //     // },
  //   },
  // ],
})
export class ZzzComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private api: WellService<any>
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      item: [null, Validators.required],
    });

    console.log(this.api);

    this.api.get().subscribe(data => {
      console.log(data, 'data');
      // [1, 2, 3].map(x => {
      //   const y = x + asd(1);
      //   return x * y;
      // });
      //
      // if (data instanceof Wells) {
      //   data.isValid();
      // }
      // const d = plainToClass(Wells, { well: data });
      // console.log(d);
      // validate(data).then(errors => { // errors is an array of validation errors
      //   if (errors.length > 0) {
      //     console.log('validation failed. errors: ', errors);
      //   } else {
      //     console.log('validation succeed');
      //   }
      // });
    });
  }

  open() {
    const dialogRef = this.dialog.open(DilaogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

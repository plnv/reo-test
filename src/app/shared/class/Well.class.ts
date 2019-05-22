import {
  IsInt,
  IsString, Max, Min,
  MinLength,
  validate,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Well {
  @IsInt()
  @Min(10)
  id: number;

  @IsString()
  @Min(10)
  name: string;
}

export class Wells {
  @ValidateNested()
  wells: Well[];

  public isValid(): void {
    console.log(this.wells);
    validate(this).then(errors => {
      // errors is an array of validation errors
      console.log(errors);
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
      } else {
        console.log('validation succeed');
      }
    });
  }

  public isValidIn(): void {
    validate(this.wells[0]).then(errors => {
      // errors is an array of validation errors
      if (errors.length > 0) {
        console.log('validation failed. errors: ', errors);
      } else {
        console.log('validation succeed');
      }
    });
  }
}

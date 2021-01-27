import { Component} from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hellong';
  inputVal =""
  handleChange(event){
    this.inputVal = event.target.value;
  }

  value: number = 123;
  options: Options = {
    floor: 100000,
    ceil: 300000,
  };
  value2: number = 1;
  option: Options = {
    floor: 0,
    ceil: 80000,
  };
  dropdownOptions = ['6 Months', '9 Months', '12 months'];

  cardContent = [
    {
      img: '../assets/Get Paid Instantly.png',
      headingLine: 'Quick cash disbursement',
      para: 'Get terms loans that your business needs within 72 hrs',
    },
    {
      img: '../assets/Low interest rate.png',
      headingLine: 'Low-interest rate',
      para:
        'Achieve your financial goals with an amazing interest rate starting at 13% per annum',
    },
    {
      img: '../assets/Secure Payments.png',
      headingLine: 'Zero Paperwork',
      para:
        'Get started instantly by submitting only your basic details & bank statements',
    },
    {
      img: '../assets/freelancer_feature_icon_6@1.5x.png',
      headingLine: 'Ace your business finances',
      para:
        'Manage banking, accounting & everything in between, on one platform',
    },
    {
      img: '../assets/Covid.png',
      headingLine: 'Loans to fight COVID-19',
      para:
        'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh',
    },
  ];
}


import { timer ,  Observable, Subject } from 'rxjs';
import { OnInit, Component, Output } from "@angular/core";
@Component({
  selector: 'app-clock2',
  templateUrl: './clock2.component.html',
  styleUrls: ['./clock2.component.css']
})

export class Clock2Component implements OnInit {

  constructor() { }

 
  ngOnInit() {
   
  }

  countdown: number;
  startCountdownTimer() {
    const interval = 1000;
    const duration = 10 * 1000;
    const stream$ = timer(0, interval) //chamo função que retorna inteiro ascendente
      //.finally(() => console.log("All done!"))
      //.takeUntil(timer(duration + interval))
      //.map(value => duration - value * interval);
    stream$.subscribe(value => this.countdown = value);
  }

}

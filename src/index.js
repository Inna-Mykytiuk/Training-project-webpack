// import './components/Todos';
import { Timer } from './widget/timer';
import { Clock } from './widget/clock';

//створюємо новий екземпляр
const timer1 = new Timer({ selector: '.timer-1' });
const timer2 = new Timer({ selector: '.timer-2', start: 20 });
const timer3 = new Timer({ selector: '.timer-3', start: 30 });

const clock = new Clock({ selector: '.clock' });

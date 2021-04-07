import {AfterViewInit, Component, ElementRef, Output, ViewChild, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent implements AfterViewInit, OnDestroy {
  slides: {id: string, image: string, desc: string}[] = [
    {
      id: '1',
      image: 'assets/screenshots/splash-001.png',
      desc: ''
    },
    {
      id: '2',
      image: 'assets/screenshots/splash-002.png',
      desc: 'با استفاده از این برنامه می تونی به راحتی از مکان های گردشگری باخبر بشی'
    },
    {
      id: '3',
      image: 'assets/screenshots/splash-003.png',
      desc: 'راجع به مکان هایی که دوست داری اطلاعات بیشتری کسب کنی!'
    },
    {
      id: '4',
      image: 'assets/screenshots/splash-004.png',
      desc: 'و کوله بار سفر رو ببند...'
    }
  ];
  doneTitle = 'اتمام';

  @ViewChild('slidesContainer', {static: true}) slidesContainer: ElementRef;
  @Output() boardingIsDone = new EventEmitter<void>();

  onDone(): void {
    this.boardingIsDone.emit();
  }

  ngAfterViewInit(): void {
    document.body.style.overflow = 'hidden';
    if (this.slidesContainer) {
      this.slideOnMouseDrag();
    }
  }

  slideOnMouseDrag(): void {
    const slider = this.slidesContainer.nativeElement;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = (e as any).pageX - (slider as any).offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) {
        return;
      }
      e.preventDefault();
      const x = (e as any).pageX - (slider as any).offsetLeft;
      const walk = (x - startX) * 3; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'revert';
  }
}

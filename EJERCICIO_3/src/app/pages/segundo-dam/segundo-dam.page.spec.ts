import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundoDamPage } from './segundo-dam.page';

describe('SegundoDamPage', () => {
  let component: SegundoDamPage;
  let fixture: ComponentFixture<SegundoDamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundoDamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundoDamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

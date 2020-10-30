import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimeroDamPage } from './primero-dam.page';

describe('PrimeroDamPage', () => {
  let component: PrimeroDamPage;
  let fixture: ComponentFixture<PrimeroDamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeroDamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeroDamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';

describe('METHOD: getWelcomingMessage', () => {
  let actualValue;
  let expectedValue;
  let fakeUserName: string;
  let componentUnderTest: AppComponent;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [AppComponent],
    });

    componentUnderTest = TestBed.inject(AppComponent);
  });

  When(() => {
    actualValue = componentUnderTest.getWelcomingMessage(fakeUserName);
  });

  describe('user name is Bonnie', () => {
    Given(() => {
      componentUnderTest.year = '2020';
      fakeUserName = 'Bonnie';
    });
    Then(() => {
      expectedValue = 'Bonnie 2020';
      expect(actualValue).toEqual(expectedValue);
    });
  });

  describe('user name is Alyssa', () => {
    Given(() => {
      fakeUserName = 'Alyssa';
    });
    Then(() => {
      expectedValue = 'Alyssa 2021';
      expect(actualValue).toEqual(expectedValue);
    });
  });
});

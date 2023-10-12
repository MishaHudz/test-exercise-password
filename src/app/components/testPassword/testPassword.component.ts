import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { removeAddedClasses } from '../../helpers/removeAddedClasses';
import { addClassesForSomeElementsOfList } from 'src/app/helpers/addClassesForSomeElementsOfList';

@Component({
  selector: 'app-testPassword',
  templateUrl: './testPassword.component.html',
  styleUrls: ['./testPassword.component.css'],
})
export class TestPasswordComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  @ViewChildren('passwordSection') ItemsList!: QueryList<ElementRef>;
  passwordString = '';

  onPasswordChange(event: any) {
    const sectionItems = this.ItemsList.toArray().map((el) => el.nativeElement);
    this.passwordString = event.target.value;

    if (
      !/^[a-zA-Z0-9!@#$%^&*()_+{}|:;<>,.?~\-=/\[\]]*$/.test(this.passwordString)
    ) {
      this.passwordString = this.passwordString.slice(
        0,
        this.passwordString.length - 1
      );

      event.target.value = this.passwordString;
    }

    removeAddedClasses(sectionItems);

    if (this.passwordString.length < 8 && this.passwordString.length !== 0) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-easy', 3);
      return;
    }

    if (
      /^\d+$/.test(this.passwordString) ||
      /^[a-zA-Z]+$/.test(this.passwordString) ||
      /^[^a-zA-Z0-9]+$/.test(this.passwordString)
    ) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-easy', 1);
      return;
    }

    if (
      /^[^\d]+$/.test(this.passwordString) ||
      /^[a-zA-Z\d\s]+$/.test(this.passwordString) ||
      /^[^a-zA-Z]+$/.test(this.passwordString)
    ) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-medium', 2);
      return;
    }

    if (this.passwordString) {
      addClassesForSomeElementsOfList(sectionItems, 'password-is-strong', 3);
    }
  }

  onShowPasswordButtonMouseDown() {
    this.passwordInput.nativeElement.type = 'text';
  }

  onShowPasswordButtonMouseUp() {
    this.passwordInput.nativeElement.type = 'password';
  }
}

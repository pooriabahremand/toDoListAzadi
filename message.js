export class Message {
  messageAddMethod() {
    const answerAdd = prompt("Ok, now what do you want to add to the list?");
    let answerAddAccent;
    while (true) {
      answerAddAccent = prompt("Are you sure of your choice?\n 1-yes \n 2-no");

      if (Number(answerAddAccent) !== 1 && answerAddAccent !== 2) {
        alert("The entered number is meaningless , it must be 1 or 2");
      } else if (Number(answerAddAccent) === 2) {
        this.messageAddMethod();
      } else {
        break;
      }
    }

    return answerAdd;
  }

  messageRemoveMethod() {
    const answerRemove = prompt("Which task do you want to delete?");
    let answerRemoveAccent;
    while (true) {
      answerRemoveAccent = prompt(
        "Are you sure of your choice?\n 1-yes \n 2-no"
      );

      if (Number(answerRemoveAccent) !== 1 && answerRemoveAccent !== 2) {
        alert("The entered number is meaningless , it must be 1 or 2");
      } else if (Number(answerRemoveAccent) === 2) {
        this.messageRemoveMethod();
      } else {
        break;
      }
    }

    return answerRemove;
  }
}

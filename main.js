class Message {
  constructor() {
    this.save = new Activty();
  }

  messageAddMethod() {
    const answerAdd = prompt("Ok, now what do you want to add to the list?");

    console.log(answerAdd);

    const answerAddAccent = prompt(
      "Are you sure of your choice?\n 1-yes \n 2-no"
    );

    switch (Number(answerAddAccent)) {
      case 1:
        this.save.AddMethod;
        // console.log("Your task has been successfully saved");
        break;
      case 2:
        this.messageAddMethod();
      default:
        console.log("The entered number is meaningless");
        break;
    }

    return answerAdd;
  }

  messageRemoveMethod() {
    const answerRemove = prompt("Ok, which task do you want to delete?");
    console.log(answerRemove);

    const answerRemoveAccent = prompt(
      "Are you sure of your choice?\n 1-yes \n 2-no"
    );

    switch (Number(answerRemoveAccent)) {
      case 1:
        console.log("Your task was successfully deleted");
        break;
      case 2:
        this.messageRemoveMethod();
      default:
        console.log("The entered number is meaningless");
        break;
    }

    return answerRemove;
  }
}

class Activty {
  savePr = [];

  constructor() {
    this.holdPr = new Message();
  }

  AddMethod() {
    this.savePr.push(this.holdPr.messageAddMethod());
  }

  RemoveMethod() {
    this.savePr.filter((item) => item !== this.holdPr.messageRemoveMethod());
  }

  watchMethod() {
    console.log(this.savePr);
  }
}

class App {
  constructor() {
    this.message = new Message();
    this.activty = new Activty();
  }

  run() {
    const answer = prompt(
      "what do you want to do?? \n 1-add task \n 2-watch tasks \n 3-remove task"
    );

    switch (Number(answer)) {
      case 1:
        this.message.messageAddMethod();
        break;
      case 2:
        this.activty.watchMethod();
        // console.log("you are watching tasks , good for you ");
        break;
      case 3:
        this.message.messageRemoveMethod();
        break;
      default:
        console.log("please enter a number between 1 and 3");
        break;
    }

    this.run();
  }
}

new App().run();

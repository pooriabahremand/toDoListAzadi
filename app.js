import { Activty } from "./activity.js";
import { Message } from "./message.js";

class App {
  constructor() {
    this.message = new Message();
    this.activty = new Activty();
  }

  run() {
    const answer = prompt(
      "what do you want to do?? \n 1-add a task \n 2-watch tasks \n 3-remove a task"
    );

    switch (Number(answer)) {
      case 1:
        const taskToAdd = this.message.messageAddMethod();
        this.activty.AddMethod(taskToAdd);
        console.log("Done!");
        break;
      case 2:
        this.activty.watchMethod();
        console.log("Done!");
        break;
      case 3:
        alert(
          "please copy name of the task that you want to delete , task list will be shown in the console."
        );
        this.activty.watchMethod();
        const taskToRemove = this.message.messageRemoveMethod();
        this.activty.RemoveMethod(taskToRemove);
        console.log("Done!");
        break;
      default:
        console.log("please enter a number between 1 and 3");
        break;
    }

    this.restart();
  }

  restart() {
    this.run();
  }
}

const startBtn = document.querySelector("button");

startBtn.addEventListener("click", () => {
  new App().run();
});

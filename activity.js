export class Activty {
  savePr = [];

  AddMethod(task) {
    this.savePr.push(task);
  }

  RemoveMethod(taskToRemove) {
    this.savePr = this.savePr.filter((task) => task !== taskToRemove);
  }

  watchMethod() {
    console.log(this.savePr);
  }
}

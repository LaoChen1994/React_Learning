// import * as React from "react";
import { observable, action, computed } from "mobx";

interface IAppProps {
  employeesList: Array<Worker>;
}

export interface Worker {
  id: number;
  name: string;
  salary: number;
  isPaied: boolean;
}

class Store<IAppProps> {
  @observable exployeesList: Array<Worker> = [
    { id: 1, name: "John Doe", salary: 150, isPaied: false },
    { id: 2, name: "Richard Roe", salary: 225, isPaied: true }
  ];

  @computed get unpaiedCount() {
    return this.exployeesList.filter(elem => !elem.isPaied).length;
  }

  @action
  addWorker(worker: Worker) {
    this.exployeesList.push(worker);
  }

  @action
  execPay(id: number) {
    console.log(this.exployeesList);
    this.exployeesList.forEach((element, index) => {
      if (element.id === id) {
        this.exployeesList[index].isPaied = false;
      }
    });
  }
}

export default Store;

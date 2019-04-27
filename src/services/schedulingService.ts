import BaseTask from "../models/tasks/baseTask";
import StateService from "./stateService";
import Task from "../models/tasks/task";
import AddScreenplayToUserTask from "../models/tasks/addScreenplayToUserTask";
import Screenplay from "../models/screenplay";

class SchedulingService {
  stateService: StateService;

  constructor(stateService: StateService) {
    this.stateService = stateService;
  }

  scheduleTask(task: BaseTask, timePassed: number): Promise<null> {
    let fn = () => {};
    return new Promise((resolve, reject) => {
      if (task instanceof AddScreenplayToUserTask) {
        fn = () => { 
          this.stateService.addScreenplayToUser(task.screenplay, task.userId); 
          resolve();
        }
      }
      setTimeout(fn, timePassed)
    });
  }
}

export default SchedulingService;
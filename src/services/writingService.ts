import Time from "../models/time";
import Genre from "../models/genre";
import StateService from "./stateService";
import ScreenplayFactory from "../factories/screenplayFactory";
import SchedulingService from "./schedulingService";
import AddScreenplayToUserTask from "../models/tasks/addScreenplayToUserTask";
import Task from "../models/tasks/task";
import Screenplay from "../models/screenplay";

class WritingService {
  stateService: StateService;
  screenplayFactory: ScreenplayFactory;
  scheduler: SchedulingService;

  constructor(stateService: StateService, screenplayFactory: ScreenplayFactory, scheduler: SchedulingService){
    this.stateService = stateService;
    this.screenplayFactory = screenplayFactory;
    this.scheduler = scheduler;
  }

  writeScreenplay(writerId: string, time: Time, genre: Genre, userId: string): Promise<null> {
    const writer = this.stateService.getWriterById(writerId, userId);
    const screenplay = this.screenplayFactory.writeScreenplay(writer, time, genre);
    const task = new AddScreenplayToUserTask(screenplay, userId);
    
    return this.scheduler.scheduleTask(task, time.passed);
  }

  buyScreenplay(screenplay: Screenplay, userId: string) {
    this.stateService.addScreenplayToUser(screenplay, userId);
  }
}

export default WritingService;
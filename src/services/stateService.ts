import Writer from "../models/writer";
import Screenplay from "../models/screenplay";
import Actor from "../models/actor";
import Scene from "../models/scene";

class StateService {
    getWriterById(writerId: string, userId: string): Writer {
      return new Writer('', '', 0);
    };

    addScreenplayToUser(screenplay: Screenplay, userId: string) {

    };

    addActorsToUserPool(actors: Actor[], userId: string) {

    };

    updateSceneForUser(scene: Scene, userId: string) {

    };
}

export default StateService;
import { action, makeObservable, observable } from "mobx";
import { TPath } from "../types";

class PathsStore {
  paths: TPath[] = [
    {
      id: new Date().valueOf(),
      name: "My path",
      shortDescription: "This is my path",
      fullDescription: "This is the full description of my path",
      length: "100km",
      favorite: true
    }
  ];

  constructor() {
    makeObservable(this, {
      paths: observable,
      addPath: action,
      removePath: action,
      toggleFavorite: action
    });
  }

  addPath(path: TPath) {
    const new_path = {
      id: new Date().valueOf(),
      name: "My path",
      shortDescription: "This is my path",
      fullDescription: "This is the full description of my path",
      length: "10 km",
      favorite: true
    };
    this.paths.push(new_path);
  }

  removePath = (id: number) => {
    this.paths = this.paths.filter((path) => path.id !== id);
  };

  toggleFavorite = (id: number) => {
    const index = this.paths.findIndex((path) => path.id === id);
    if (index !== -1) {
      this.paths[index].favorite = !this.paths[index].favorite;
    }
  };

  getPaths(): TPath[] {
    return this.paths;
  }
}

const pathsStore = new PathsStore();
export default pathsStore;

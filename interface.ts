//console.log("hello typescript!");
//console.log("nalimot na ko mag ts!!!");
interface Directory {
  addFile: (name: string) => void;
}
class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile("lesson-notes.txt");
Desktop.showPreview("lesson-notes.txt");

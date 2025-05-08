//console.log("hello typescript!");
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

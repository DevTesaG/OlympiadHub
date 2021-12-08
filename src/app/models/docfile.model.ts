export class Docfile {
  id!: string;
  title!: string;
  authors!: string;
  subject!: string;
  url!: string;
  loadfile: File;

  constructor(file: File) {
    this.loadfile = file;
  }
}

export class Tag {

    // static readonly ANGULAR = new Tag('Angular','#ffc107'); 
    // static readonly TYPESCRIPT = new Tag('Typescript','#fd7e14'); 
    // static readonly JAVASCRIPT = new Tag('Javascript','#d63384'); 
    // static readonly JAVA = new Tag('Java','#dc3545'); 
    // static readonly EXPRESS = new Tag('Express','#000');
    // static readonly HTML = new Tag('HTML','#0dcaf0'); 
    // static readonly CSS = new Tag('CSS','#198754'); 
    // static readonly SPRING = new Tag('Spring-boot','#20c997');

  // Frontend (verde cqua)
  static readonly HTML        = new Tag('HTML',        '#20c997');
  static readonly CSS         = new Tag('CSS',         '#20c997');
  static readonly ANGULAR     = new Tag('Angular',     '#20c997');

  // Backend Java (arancione)
  static readonly JAVA        = new Tag('Java',        '#fd7e14');
  static readonly SPRING      = new Tag('Spring-Boot', '#fd7e14');

  // JS / Fullstack (rosa scuro)
  static readonly TYPESCRIPT  = new Tag('Typescript',  '#d63384');
  static readonly JAVASCRIPT  = new Tag('Javascript',  '#d63384');
  static readonly EXPRESS     = new Tag('Express',     '#d63384');


    private constructor(private readonly key: string, public readonly color: string) {
    }
    toString() {
        return this.key;
    }


}
import { Language, ProgrammingLanguage, Theme } from '../types';

export const LANGUAGE: { [key in Language]: { value: Language, label: string } } = {
  [Language.EN]: { value: Language.EN, label: 'english' },
  [Language.ES]: { value: Language.ES, label: 'español' },
};

export const THEME: { [key in Theme]: { value: Theme, label: string } } = {
  [Theme.LIGHT]: { value: Theme.LIGHT, label: 'light' },
  [Theme.DARK]: { value: Theme.DARK, label: 'dark' },
};

// Languages to monaco https://monaco-react.surenatoyan.com/
export type ProgrammingLanguageMeta = {
  value: ProgrammingLanguage,
  label: string,
  mime: string,
  fileExtension: Array<string>,
  monacoKey: string,
  codeMirrorKey: string,
  compilePattern: string,
  runPattern: string,
  templateSourceCode: string,
  hasBuildFile: boolean,
};

export const PROGRAMMING_LANGUAGE: { [key in ProgrammingLanguage]: ProgrammingLanguageMeta } = {
  [ProgrammingLanguage.ICPC_C]: {
    value: ProgrammingLanguage.C,
    label: 'ICPC C',
    mime: 'text/x-csrc',
    fileExtension: [ 'c' ],
    monacoKey: 'c',
    codeMirrorKey: 'c',
    compilePattern: 'gcc -x c -g -O2 -std=gnu11 -static -lm -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: '#include <stdio.h>\n \nint main(void) {\n \n  printf("Hello World\\n");\n \n  return 0;\n}',
    hasBuildFile: true,
  },
  [ProgrammingLanguage.C]: {
    value: ProgrammingLanguage.C,
    label: 'C',
    mime: 'text/x-csrc',
    fileExtension: [ 'c' ],
    monacoKey: 'c',
    codeMirrorKey: 'c',
    compilePattern: 'gcc -static -fno-optimize-sibling-calls -fno-strict-aliasing -DONLINE_JUDGE -fno-asm -lm -s -O2 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: '#include <stdio.h>\n \nint main(void) {\n \n  printf("Hello World\\n");\n \n  return 0;\n}',
    hasBuildFile: true,
  },
  [ProgrammingLanguage.ICPC_CPP]: {
    value: ProgrammingLanguage.ICPC_CPP,
    label: 'ICPC C++',
    mime: 'text/x-c++src',
    fileExtension: [ 'cpp', 'c++', 'cxx', 'cc' ],
    monacoKey: 'cpp',
    codeMirrorKey: 'cpp',
    compilePattern: 'g++ -x c++ -g -O2 -std=gnu++20 -static -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: '#include <iostream>\n\nusing namespace std;\n\n' +
      'int main() {\n  \n  cout << "Hello World" << endl;\n  \n  return 0;\n}',
    hasBuildFile: true,
  },
  [ProgrammingLanguage.CPP]: {
    value: ProgrammingLanguage.CPP,
    label: 'C++',
    mime: 'text/x-c++src',
    fileExtension: [ 'cpp', 'c++', 'cxx', 'cc' ],
    monacoKey: 'cpp',
    codeMirrorKey: 'cpp',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: '#include <iostream>\n\nusing namespace std;\n\n' +
      'int main() {\n  \n  cout << "Hello World" << endl;\n  \n  return 0;\n}',
    hasBuildFile: true,
  },
  [ProgrammingLanguage.CPP11]: {
    value: ProgrammingLanguage.CPP11,
    label: 'C++ 11',
    mime: 'text/x-c++src',
    fileExtension: [ 'cpp', 'c++', 'cxx', 'cc' ],
    monacoKey: 'cpp',
    codeMirrorKey: 'cpp',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -std=c++11 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    // compilePattern: 'g++ -O2 -s -Wall -std=c++11 -o {{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}} -lm',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: '#include <iostream>\n\nusing namespace std;\n\n' +
      'int main() {\n  \n  cout << "Hello World" << endl;\n  \n  return 0;\n}',
    hasBuildFile: true,
  },
  [ProgrammingLanguage.CPP14]: {
    value: ProgrammingLanguage.CPP14,
    label: 'C++ 14',
    mime: 'text/x-c++src',
    fileExtension: [ 'cpp', 'c++', 'cxx', 'cc' ],
    monacoKey: 'cpp',
    codeMirrorKey: 'cpp',
    // compilePattern: 'g++ -O2 -s -Wall -std=c++14 -o {{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}} -lm',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -std=c++14 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: '#include <iostream>\n\nusing namespace std;\n\n' +
      'int main() {\n  \n  cout << "Hello World" << endl;\n  \n  return 0;\n}',
    
    hasBuildFile: true,
  },
  [ProgrammingLanguage.CPP17]: {
    value: ProgrammingLanguage.CPP17,
    label: 'C++ 17',
    mime: 'text/x-c++src',
    fileExtension: [ 'cpp', 'c++', 'cxx', 'cc' ],
    monacoKey: 'cpp',
    codeMirrorKey: 'cpp',
    // compilePattern: 'g++ -O2 -s -Wall -std=c++17 -o {{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}} -lm',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -std=c++17 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: '#include <iostream>\n\nusing namespace std;\n\n' +
      'int main() {\n  \n  cout << "Hello World" << endl;\n  \n  return 0;\n}',
    hasBuildFile: true,
  },
  [ProgrammingLanguage.JAVA]: {
    value: ProgrammingLanguage.JAVA,
    label: 'Java',
    mime: 'text/x-java',
    fileExtension: [ 'java' ],
    monacoKey: 'java',
    codeMirrorKey: 'java',
    compilePattern: 'javac -cp \'.;*\' {{folder_path}}/{{source_file_name}}',
    // compilePattern: 'javac {{folder_path}}/{{source_file_name}}',
    // runPattern: 'java -cp {{folder_path}} {{class_name}}'
    runPattern: 'java -Xmx512M -Xss64M -DONLINE_JUDGE=true -Duser.language=en -Duser.region=US -Duser.variant=US -cp ' +
      '{{folder_path}} {{class_name}}',
    templateSourceCode: 'class Main {\n  public static void main (String[] args) {' +
      '\n    \n    System.out.println("Hello World");\n    \n  }\n}',
    hasBuildFile: true,
  },
  [ProgrammingLanguage.ICPC_PYTHON]: {
    value: ProgrammingLanguage.ICPC_PYTHON,
    label: 'ICPC Python',
    mime: 'text/x-python',
    fileExtension: [ 'py' ],
    monacoKey: 'python',
    codeMirrorKey: 'python',
    compilePattern: 'pypy3 -m py_compile {{folder_path}}/{{source_file_name}}',
    runPattern: 'python {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'print("Hello World\\n")',
    hasBuildFile: false,
  },
  [ProgrammingLanguage.PYTHON]: {
    value: ProgrammingLanguage.PYTHON,
    label: 'Python',
    mime: 'text/x-python',
    fileExtension: [ 'py' ],
    monacoKey: 'python',
    codeMirrorKey: 'python',
    compilePattern: 'python -m py_compile {{folder_path}}/{{source_file_name}}',
    runPattern: 'python {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'print("Hello World\\n")',
    hasBuildFile: false,
  },
  [ProgrammingLanguage.PYTHON3]: {
    value: ProgrammingLanguage.PYTHON3,
    label: 'Python 3',
    mime: 'text/x-python',
    fileExtension: [ 'py' ],
    monacoKey: 'python',
    codeMirrorKey: 'python',
    compilePattern: 'python3 -m py_compile {{folder_path}}/{{source_file_name}}',
    runPattern: 'python3 {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'print("Hello World\\n")',
    hasBuildFile: false,
  },
  [ProgrammingLanguage.JAVASCRIPT]: {
    value: ProgrammingLanguage.JAVASCRIPT,
    label: 'Node.JS',
    mime: 'application/x-javascript',
    fileExtension: [ 'js' ],
    monacoKey: 'javascript',
    codeMirrorKey: 'javascript',
    compilePattern: '',
    runPattern: 'node {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'console.log("Hello World\\n")',
    hasBuildFile: false,
  },
  [ProgrammingLanguage.JSON]: {
    value: ProgrammingLanguage.JSON,
    label: 'JSON',
    mime: 'application/json',
    fileExtension: [ 'json' ],
    monacoKey: 'json',
    codeMirrorKey: 'javascript',
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '{\n  \n}',
    hasBuildFile: false,
  },
  [ProgrammingLanguage.TEXT]: {
    value: ProgrammingLanguage.TEXT,
    label: 'plain text',
    mime: 'text/plain',
    fileExtension: [ 'txt', 'text' ],
    monacoKey: 'text',
    codeMirrorKey: 'text',
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '',
    hasBuildFile: false,
  }, // asc txt text diff pot
  [ProgrammingLanguage.MARKDOWN]: {
    value: ProgrammingLanguage.MARKDOWN,
    label: 'Markdown',
    mime: 'text/plain',
    fileExtension: [ 'md' ],
    monacoKey: 'markdown',
    codeMirrorKey: 'markdown',
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '# Hello World\n',
    hasBuildFile: false,
  },
  [ProgrammingLanguage.ARDUINO]: {
    value: ProgrammingLanguage.ARDUINO,
    label: 'Arduino',
    mime: 'text/plain',
    fileExtension: [ 'c', 'cpp', 'pde', 'h', 'ino' ],
    monacoKey: 'c',
    codeMirrorKey: 'c',
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '',
    hasBuildFile: false,
  },
  [ProgrammingLanguage.HTML]: {
    value: ProgrammingLanguage.HTML,
    label: 'HTML',
    mime: 'text/HTML',
    fileExtension: [ 'html' ],
    monacoKey: 'html',
    codeMirrorKey: 'html',
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '',
    hasBuildFile: false,
  },
};

export const PAGE_SIZES = [ '32', '64', '128', '256', '512' ];

export const PALLETE = {
  VIVOS: [
    { color: '#FF0000', title: 'Rojo' },
    { color: '#FF5900', title: 'Rojo - Naranja' },
    { color: '#FF8600', title: 'Naranja' },
    { color: '#FFBF00', title: 'Ámbar' },
    { color: '#FFFF00', title: 'Amarillo' },
    { color: '#A6FF00', title: 'Lima o Verde limon' },
    { color: '#00FF8C', title: 'Verde puro' },
    { color: '#00FF8C', title: 'Verde cian' },
    { color: '#00FFFF', title: 'Cian' },
    { color: '#0099FF', title: 'Cerúleo o Azur' },
    { color: '#0000FF', title: 'Azul' },
    { color: '#9F00FF', title: 'Violeta' },
    { color: '#FF00FF', title: 'Magenta' },
    { color: '#FF0099', title: 'Fucsia' },
  ],
  OSCUROS: [
    { color: '#880000', title: 'Granate' },
    { color: '#882F00', title: 'Caoba o Rojo indio' },
    { color: '#884700', title: 'Marrón o Pardo' },
    { color: '#886600', title: 'Marrón dorado' },
    { color: '#888800', title: 'Oliva' },
    { color: '#588800', title: 'Verde palta' },
    { color: '#008800', title: 'Verde estándar' },
    { color: '#008858', title: 'Esmeralda' },
    { color: '#008888', title: 'Cerceta o Azul verde' },
    { color: '#005288', title: 'Añil' },
    { color: '#000080', title: 'Azul marino' },
    { color: '#880088', title: 'Azul púrpura' },
    { color: '#880088', title: 'Púrpura o Morado' },
    { color: '#880047', title: 'Vino' },
  ],
  AGRISADOS: [
    { color: '#BF4040', title: 'Lacre' },
    { color: '#BF6340', title: 'Cobre' },
    { color: '#BF8340', title: 'Cnalea o Ocre' },
    { color: '#BF9F40', title: 'Dorado' },
    { color: '#BFBF40', title: 'Chartreuse' },
    { color: '#93BF40', title: 'Verde manzana' },
    { color: '#93BF40', title: 'Verde bosque' },
    { color: '#40BF40', title: 'Verde mar' },
    { color: '#40BFBF', title: 'Turquesa' },
    { color: '#408CBF', title: 'Azul acero' },
    { color: '#4040BF', title: 'Zafiro' },
    { color: '#9340BF', title: 'Amastista' },
    { color: '#B140BF', title: 'Púrpureo' },
    { color: '#B140BF', title: 'Fandango' },
  ],
  CLAROS: [
    { color: '#FF7777', title: 'Coral' },
    { color: '#FF9977', title: 'Salmón' },
    { color: '#FFB977', title: 'Melón o Durazno' },
    { color: '#FFDA80', title: 'Crema' },
    { color: '#FFFF88', title: 'Maíz' },
    { color: '#CFFF77', title: 'Té verde' },
    { color: '#77FF77', title: 'Verde claro' },
    { color: '#77FFAA', title: 'Menta' },
    { color: '#80FFFF', title: 'Aguamarina' },
    { color: '#73C7FF', title: 'Celeste' },
    { color: '#8082FF', title: 'Bígaro o aciano' },
    { color: '#C977FF', title: 'Lavanda o lila' },
    { color: '#FF77FF', title: 'Malva' },
    { color: '#FF77C1', title: 'Rosado' },
  ],
};

export const UPPERCASE_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const LOWERCASE_LETTERS = UPPERCASE_LETTERS.toLowerCase();
export const NUMBERS = '012345678';
export const SEC_30 = 1000 * 30;
export const SEC_60 = 1000 * 60;
export const SEC_90 = 1000 * 90;
export const SEC_120 = 1000 * 120;

export const DEFAULT_JUKI_PROFILE_IMAGE = 'https://juki-judge.s3.us-east-2.amazonaws.com/public/file/5f69783aa7a8e048ef8d0ce2.';

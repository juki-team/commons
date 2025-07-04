import { CodeLanguage, Language, Theme } from '../types';

export const LANGUAGE: { [key in Language]: { value: Language, label: string } } = {
  [Language.EN]: { value: Language.EN, label: 'english' },
  [Language.ES]: { value: Language.ES, label: 'español' },
};

export const THEME: { [key in Theme]: { value: Theme, label: string } } = {
  [Theme.LIGHT]: { value: Theme.LIGHT, label: 'light' },
  [Theme.DARK]: { value: Theme.DARK, label: 'dark' },
};

// Languages to monaco https://monaco-react.surenatoyan.com/
export type CodeLanguageMeta = {
  value: CodeLanguage,
  label: string,
  mime: string,
  fileExtension: Array<string>,
  compilePattern: string,
  runPattern: string,
  templateSourceCode: string,
  hasBuildFile: boolean,
  executable: string,
  executableVersion: string,
  monacoKey: string,
  codeMirrorKey: string,
  highlightJsKey: string,
};

const GCC_VERSION = `gcc (Debian 12.2.0-14+deb12u1) 12.2.0
Copyright (C) 2022 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.`;

const GPP_VERSION = `g++ (Debian 12.2.0-14+deb12u1) 12.2.0
Copyright (C) 2022 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.`;

const JAVAC_VERSION = `javac 17.0.15`;

const NODE_VERSION = `v20.19.2`;

const PYTHON3_VERSION = 'Python 3.11.2';

const PYPY3_VERSION = `Python 3.9.16 (7.3.11+dfsg-2+deb12u3, Dec 30 2024, 22:36:23)
[PyPy 7.3.11 with GCC 12.2.0]`;

const PSEINT_VERSION = `PSeInt 20230904-l64-wx3
http://pseint.sourceforge.net
by Pablo Novara (zaskar_84@yahoo.com.ar)
psExport 20230904-l64-wx3
http://pseint.sourceforge.net
by Pablo Novara (zaskar_84@yahoo.com.ar)`;

const C = {
  mime: 'text/x-csrc',
  fileExtension: [ 'c' ],
  hasBuildFile: true,
  executable: 'gcc',
  executableVersion: GCC_VERSION,
  templateSourceCode: '#include <stdio.h>\n \nint main(void) {\n \n  printf("Hello World\\n");\n \n  return 0;\n}',
  monacoKey: 'c',
  codeMirrorKey: 'c',
  highlightJsKey: 'c',
};

const CPP = {
  mime: 'text/x-c++src',
  fileExtension: [ 'cpp', 'c++', 'cxx', 'cc' ],
  hasBuildFile: true,
  executable: 'g++',
  executableVersion: GPP_VERSION,
  templateSourceCode: '#include <iostream>\n\nusing namespace std;\n\n' +
    'int main() {\n  \n  cout << "Hello World" << endl;\n  \n  return 0;\n}',
  monacoKey: 'cpp',
  codeMirrorKey: 'cpp',
  highlightJsKey: 'cpp',
};

export const CODE_LANGUAGE: { [key in CodeLanguage]: CodeLanguageMeta } = {
  [CodeLanguage.ICPC_C]: {
    value: CodeLanguage.ICPC_C,
    label: 'ICPC C',
    compilePattern: 'gcc -x c -g -O2 -std=gnu11 -static -lm -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    ...C,
  },
  [CodeLanguage.C]: {
    value: CodeLanguage.C,
    label: 'C',
    compilePattern: 'gcc -static -fno-optimize-sibling-calls -fno-strict-aliasing -DONLINE_JUDGE -fno-asm -lm -s -O2 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    ...C,
  },
  [CodeLanguage.ICPC_CPP]: {
    value: CodeLanguage.ICPC_CPP,
    label: 'ICPC C++',
    compilePattern: 'g++ -x c++ -g -O2 -std=gnu++20 -static -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    ...CPP,
  },
  [CodeLanguage.CPP]: {
    value: CodeLanguage.CPP,
    label: 'C++',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    ...CPP,
  },
  [CodeLanguage.CPP11]: {
    value: CodeLanguage.CPP11,
    label: 'C++ 11',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -std=c++11 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    // compilePattern: 'g++ -O2 -s -Wall -std=c++11 -o {{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}} -lm',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    ...CPP,
  },
  [CodeLanguage.CPP14]: {
    value: CodeLanguage.CPP14,
    label: 'C++ 14',
    // compilePattern: 'g++ -O2 -s -Wall -std=c++14 -o {{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}} -lm',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -std=c++14 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    ...CPP,
  },
  [CodeLanguage.CPP17]: {
    value: CodeLanguage.CPP17,
    label: 'C++ 17',
    // compilePattern: 'g++ -O2 -s -Wall -std=c++17 -o {{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}} -lm',
    compilePattern: 'g++ -static -DONLINE_JUDGE -lm -s -x c++ -O2 -std=c++17 -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    ...CPP,
  },
  [CodeLanguage.JAVA]: {
    value: CodeLanguage.JAVA,
    label: 'Java',
    mime: 'text/x-java',
    fileExtension: [ 'java' ],
    compilePattern: 'javac -cp \'.;*\' {{folder_path}}/{{source_file_name}}',
    // compilePattern: 'javac {{folder_path}}/{{source_file_name}}',
    // runPattern: 'java -cp {{folder_path}} {{class_name}}'
    runPattern: '/usr/lib/jvm/java-17-openjdk-amd64/bin/java -Xmx512M -Xss64M -DONLINE_JUDGE=true -Duser.language=en -Duser.region=US -Duser.variant=US -cp ' +
      '{{folder_path}} {{class_name}}',
    templateSourceCode: 'class Main {\n  public static void main (String[] args) {' +
      '\n    \n    System.out.println("Hello World");\n    \n  }\n}',
    hasBuildFile: true,
    executable: 'javac',
    executableVersion: JAVAC_VERSION,
    monacoKey: 'java',
    codeMirrorKey: 'java',
    highlightJsKey: 'java',
  },
  [CodeLanguage.ICPC_PYTHON]: {
    value: CodeLanguage.ICPC_PYTHON,
    label: 'ICPC Python',
    mime: 'text/x-python',
    fileExtension: [ 'py' ],
    compilePattern: 'pypy3 -m py_compile {{folder_path}}/{{source_file_name}}',
    runPattern: '/usr/bin/pypy3 {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'print("Hello World\\n")',
    hasBuildFile: false,
    executable: 'pypy3',
    executableVersion: PYPY3_VERSION,
    monacoKey: 'python',
    codeMirrorKey: 'python',
    highlightJsKey: 'python',
  },
  [CodeLanguage.PYTHON2]: {
    value: CodeLanguage.PYTHON2,
    label: 'Python 2',
    mime: 'text/x-python',
    fileExtension: [ 'py' ],
    compilePattern: 'python2 -m py_compile {{folder_path}}/{{source_file_name}}',
    runPattern: '/usr/bin/python2 {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'print("Hello World\\n")',
    hasBuildFile: false,
    executable: 'python',
    executableVersion: 'Python 2.7.18',
    monacoKey: 'python',
    codeMirrorKey: 'python',
    highlightJsKey: 'python',
  },
  [CodeLanguage.PYTHON3]: {
    value: CodeLanguage.PYTHON3,
    label: 'Python 3',
    mime: 'text/x-python',
    fileExtension: [ 'py' ],
    compilePattern: 'python3 -m py_compile {{folder_path}}/{{source_file_name}}',
    runPattern: '/usr/bin/python3 {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'print("Hello World\\n")',
    hasBuildFile: false,
    executable: 'python3',
    executableVersion: PYTHON3_VERSION,
    monacoKey: 'python',
    codeMirrorKey: 'python',
    highlightJsKey: 'python',
  },
  [CodeLanguage.JAVASCRIPT]: {
    value: CodeLanguage.JAVASCRIPT,
    label: 'Javascript',
    mime: 'application/x-javascript',
    fileExtension: [ 'js' ],
    compilePattern: '',
    runPattern: '/usr/bin/node {{folder_path}}/{{source_file_name}}',
    templateSourceCode: 'console.log("Hello World\\n")',
    hasBuildFile: false,
    executable: 'node',
    executableVersion: NODE_VERSION,
    monacoKey: 'javascript',
    codeMirrorKey: 'javascript',
    highlightJsKey: 'javascript',
  },
  [CodeLanguage.PSEUDOCODE_PSEINT]: {
    value: CodeLanguage.PSEUDOCODE_PSEINT,
    label: 'Pseudo-código (PSeInt)',
    mime: 'text/plain',
    fileExtension: [ 'psc' ],
    compilePattern: 'jk-pseint {{folder_path}}/{{source_file_name}} --norun --nouser'
      + ' && jk-pseint {{folder_path}}/{{source_file_name}} --draw {{folder_path}}/{{source_file_name}}.psd'
      + ' && jk-psexport {{folder_path}}/{{source_file_name}}.psd {{folder_path}}/{{source_file_name}}.cpp --lang=cpp'
      + ' && g++ -x c++ -g -O2 -std=gnu++20 -static -o ' +
      '{{folder_path}}/{{compiled_file_name}} {{folder_path}}/{{source_file_name}}.cpp',
    runPattern: '{{folder_path}}/{{compiled_file_name}}',
    templateSourceCode: 'Algoritmo HOLA_MUNDO\n\tImprimir "Hello World"\nFinAlgoritmo\n',
    hasBuildFile: false,
    executable: '',
    executableVersion: PSEINT_VERSION,
    monacoKey: 'text',
    codeMirrorKey: 'pseudocode-pseint',
    highlightJsKey: 'plaintext',
  },
  [CodeLanguage.DOT]: {
    value: CodeLanguage.DOT,
    label: 'DOT',
    mime: 'text/plain',
    fileExtension: [ 'dot' ],
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '',
    hasBuildFile: false,
    executable: '',
    executableVersion: '',
    monacoKey: 'dot',
    codeMirrorKey: 'dot',
    highlightJsKey: 'plaintext',
  },
  [CodeLanguage.JSON]: {
    value: CodeLanguage.JSON,
    label: 'JSON',
    mime: 'application/json',
    fileExtension: [ 'json' ],
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '{\n  \n}',
    hasBuildFile: false,
    executable: '',
    executableVersion: '',
    monacoKey: 'json',
    codeMirrorKey: 'javascript',
    highlightJsKey: 'json',
  },
  [CodeLanguage.TEXT]: {
    value: CodeLanguage.TEXT,
    label: 'plain text',
    mime: 'text/plain',
    fileExtension: [ 'txt', 'text', 'in', 'out' ],
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '',
    hasBuildFile: false,
    executable: '',
    executableVersion: '',
    monacoKey: 'text',
    codeMirrorKey: 'text',
    highlightJsKey: 'plaintext',
  }, // asc txt text diff pot
  [CodeLanguage.MARKDOWN]: {
    value: CodeLanguage.MARKDOWN,
    label: 'Markdown',
    mime: 'text/plain',
    fileExtension: [ 'md' ],
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '# Hello World\n',
    hasBuildFile: false,
    executable: '',
    executableVersion: '',
    monacoKey: 'markdown',
    codeMirrorKey: 'markdown',
    highlightJsKey: 'markdown',
  },
  [CodeLanguage.ARDUINO]: {
    value: CodeLanguage.ARDUINO,
    label: 'Arduino',
    mime: 'text/plain',
    fileExtension: [ 'c', 'cpp', 'pde', 'h', 'ino' ],
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '',
    hasBuildFile: false,
    executable: '',
    executableVersion: '',
    monacoKey: 'c',
    codeMirrorKey: 'c',
    highlightJsKey: 'c',
  },
  [CodeLanguage.HTML]: {
    value: CodeLanguage.HTML,
    label: 'HTML',
    mime: 'text/HTML',
    fileExtension: [ 'html' ],
    compilePattern: '',
    runPattern: '',
    templateSourceCode: '',
    hasBuildFile: false,
    executable: '',
    executableVersion: '',
    monacoKey: 'html',
    codeMirrorKey: 'html',
    highlightJsKey: 'xml',
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

export const DEFAULT_JUKI_PROFILE_IMAGE = 'https://juki-judge.s3.us-east-2.amazonaws.com/public/file/5f69783aa7a8e048ef8d0ce2.';

export const SEPARATOR_TOKEN = '\x1E';

export const JUKI_FORWARDED_HOST = 'x-juki-forwarded-host';
export const JUKI_SESSION_ID = 'x-juki-session-id';
export const JUKI_METADATA = 'x-juki-metadata';

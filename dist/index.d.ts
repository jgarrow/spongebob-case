declare module '@jgarrow/spongebob-case/index' {
  export function toSpongebobCase(str: string): string;

}
declare module '@jgarrow/spongebob-case' {
  import main = require('@jgarrow/spongebob-case/src/index');
  export = main;
}
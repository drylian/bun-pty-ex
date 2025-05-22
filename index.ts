import { spawn } from "bun-pty";
import path from "path";


// execute
const pty = spawn("bun", ["prompt.ts"], {
  name: "xterm-256color",
  cols: 80,
  rows: 24
})

pty.onData(a => process.stdout.write(a.toString()));
pty.onExit(a => console.log(a));
/**
 * await raised to ensure that the console
 * will be at the perfect moment of interaction 
 */
await Bun.sleep(1000)
// Response with hello world 
pty.write("Hellow World");
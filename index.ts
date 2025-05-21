import { spawn } from "bun-pty";
import path from "path";

const pty = spawn("TerrariaServer.bin.x86_64", [], {
  name: "xterm-256color",
  cwd: path.join(import.meta.dirname, "./Linux"),
  cols: 80,
  rows: 24
})

pty.onData(a => process.stdout.write(a.toString()));
pty.onExit(a => console.log(a));
/**
 * await raised to ensure that the console
 * will be at the perfect moment of interaction 
 */
await Bun.sleep(8000) 
pty.write("\r\nn");
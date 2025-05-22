import { spawn } from "bun-pty";
import path from "path";

// Game for all platform
const linux_app = ["Linux", "TerrariaServer.bin.x86_64"];
const windows_app = ["Windows", "TerrariaServer.exe"];
const mac_app = ["Mac/Terraria Server.app/Contents/MacOS", "TerrariaServer"];

const plt = process.platform;
// select current platform
const executable = plt == "win32"
  ? windows_app
  : plt == "darwin"
    ? mac_app
    : linux_app;

// execute
const pty = spawn(executable[1]!, [], {
  name: "xterm-256color",
  cwd: path.join(import.meta.dirname, "System", executable[0]!,),
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
// new world action 
pty.write("n");
export function randomColour(): p5.Color {
  const palette = ["#5e9fa3", "#dcd1b4", "#fab87f", "#f87e7b", "#b05574"];
  return color(random(palette));
}

// Convert hex color to RGB
function hexToRgb(hex: string): [number, number, number, number] {
  if (hex.length === 4) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  }

  hex = hex.replace(/^#/, '')
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b, 1] // Assuming full opacity for hex
}

// Convert rgba string to RGB array
function rgbaToRgb(rgba: string): [number, number, number, number] | null {
  const values = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d*\.?\d+)?\)/)
  if (!values) return null

  return [
    parseInt(values[1], 10), // r
    parseInt(values[2], 10), // g
    parseInt(values[3], 10), // b
    values[4] ? parseFloat(values[4]) : 1, // opacity (defaults to 1 if not provided)
  ]
}

// Calculate luminance for RGB
function luminance([r, g, b]: [number, number, number, number]): number {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

// Determine if a color is dark based on luminance
export function isDarkColor(color: string): boolean {
  let rgb: [number, number, number, number] | null

  if (color.startsWith('rgba') || color.startsWith('rgb')) {
    rgb = rgbaToRgb(color)
  } else {
    rgb = hexToRgb(color)
  }

  if (!rgb) return false

  const lum = luminance(rgb)
  return lum < 0.85 // Return true if the luminance is low (dark color)
}

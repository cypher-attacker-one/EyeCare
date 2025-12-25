# Focus Filter

A Windows spotlight overlay that helps you focus by dimming everything except the area around your mouse cursor.

## Features

- **Smooth Spotlight**: Clear circular area follows your mouse with smooth gradient fade
- **Adjustable Size**: Ctrl+Alt+Up/Down to change spotlight size
- **Reading Mode**: Keep spotlight on until manually disabled
- **Break Reminders**: 20-20-20 rule eye break reminders
- **System Tray**: Runs quietly in system tray
- **Privacy Safe**: No screenshots, no keylogging, no data collection

## Hotkeys

| Hotkey | Action |
|--------|--------|
| `Ctrl+Alt+F` | Toggle spotlight on/off |
| `Ctrl+Alt+R` | Toggle reading mode |
| `Ctrl+Alt+Up` | Increase spotlight size |
| `Ctrl+Alt+Down` | Decrease spotlight size |

## Installation

### Option 1: Run Installer
Download and run `FocusFilter_Setup_1.0.0.exe`

### Option 2: Run from Source
```bash
# Create virtual environment
python -m venv venv
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run
python main.py
```

## Building

### Build Executable
```bash
build.bat
```
Output: `dist\FocusFilter\FocusFilter.exe`

### Build Installer
1. Install [Inno Setup 6](https://jrsoftware.org/isdl.php)
2. Run `build_installer.bat`

Output: `installer_output\FocusFilter_Setup_1.0.0.exe`

## Settings

Settings are stored in `%APPDATA%\FocusFilter\settings.json`

- `spotlight_radius`: Size of clear area (default: 500)
- `feather_radius`: Size of gradient fade (default: 300)
- `dim_opacity`: Darkness of overlay 0-1 (default: 0.5)

## Requirements

- Windows 10/11
- Python 3.11+ (for development)

## License

MIT License

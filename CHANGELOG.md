# Change Log
All notable changes to the "AutoIt Tools" extension will be documented in this file.

## [0.0.3] - 2024-10-08

### Added

- Support for configuring multiple UDFs in settings.json to open custom CHM files based on the UDF prefix.
- Dynamic loading of UDF paths to handle configuration changes without restarting the extension.

### Changed

- Switched to start for Windows processes to ensure they run asynchronously and do not block further execution.


## [0.0.2] - 2024-10-08

### Added

- Extension setting that allow user to change his AutoIt3Help.exe file path.
- MacOS default shortcut is configured to Cmd+F1.
- New logo without background.

### Fixed

- Missing parameters in Manifest
- Extension name was wrong in VS Code Shortcuts settings. Now, you can search for "autoit-tools" to find the shortcut.

### Changed

- Typo in README.md (sorry Anders...)

### Removed

- Logo with background.

## [0.0.1] - 2024-10-04

### Added

- CTRL+F1 opens the AutoIt3Help.exe located at "C:\Program Files (x86)\AutoIt3".
- Moving cursor on a function and pressing CTRL+F1 gives the function as parameter, so AutoIt3Help.exe gets the function name as a parameter.

### Fixed

### Changed

### Removed


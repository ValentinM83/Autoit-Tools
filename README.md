# AutoIt-Tools README
Simplifying AutoIt3 development in Visual Studio Code. This extension is designed to be compatible with Anders Pedersen's extension.
    
## Features

Ctrl+F1 will open AutoIt Doc by default. If the cursor is on text, the string will be researched.

This extension also lets you insert UDFs .chm files and their prefix. If you do so, pressing the shortcut will open the .chm help file on the function page.
(Currently only tested with WebDriver, please let me know if you encounter any issue with another UDF)

For example, AutoIt Tools opens au3WebDriver.chm if I open help on _WD_Alert() with this setting in settings.json :

    "autoit-tools.udfPaths": [
        {
            "prefix": "_WD_",
            "path": "C:\\path\\to\\chm\\au3WebDriver.chm"
        },
    ],



## Requirements
Tested with :
    - [AutoIt](https://marketplace.visualstudio.com/items?itemName=genius257.autoit) [1.6.0] - 2024-07-31
    - [AutoIt Debug](https://marketplace.visualstudio.com/items?itemName=genius257.autoit3-debug) [1.2.1] - 2024-10-01

## Extension Settings
    - AutoIt3Help.exe path (Default : C:\Program Files (x86)\AutoIt3\AutoIt3Help.exe)
    - Udf Paths : Set a list of UDF .chm files with Function prefix

## Release Notes
See CHANGELOG.md
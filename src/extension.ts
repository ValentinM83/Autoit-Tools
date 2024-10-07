import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.openAutoIt3Help', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const wordRange = editor.document.getWordRangeAtPosition(selection.start);
            const word = editor.document.getText(wordRange);

            if (word) {
                const command = `"C:\\Program Files (x86)\\AutoIt3\\AutoIt3Help.exe" ${word}`;
                exec(command, (error, stdout, stderr) => {
                    if (error) {
                        vscode.window.showErrorMessage(`Error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        vscode.window.showErrorMessage(`Stderr: ${stderr}`);
                        return;
                    }
                    vscode.window.showInformationMessage(`AutoIt3Help opened with: ${word}`);
                });
            }
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

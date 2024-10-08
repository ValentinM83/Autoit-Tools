import * as vscode from 'vscode';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('autoit-tools');
    const autoIt3HelpPath = config.get('autoIt3HelpPath');
    
    let disposable = vscode.commands.registerCommand('autoit-tools.openAutoIt3Help', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const wordRange = editor.document.getWordRangeAtPosition(selection.start);
            const word = editor.document.getText(wordRange);

            if (word) {
                const command = `"${autoIt3HelpPath}" ${word}`;
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

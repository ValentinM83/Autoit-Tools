import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const config = vscode.workspace.getConfiguration('autoit-tools');
    const autoIt3HelpPath = config.get<string>('autoIt3HelpPath') || '';

    const getUdfPaths = () => {
        return vscode.workspace.getConfiguration('autoit-tools').get<{ prefix: string, path: string }[]>('udfPaths') || [];
    };

    let disposable = vscode.commands.registerCommand('autoit-tools.openAutoIt3Help', () => {
        const udfPaths = getUdfPaths();
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('No active editor');
            return;
        }

        const selection = editor.selection;
        const wordRange = editor.document.getWordRangeAtPosition(selection.start);
        const word = wordRange ? editor.document.getText(wordRange) : '';

        if (!word) {
            vscode.window.showErrorMessage('No word selected');
            return;
        }

        let command = '';
        let software = '';

        // Vérifier si la fonction appartient à un UDF
        const matchedUDF = udfPaths.find(udf => word.startsWith(udf.prefix));

        if (matchedUDF) {
            command = `hh.exe mk:@MSITStore:${matchedUDF.path}::/funcs/${word}.htm`;
            software = path.basename(matchedUDF.path);
        } else {
            command = `"${autoIt3HelpPath}" ${word}`;
            software = path.basename(autoIt3HelpPath);
        }

        exec(command, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                vscode.window.showErrorMessage(`Stderr: ${stderr}`);
                return;
            }
        });

        vscode.window.showInformationMessage(`${software} opened with: ${word}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

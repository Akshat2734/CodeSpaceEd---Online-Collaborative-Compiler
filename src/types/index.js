import { Monaco } from "@monaco-editor/react";
import { Id } from "../../convex/_generated/dataModel";

/**
 * @typedef {Object} Theme
 * @property {string} id - Theme identifier
 * @property {string} label - Display name of the theme
 * @property {string} color - Color associated with the theme
 */

/**
 * @typedef {Object} LanguageRuntime
 * @property {string} language - Programming language identifier
 */

/**
 * @typedef {Object} Language
 * @property {string} id - Language identifier
 * @property {string} label - Display name of the language
 * @property {string} logoPath - Path to the language logo
 * @property {string} monacoLanguage - Monaco editor language identifier
 * @property {string} defaultCode - Default code template
 * @property {LanguageRuntime} pistonRuntime - Runtime configuration for the language
 */


/**
 * @typedef {Object} ExecuteCodeResponse
 * @property {Object} [compile] - Compilation results
 * @property {string} compile.output - Compilation output
 * @property {Object} [run] - Runtime results
 * @property {string} run.output - Program output
 * @property {string} run.stderr - Error output
 */

/**
 * @typedef {Object} ExecutionResult
 * @property {string} code - The code that was executed
 * @property {string} output - Program output
 * @property {string|null} error - Error message if any
 */

/**
 * @typedef {Object} CodeEditorState
 * @property {string} language - Current programming language
 * @property {string} output - Current output
 * @property {boolean} isRunning - Execution status
 * @property {string|null} error - Current error message
 * @property {string} theme - Editor theme
 * @property {number} fontSize - Editor font size
 * @property {Monaco|null} editor - Monaco editor instance
 * @property {ExecutionResult|null} executionResult - Last execution result
 * @property {function(Monaco): void} setEditor - Set editor instance
 * @property {function(): string} getCode - Get current code
 * @property {function(string): void} setLanguage - Set programming language
 * @property {function(string): void} setTheme - Set editor theme
 * @property {function(number): void} setFontSize - Set font size
 * @property {function(): Promise<void>} runCode - Execute current code
 */

/**
 * @typedef {Object} Snippet
 * @property {Id<"snippets">} _id - Unique identifier
 * @property {number} _creationTime - Creation timestamp
 * @property {string} userId - Owner's user ID
 * @property {string} language - Programming language
 * @property {string} code - Snippet code
 * @property {string} title - Snippet title
 * @property {string} userName - Owner's username
 */

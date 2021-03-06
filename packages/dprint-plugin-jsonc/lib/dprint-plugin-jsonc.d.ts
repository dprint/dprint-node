import { Plugin, PluginInitializeOptions, BaseResolvedConfiguration, ConfigurationDiagnostic } from "@dprint/types";

export interface JsoncConfiguration {
    /**
     * The width of a line the printer will try to stay under. Note that the printer may exceed this width in certain cases.
     * @default 120
     */
    lineWidth?: number;
    /**
     * The number of characters for an indent.
     * @default 4
     */
    indentWidth?: number;
    /**
     * Whether to use tabs (true) or spaces (false).
     * @default false
     */
    useTabs?: boolean;
    /**
     * The kind of newline to use.
     * @default "auto"
     * @value "auto" - For each file, uses the newline kind found at the end of the last line.
     * @value "crlf" - Uses carriage return, line feed.
     * @value "lf" - Uses line feed.
     * @value "system" - Uses the system standard (ex. crlf on Windows).
     */
    newLineKind?: "auto" | "crlf" | "lf" | "system";
    /**
     * Forces a space after slashes.
     *
     * For example: `// comment` instead of `//comment`
     */
    "commentLine.forceSpaceAfterSlashes"?: boolean;
}

/**
 * Resolved configuration from user specified configuration.
 */
export interface ResolvedJsoncConfiguration extends BaseResolvedConfiguration {
    "commentLine.forceSpaceAfterSlashes": boolean;
}

export declare class JsoncPlugin implements Plugin<ResolvedJsoncConfiguration> {
    /**
     * Constructor.
     * @param config - The configuration to use.
     */
    constructor(config?: JsoncConfiguration);
    /** @inheritdoc */
    version: string;
    /** @inheritdoc */
    name: string;
    /** @inheritdoc */
    dispose(): void;
    /** @inheritdoc */
    initialize(options: PluginInitializeOptions): void;
    /** @inheritdoc */
    shouldFormatFile(filePath: string): boolean;
    /** @inheritdoc */
    getConfiguration(): ResolvedJsoncConfiguration;
    /** @inheritdoc */
    getConfigurationDiagnostics(): ConfigurationDiagnostic[];
    /** @inheritdoc */
    formatText(filePath: string, fileText: string): string | false;
    private _getFormatContext;
}

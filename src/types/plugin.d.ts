export interface Metadata {
	size: number;
	isDir: boolean;
	isFile: boolean;
	isExist: boolean;
}

export interface ReadImage {
	width: number;
	height: number;
	image: string;
}

export type ClipboardType = "text" | "rtf" | "html" | "image" | "files";

export interface ClipboardPayload {
	width?: number;
	height?: number;
	type: ClipboardType;
	size: number;
	value: string | string[];
}

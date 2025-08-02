type FileData = {
    path: string;
    content: string;
}

type DatabaseData = {
    connectionURL: string;
    credentials: [string, string];
}

type Status = {
    isAccessible: boolean;
    errorMessage ?: string;
}

// Intersection type
type AccessibleFileData = FileData & Status;
export default interface IFileUploadProps {
    accept?: string[];
    onChange: (files: File[] | File) => void;
    multiple?: boolean;
    title: string;
}

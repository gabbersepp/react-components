export default interface IFileUploadProps {
    // values according to: https://www.w3schools.com/tags/att_input_accept.asp
    accept?: string[];
    onChange: (files: File[] | File) => void;
    multiple?: boolean;
    title: string;
}
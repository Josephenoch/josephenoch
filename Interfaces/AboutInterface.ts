export interface IFile{
    title:string,
    content:string
} 

export interface IFolder{
    folderName:string,
    pages:IFile[]
}
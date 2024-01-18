//import * as FileSaver from "file-saver"
import XLSX from "sheetjs-style"
import { Character } from "../pages/main";
const FileSaver = require("file-saver")
type Excelprops = {
    excelData:Character,
    fileName:string
}
const ExportExcel=({excelData,fileName}:Excelprops) => {
    const fileType = "application/vnd.openxmlformats-officedocument.spreadsheet.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    const exportToExcel = async () => {
        const ws = XLSX.utils.json_to_sheet(excelData)
        const wb={Sheets:{'data':ws},SheetNames:['data']};
        const excelBuffer = XLSX.write(wb,{bookType:'xlsx',type:'array'});
        const data = new Blob([excelBuffer],{type:fileType});
        FileSaver.saveAs(data,fileName+fileExtension)
    }
    return (
        <>
       <button className="px-2 py-2 bg-red-800 text-white rounded-md hover:text-black hover:bg-slate-300   " onClick={(e)=>exportToExcel()}>
        Get the excel export
       </button>
        </>
    )
}
 export default ExportExcel
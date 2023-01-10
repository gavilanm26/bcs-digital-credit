/*import * as XLSX from 'xlsx';
import { beforeEach } from '@playwright/test';

beforeEach(async (actor: PlaywrightActor) => {
  // Lee el archivo Excel
  const workbook = XLSX.readFile('./data.xlsx');

  // Itera sobre las hojas del archivo Excel
  for (let i = 0; i < workbook.SheetNames.length; i++) {
    // Almacena los datos de la hoja en una variable global
    const sheet = workbook.Sheets[workbook.SheetNames[i]];
    const data = XLSX.utils.sheet_to_json(sheet);
    global[`${workbook.SheetNames[i]}Data`] = data;
  }
});*/
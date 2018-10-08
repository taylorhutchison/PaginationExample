import { County } from "./county";

export interface CountyQueryResult {
    counties: County[];
    totalRecordCount: number;
}
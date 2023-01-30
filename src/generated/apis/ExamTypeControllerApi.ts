// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    ExamTypeDTO,
    ResponseEntity,
} from '../models';

export interface DeleteExamTypeUsingDELETERequest {
    code: string;
}

export interface NewExamTypeUsingPOSTRequest {
    newExamType: ExamTypeDTO;
}

export interface UpdateExamTypeUsingPUTRequest {
    code: string;
    updateExamType: ExamTypeDTO;
}

/**
 * no description
 */
export class ExamTypeControllerApi extends BaseAPI {

    /**
     * deleteExamType
     */
    deleteExamTypeUsingDELETE({ code }: DeleteExamTypeUsingDELETERequest): Observable<ResponseEntity>
    deleteExamTypeUsingDELETE({ code }: DeleteExamTypeUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<ResponseEntity>>
    deleteExamTypeUsingDELETE({ code }: DeleteExamTypeUsingDELETERequest, opts?: OperationOpts): Observable<ResponseEntity | RawAjaxResponse<ResponseEntity>> {
        throwIfNullOrUndefined(code, 'code', 'deleteExamTypeUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ResponseEntity>({
            url: '/examtypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getExamTypes
     */
    getExamTypesUsingGET(): Observable<Array<ExamTypeDTO>>
    getExamTypesUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<ExamTypeDTO>>>
    getExamTypesUsingGET(opts?: OperationOpts): Observable<Array<ExamTypeDTO> | RawAjaxResponse<Array<ExamTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<ExamTypeDTO>>({
            url: '/examtypes',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newExamType
     */
    newExamTypeUsingPOST({ newExamType }: NewExamTypeUsingPOSTRequest): Observable<ExamTypeDTO>
    newExamTypeUsingPOST({ newExamType }: NewExamTypeUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ExamTypeDTO>>
    newExamTypeUsingPOST({ newExamType }: NewExamTypeUsingPOSTRequest, opts?: OperationOpts): Observable<ExamTypeDTO | RawAjaxResponse<ExamTypeDTO>> {
        throwIfNullOrUndefined(newExamType, 'newExamType', 'newExamTypeUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ExamTypeDTO>({
            url: '/examtypes',
            method: 'POST',
            headers,
            body: newExamType,
        }, opts?.responseOpts);
    };

    /**
     * updateExamType
     */
    updateExamTypeUsingPUT({ code, updateExamType }: UpdateExamTypeUsingPUTRequest): Observable<ExamTypeDTO>
    updateExamTypeUsingPUT({ code, updateExamType }: UpdateExamTypeUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<ExamTypeDTO>>
    updateExamTypeUsingPUT({ code, updateExamType }: UpdateExamTypeUsingPUTRequest, opts?: OperationOpts): Observable<ExamTypeDTO | RawAjaxResponse<ExamTypeDTO>> {
        throwIfNullOrUndefined(code, 'code', 'updateExamTypeUsingPUT');
        throwIfNullOrUndefined(updateExamType, 'updateExamType', 'updateExamTypeUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<ExamTypeDTO>({
            url: '/examtypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'PUT',
            headers,
            body: updateExamType,
        }, opts?.responseOpts);
    };

}

/* tslint:disable */
/* eslint-disable */
/**
 * Ducksms
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@ducksms.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CancelSmsSchedule,
    CancelSmsScheduleFromJSON,
    CancelSmsScheduleToJSON,
    ErrorException,
    ErrorExceptionFromJSON,
    ErrorExceptionToJSON,
    ErrorInvalidRequest,
    ErrorInvalidRequestFromJSON,
    ErrorInvalidRequestToJSON,
    ErrorNotFound,
    ErrorNotFoundFromJSON,
    ErrorNotFoundToJSON,
    ErrorUnauthenticated,
    ErrorUnauthenticatedFromJSON,
    ErrorUnauthenticatedToJSON,
    ListSmsSchedule,
    ListSmsScheduleFromJSON,
    ListSmsScheduleToJSON,
} from '../models';

export interface CancelSmsScheduleRequest {
    id: string;
}

export interface ListSmsScheduleRequest {
    page?: number;
    filterSenderName?: string;
    filterType?: ListSmsScheduleFilterTypeEnum;
    filterMessageType?: ListSmsScheduleFilterMessageTypeEnum;
    filterStatus?: ListSmsScheduleFilterStatusEnum;
}

/**
 * 
 */
export class SmsScheduleApi extends runtime.BaseAPI {

    /**
     * Cancel existing sms schedule
     * Cancel Sms Schedule
     */
    async cancelSmsScheduleRaw(requestParameters: CancelSmsScheduleRequest): Promise<runtime.ApiResponse<CancelSmsSchedule>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling cancelSmsSchedule.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerToken", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/sms/scheduled/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CancelSmsScheduleFromJSON(jsonValue));
    }

    /**
     * Cancel existing sms schedule
     * Cancel Sms Schedule
     */
    async cancelSmsSchedule(requestParameters: CancelSmsScheduleRequest): Promise<CancelSmsSchedule> {
        const response = await this.cancelSmsScheduleRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all the sms schedule
     * List Sms Schedule
     */
    async listSmsScheduleRaw(requestParameters: ListSmsScheduleRequest): Promise<runtime.ApiResponse<ListSmsSchedule>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.filterSenderName !== undefined) {
            queryParameters['filter[sender_name]'] = requestParameters.filterSenderName;
        }

        if (requestParameters.filterType !== undefined) {
            queryParameters['filter[type]'] = requestParameters.filterType;
        }

        if (requestParameters.filterMessageType !== undefined) {
            queryParameters['filter[message_type]'] = requestParameters.filterMessageType;
        }

        if (requestParameters.filterStatus !== undefined) {
            queryParameters['filter[status]'] = requestParameters.filterStatus;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("BearerToken", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/api/v1/sms/scheduled`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ListSmsScheduleFromJSON(jsonValue));
    }

    /**
     * List all the sms schedule
     * List Sms Schedule
     */
    async listSmsSchedule(requestParameters: ListSmsScheduleRequest): Promise<ListSmsSchedule> {
        const response = await this.listSmsScheduleRaw(requestParameters);
        return await response.value();
    }

}

/**
    * @export
    * @enum {string}
    */
export enum ListSmsScheduleFilterTypeEnum {
    Quick = 'quick',
    Bulk = 'bulk'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSmsScheduleFilterMessageTypeEnum {
    Ascii = 'ascii',
    Unicode = 'unicode'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSmsScheduleFilterStatusEnum {
    Pending = 'pending',
    Processing = 'processing',
    Completed = 'completed',
    Failed = 'failed',
    Cancelled = 'cancelled'
}
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreditHistory
 */
export interface CreditHistory {
    /**
     * 
     * @type {number}
     * @memberof CreditHistory
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof CreditHistory
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof CreditHistory
     */
    data?: { [key: string]: Array<number>; };
}

export function CreditHistoryFromJSON(json: any): CreditHistory {
    return CreditHistoryFromJSONTyped(json, false);
}

export function CreditHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CreditHistoryToJSON(value?: CreditHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'data': value.data,
    };
}



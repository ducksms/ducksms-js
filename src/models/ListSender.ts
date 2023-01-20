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
 * @interface ListSender
 */
export interface ListSender {
    /**
     * 
     * @type {number}
     * @memberof ListSender
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof ListSender
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: Array<number>; }}
     * @memberof ListSender
     */
    data?: { [key: string]: Array<number>; };
}

export function ListSenderFromJSON(json: any): ListSender {
    return ListSenderFromJSONTyped(json, false);
}

export function ListSenderFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListSender {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function ListSenderToJSON(value?: ListSender | null): any {
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



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
 * @interface ErrorException
 */
export interface ErrorException {
    /**
     * 
     * @type {number}
     * @memberof ErrorException
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorException
     */
    message?: string;
}

export function ErrorExceptionFromJSON(json: any): ErrorException {
    return ErrorExceptionFromJSONTyped(json, false);
}

export function ErrorExceptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorException {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ErrorExceptionToJSON(value?: ErrorException | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
    };
}



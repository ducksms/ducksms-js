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
 * @interface PreviewSmsSend
 */
export interface PreviewSmsSend {
    /**
     * 
     * @type {number}
     * @memberof PreviewSmsSend
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof PreviewSmsSend
     */
    message?: string;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PreviewSmsSend
     */
    data?: { [key: string]: Array<string>; };
}

export function PreviewSmsSendFromJSON(json: any): PreviewSmsSend {
    return PreviewSmsSendFromJSONTyped(json, false);
}

export function PreviewSmsSendFromJSONTyped(json: any, ignoreDiscriminator: boolean): PreviewSmsSend {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function PreviewSmsSendToJSON(value?: PreviewSmsSend | null): any {
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



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
 * @interface SmsSchema
 */
export interface SmsSchema {
    /**
     * Preview the sms information
     * @type {string}
     * @memberof SmsSchema
     */
    preview?: SmsSchemaPreviewEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof SmsSchema
     */
    mobileNumbers?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof SmsSchema
     */
    message?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SmsSchema
     */
    senderId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SmsSchema
     */
    scheduledAt?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SmsSchema
     */
    callbackUrl?: string | null;
}

export function SmsSchemaFromJSON(json: any): SmsSchema {
    return SmsSchemaFromJSONTyped(json, false);
}

export function SmsSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): SmsSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'preview': !exists(json, 'preview') ? undefined : json['preview'],
        'mobileNumbers': !exists(json, 'mobile_numbers') ? undefined : json['mobile_numbers'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'senderId': !exists(json, 'sender_id') ? undefined : json['sender_id'],
        'scheduledAt': !exists(json, 'scheduled_at') ? undefined : json['scheduled_at'],
        'callbackUrl': !exists(json, 'callback_url') ? undefined : json['callback_url'],
    };
}

export function SmsSchemaToJSON(value?: SmsSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'preview': value.preview,
        'mobile_numbers': value.mobileNumbers,
        'message': value.message,
        'sender_id': value.senderId,
        'scheduled_at': value.scheduledAt,
        'callback_url': value.callbackUrl,
    };
}

/**
* @export
* @enum {string}
*/
export enum SmsSchemaPreviewEnum {
    Yes = 'yes',
    No = 'no'
}


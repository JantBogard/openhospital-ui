// tslint:disable
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Point
 */
export interface Point {
    /**
     * 
     * @type {number}
     * @memberof Point
     */
    x?: number;
    /**
     * 
     * @type {number}
     * @memberof Point
     */
    y?: number;
}

export function PointFromJSON(json: any): Point {
    return {
        'x': !exists(json, 'x') ? undefined : json['x'],
        'y': !exists(json, 'y') ? undefined : json['y'],
    };
}

export function PointToJSON(value?: Point): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'x': value.x,
        'y': value.y,
    };
}



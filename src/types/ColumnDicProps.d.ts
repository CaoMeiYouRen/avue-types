/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

import { Props } from './Props.d'

export declare type DicData = {
    label: string
    value: unknown
}

export interface ColumnDicProps {
    /**
     * 数据字典属性的配置对象，具体参考Props参考配置
     * @type {object}
     */
    props?: Props;
    /**
     * 数据字典值
     */
    dicData?: DicData[];
    /**
     * 数据字典接口url地址
     */
    dicUrl?: string;
    /**
     * 数据字典接口url携带请求参数
     * @type {object}
     */
    dicQuery?: {
        [k: string]: unknown;
    };
    /**
     * 数据字典接口url携带头部参数
     * @type {object}
     */
    dicHeaders?: {
        [k: string]: unknown;
    };
    /**
     * 数据字典接口url返回数据格式化方法
     */
    dicFormatter?: (res) => {};
    /**
     * 数据字典接口请求方式
     */
    dicMethod?: string;
    [k: string]: unknown;
}
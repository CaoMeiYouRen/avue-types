/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Page {
    /**
     * 当前页数
     * @default 1
     */
    currentPage?: number;
    /**
     * 每页显示条目个数
     * @default 20
     */
    pageSize?: number;
    /**
     * 总条目数
     * @default 0
     */
    total?: number;
    /**
     * 页码按钮的数量，当总页数超过该值时会折叠
     * @default 7
     */
    pagerCount?: number;
    /**
     * 是否为分页按钮添加背景色
     * @default true
     */
    background?: boolean;
    /**
     * 组件布局，子组件名用逗号分隔
     */
    layout?: string;
    /**
     * 每页显示个数选择器的选项设置
     * @default [10, 20, 30, 40, 50, 100]
     */
    pageSizes?: number[];
    [k: string]: unknown;
}
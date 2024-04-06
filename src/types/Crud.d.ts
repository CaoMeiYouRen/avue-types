/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
import { Option } from './Option.d'
export interface Crud<T = unknown> {
    /**
     * 绑定值
     * @type {object}
     */
    "modelValue/v-model"?: {
        [k: string]: unknown;
    };
    /**
     * 显示的数据
     * @type {array}
     */
    data?: T[];
    /**
     * 表单配置项参考Option配置
     */
    option?: Option;
    /**
     * 打开前的回调，会暂停Dialog的打开，done用于关闭Dialog,type为当前窗口的类型
     */
    "before-open"?: (done, type) => {};
    /**
     * 关闭前的回调，会暂停Dialog的关闭，done用于关闭Dialog,type为当前窗口的类型
     */
    "before-close"?: (done, type) => {};
    /**
     * 表格多个按钮权限控制，采用函数方式可以精确到行控制
     * @type {object}
     */
    permission?: {
        [k: string]: unknown;
    };
    /**
     * 搜索变量
     * @type {object}
     */
    "v-model:search"?: {
        [k: string]: unknown;
    };
    /**
     * 分页变量参考Page参数
     * @type {object}
     */
    "v-model:page"?: {
        [k: string]: unknown;
    };
    /**
     * 单元格的className的回调方法，也可以使用字符串为所有单元格设置一个固定的className
     */
    "cell-class-name"?: ({ row, column, rowIndex, columnIndex }) => {};
    /**
     * 表头单元格的className的回调方法，也可以使用字符串为所有表头单元格设置一个固定的className
     */
    "header-cell-class-name"?: ({ row, column, rowIndex, columnIndex }) => {};
    /**
     * 行的className的回调方法，也可以使用字符串为所有行设置一个固定的className
     */
    "row-class-name"?: ({ row, rowIndex }) => {};
    /**
     * 合并行或列的计算方法
     */
    "span-method"?: ({ row, column, rowIndex, columnIndex }) => {};
    /**
     * 自定义的合计计算方法
     */
    "summary-method"?: ({ columns, data }) => {};
    /**
     * 表格等待框的控制
     */
    "table-loading"?: boolean;
    /**
     * upload组件上传前的回调,done用于继续图片上传，loading用于中断操作
     */
    "upload-before"?: (file, done, loading) => {};
    /**
     * upload组件上传后的回调,done用于结束操作，loading用于中断操作
     */
    "upload-after"?: (res, done) => {};
    /**
     * upload组件删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除
     */
    "upload-delete"?: (file, column) => {};
    /**
     * upload组件查看回调
     */
    "upload-preview"?: (file, column, done) => {};
    /**
     * upload组件上传失败错误回调
     */
    "upload-error"?: (error, column) => {};
    /**
     * upload组件上传超过长度限制回调
     */
    "upload-exceed"?: (limit, files, fileList, column) => {};
    [k: string]: unknown;
}
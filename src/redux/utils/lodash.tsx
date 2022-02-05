import _ from "lodash";

export const setValue = (object: any,path: _.PropertyPath,value: any) => {
    return _.set(object, path, value);
};

export const getValue = (object: any,path: any,defaultValue: any) => {
    return _.get(object, path,defaultValue);
};

export const isEmpty = (object: any) => {
    return _.isEmpty(object);
};
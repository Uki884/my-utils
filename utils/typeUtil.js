
export const isFile = (input) => {
   if ('File' in window && input instanceof File)
      return true;
   else return false;
}

export const isBlob = (input) => {
    if ('Blob' in window && input instanceof Blob)
        return true;
    else return false;
}

export const isObject = (val) => {
    if (
        val !== null &&
        typeof val === 'object' &&
        val.constructor === Object
    ) {
        return true;
    }
    return false;
};

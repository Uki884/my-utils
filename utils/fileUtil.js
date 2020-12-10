// fileオブジェクトからbase64を生成する
const getBase64FromFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// base64からfileオブジェクトを生成する
const getFileFromBase64 = async (base64) => {
    const fileType = getFileTypeFromBase64(base64)
    let extension;
    if (fileType === 'image/png') {
        extension = '.png';
    } else if (result === 'image/jpeg') {
        extension = '.jpg';
    } else if (result === 'application/pdf') {
        extension = '.pdf';
    }
    const blob = await fetch(base64).then(res => res.blob()).catch(e=> console.log(e));
    const file = new File([blob], `already_updated_image${extension}`, { type: fileType });
    return file;
},

// base64 or Fileオブジェクトからファイルタイプを取得する
const getFileType = (file) => {
    if (file instanceof File) {
        return file.type
    } else if(typeof (file) == "string" || file instanceof String) {
        const formattedResult = base64.split(',')
        if (formattedResult.length <= 1) {
            return false;
        }
        const start = formattedResult[0].indexOf(':')
        const type = formattedResult[0].substr(start + 1).split(';')[0]
        return type
    }
}
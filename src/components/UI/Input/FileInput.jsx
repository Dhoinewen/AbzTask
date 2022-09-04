import React, {useEffect, useState} from 'react';
import s from './FileInput.module.scss'

const FileInput = ({handler, errorInData, name}) => {
    const [fileName, setFileName] = useState('Upload your photo')

    const changeHandler = (event) => {
        handler(event)
        setFileName(event.target.files[0].name)
    };

    return (
        <div className={!errorInData ? s.fileInput : s.error}>
            <label className={s.customFileUpload}>
                <input type='file' name={name} onChange={e => changeHandler(e)}/>
                <span className={s.uploadText}>
                    <div>Upload</div>
                </span>
                <span className={s.fileNameText}>
                    <div>
                        {fileName}
                    </div>
                </span>
            </label>
        </div>
    );
};

export default FileInput;
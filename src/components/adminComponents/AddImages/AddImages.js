import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { ErrorBlock, SuccessBlock } from "../../stateless";
import api from "../../../api";
import "./AddImages.scss";

const AddImages = props => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResponse, setUploadResponse] = useState(null);

  const onInputChange = target => {
    setSelectedFile(target.files[0]);
  };

   const onFileUpload = async _ => {
    const fd = new FormData();
    fd.append("image", selectedFile, selectedFile.name);
    await api
      .post(`/products/image/upload/${props.id}`, fd, {
        onUploadProgress: progressEvent => {
          setUploadProgress(
            Math.floor((progressEvent.loaded / progressEvent.total) * 100)
          );
        }
      })
      .then(resp => {
        setUploadResponse(resp.data);
      })
      .catch(err => {
        setUploadResponse({
          message: "Error Uploading File!",
          status: 300
        });
      });
  };

  const renderResponse = _ => {
    if (
      uploadResponse &&
      uploadResponse.message &&
      uploadResponse.status === 200
    ) {
      return (
        <div>
          <SuccessBlock message={uploadResponse.message} />
        </div>
      );
    } else if (
      uploadResponse &&
      uploadResponse.message &&
      uploadResponse.status !== 200
    ) {
      return (
        <div>
          <ErrorBlock message={uploadResponse.message} />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="add-images">
      {renderResponse()}
      <p className="font-weight-bold mb-2 text-danger">{`${props.name}`}</p>
      <form>
        <ProgressBar className="mb-3" animated now={uploadProgress} />
        <div className="input-group">
          <div className="custom-file ">
            <input
              type="file"
              onChange={({ target }) => onInputChange(target)}
              className="custom-file-input "
              id="inputGroupFile04"
            />
            <label
              className="custom-file-label overflow-hidden"
              for="inputGroupFile04"
            >
              {selectedFile ? selectedFile.name : "Choose file"}
            </label>
          </div>
          <div className="input-group-append">
            <button
              onClick={onFileUpload}
              className="btn btn-secondary"
              type="button"
            >
              UPLOAD
            </button>
          </div>
        </div>
        <button onClick={props.onClose} className="btn btn-danger mt-2">
          Close
        </button>
      </form>
    </div>
  );
};

export default AddImages;
